/**
 * converter.js 어댑터
 * 브라우저용 변환 엔진을 Node.js에서 사용할 수 있도록 vm 모듈로 격리 실행
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { marked } = require('marked');

const CONVERTER_PATH = process.env.CONVERTER_PATH
  || path.resolve(__dirname, '../../markdown-to-confluence-converter/js/converter.js');

// converter.js 원본 로드
let converterSource = fs.readFileSync(CONVERTER_PATH, 'utf-8');

// const ConfluenceConverter → var ConfluenceConverter 치환
// vm sandbox에서 const는 글로벌 컨텍스트에 노출되지 않으므로 var로 변경
converterSource = converterSource.replace(
  /^const ConfluenceConverter/m,
  'var ConfluenceConverter'
);

// vm 컨텍스트 생성 — marked를 전역 변수로 주입
const sandbox = { marked };
vm.createContext(sandbox);
vm.runInContext(converterSource, sandbox);

if (!sandbox.ConfluenceConverter || typeof sandbox.ConfluenceConverter.convert !== 'function') {
  throw new Error('ConfluenceConverter 로드 실패: convert 함수를 찾을 수 없습니다.');
}

module.exports = sandbox.ConfluenceConverter;
