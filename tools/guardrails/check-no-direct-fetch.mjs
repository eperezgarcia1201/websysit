import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const PRESENTATION_SCOPE = path.join(ROOT, "frontend", "src", "features");
const CODE_EXTENSIONS = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs"]);
const FETCH_PATTERN = /\bfetch\s*\(/g;

function walk(directory, output) {
  const entries = readdirSync(directory, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, output);
      continue;
    }
    if (!entry.isFile()) continue;
    if (!CODE_EXTENSIONS.has(path.extname(entry.name))) continue;
    output.push(fullPath);
  }
}

const files = [];
try {
  if (statSync(PRESENTATION_SCOPE).isDirectory()) {
    walk(PRESENTATION_SCOPE, files);
  }
} catch {
  // Missing scope is treated as zero violations.
}

const presentationFiles = files.filter((filePath) => filePath.includes(`${path.sep}presentation${path.sep}`));
const violations = [];

for (const filePath of presentationFiles) {
  const contents = readFileSync(filePath, "utf8");
  if (FETCH_PATTERN.test(contents)) {
    violations.push(path.relative(ROOT, filePath));
  }
}

if (violations.length > 0) {
  console.error("check:no-direct-fetch failed. Direct fetch calls are not allowed in presentation layer:");
  for (const filePath of violations) {
    console.error(`- ${filePath}`);
  }
  process.exit(1);
}

console.log(`check:no-direct-fetch passed (${presentationFiles.length} presentation files checked).`);
