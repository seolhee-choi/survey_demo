module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest', // 최신 ECMAScript 버전 사용
    sourceType: 'module',
  },
  rules: {
    // 코드 스타일 규칙
    'no-unused-vars': 'warn', // 사용되지 않는 변수 경고
    'no-console': 'warn', // console.log 경고 (필요 시 'off'로 설정 가능)
    semi: ['error', 'always'], // 세미콜론 필수
    quotes: 'off', // 작은,큰 따옴표 둘다 사용 가능

    // Vue-specific 규칙
    'vue/multi-word-component-names': 'off', // 컴포넌트 이름을 여러 단어로 설정하지 않아도 됨
    'vue/html-self-closing': 'off', // self-closing 태그 규칙
    'vue/max-attributes-per-line': ['error', { singleline: 3 }], // 한 줄에 허용되는 속성 개수 제한

    // Prettier 규칙 (이미 Prettier 설정을 연동한 경우 자동으로 적용됨)
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        endOfLine: 'lf',
      },
    ],
  },
};
