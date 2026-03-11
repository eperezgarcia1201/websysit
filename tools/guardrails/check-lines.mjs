import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

const MAX_LINES = 300;
const ROOT = process.cwd();
const TARGETS = [path.join(ROOT, "frontend", "src", "features")];
const CODE_EXTENSIONS = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs"]);

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
for (const target of TARGETS) {
  try {
    if (statSync(target).isDirectory()) {
      walk(target, files);
    }
  } catch {
    // Ignore missing folders so this guard can run before migrations begin.
  }
}

const violations = [];

for (const filePath of files) {
  const contents = readFileSync(filePath, "utf8");
  const lines = contents.split(/\r?\n/).length;
  if (lines > MAX_LINES) {
    violations.push({
      filePath: path.relative(ROOT, filePath),
      lines
    });
  }
}

if (violations.length > 0) {
  console.error("check:lines failed. Files exceed the line limit in migrated scopes:");
  for (const violation of violations) {
    console.error(`- ${violation.filePath}: ${violation.lines} lines (limit ${MAX_LINES})`);
  }
  process.exit(1);
}

console.log(`check:lines passed (${files.length} files checked, limit ${MAX_LINES}).`);
