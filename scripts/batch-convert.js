/**
 * 마크다운 → Confluence 위키 마크업 일괄 변환 스크립트
 * 사용법: npm run convert
 */
const fs = require('fs');
const path = require('path');
const ConfluenceConverter = require('./converter-adapter');

const PROJECT_ROOT = path.resolve(__dirname, '..');
const OUTPUT_DIR = path.join(PROJECT_ROOT, 'confluence-output');

// 제외 대상 디렉토리/파일
const EXCLUDES = ['CLAUDE.md', '.claude', 'node_modules', 'confluence-output', 'scripts'];

/**
 * 디렉토리를 재귀 탐색하여 .md 파일 목록 반환
 */
function findMarkdownFiles(dir, baseDir) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.relative(baseDir, fullPath);

    // 제외 대상 확인
    const topLevel = relativePath.split(path.sep)[0];
    if (EXCLUDES.includes(topLevel) || EXCLUDES.includes(entry.name)) {
      continue;
    }

    if (entry.isDirectory()) {
      results.push(...findMarkdownFiles(fullPath, baseDir));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      results.push(relativePath);
    }
  }

  return results;
}

/**
 * 메인 실행
 */
function main() {
  const mdFiles = findMarkdownFiles(PROJECT_ROOT, PROJECT_ROOT);
  console.log(`변환 대상: ${mdFiles.length}개 마크다운 파일\n`);

  let success = 0;
  let failed = 0;

  for (const relativePath of mdFiles) {
    const srcPath = path.join(PROJECT_ROOT, relativePath);
    const wikiRelPath = relativePath.replace(/\.md$/, '.wiki');
    const destPath = path.join(OUTPUT_DIR, wikiRelPath);

    try {
      const markdown = fs.readFileSync(srcPath, 'utf-8');
      const wiki = ConfluenceConverter.convert(markdown, { theme: 'Emacs' });

      // 출력 디렉토리 생성
      fs.mkdirSync(path.dirname(destPath), { recursive: true });
      fs.writeFileSync(destPath, wiki, 'utf-8');

      console.log(`  [성공] ${relativePath} → ${wikiRelPath}`);
      success++;
    } catch (err) {
      console.error(`  [실패] ${relativePath}: ${err.message}`);
      failed++;
    }
  }

  console.log(`\n변환 완료: 성공 ${success}개 / 실패 ${failed}개`);

  if (failed > 0) {
    process.exit(1);
  }
}

main();
