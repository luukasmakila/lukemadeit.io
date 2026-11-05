import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";
import { assetPath } from "../src/app/assetPath.ts";
import { verifyPages } from "../scripts/verify-pages.mjs";

test("public assets work with a custom domain and project-site base path", () => {
  const previous = process.env.NEXT_PUBLIC_BASE_PATH;
  try {
    for (const basePath of ["", "/lukemadeit.io"]) {
      process.env.NEXT_PUBLIC_BASE_PATH = basePath;
      assert.equal(assetPath("/profile-pic.jpg"), `${basePath}/profile-pic.jpg`);
      assert.equal(assetPath("/gear/c-stand.webp"), `${basePath}/gear/c-stand.webp`);
      for (const external of ["https://example.com/a.jpg", "//example.com/a.jpg", "data:image/png;base64,abc", "relative.jpg"]) {
        assert.equal(assetPath(external), external);
      }
    }
  } finally {
    if (previous === undefined) delete process.env.NEXT_PUBLIC_BASE_PATH;
    else process.env.NEXT_PUBLIC_BASE_PATH = previous;
  }
});

test("export verification catches missing routes, assets, and unprefixed URLs", () => {
  const original = process.cwd();
  const fixture = mkdtempSync(join(tmpdir(), "pages-test-"));
  try {
    process.chdir(fixture);
    mkdirSync("src/app/blog", { recursive: true });
    writeFileSync("src/app/page.tsx", "");
    writeFileSync("src/app/blog/page.tsx", "");
    mkdirSync("out/blog", { recursive: true });
    writeFileSync("out/index.html", '<img src="/site/photo.jpg"><a href="/site/blog/">Blog</a>');
    writeFileSync("out/404.html", "");
    writeFileSync("out/photo.jpg", "fixture");
    assert.throws(() => verifyPages("out", "/site"), /Missing exported route: blog/);
    writeFileSync("out/blog/index.html", "");
    assert.equal(verifyPages("out", "/site"), 3);
    writeFileSync("out/index.html", '<img src="/photo.jpg">');
    assert.throws(() => verifyPages("out", "/site"), /URL misses base path/);
    assert.equal(verifyPages("out", ""), 3);
    writeFileSync("out/index.html", '<img src="/missing.jpg">');
    assert.throws(() => verifyPages("out", ""), /URL has no exported file/);
    writeFileSync("out/index.html", '<img src="//example.com/photo.jpg"><a href="https://example.com/">External</a>');
    assert.equal(verifyPages("out", "/site"), 3);
  } finally {
    process.chdir(original);
    rmSync(fixture, { recursive: true, force: true });
  }
});
