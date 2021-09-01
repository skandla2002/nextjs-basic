module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    quotes: ["error", "double"], // 더블 쿼터 사용
    "@typescript-eslint/quotes": ["error", "double"], // 더블 쿼터 사용
    "no-unused-vars": "off", // 사용 안 한 변수 경고 중복
    "spaced-comment": "off", // 주석을 뒤에쓰지 말라는 경고
    "@typescript-eslint/no-unused-vars": "warn", // 사용 안 한 변수는 경고
    "jsx-a11y/control-has-associated-label": "off", // 상호 작용하는 엘리먼트에 label을 넣는다.
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ], // Link안에 <a> tag 있는 경우 에러 개선
    //: a11y/blob/master/docs/rules/anchor-is-valid.mdeslintjsx-a11y/anchor-is-valid
    "react/no-array-index-key": "off", // key값으로 index를 사용 할 수있다.
    "comma-dangle": "off", // 마지막에 ,을 넣어주지 않는다.
    "arrow-body-style": "off", // 화살표 함수내에 return을 사용 할 수 있다.
    "react/no-unescaped-entities": "off", // 문자열 내에서 " ' > } 허용
    "react/prop-types": "off", // proptypes를 사용하지 않는다.
    "object-curly-newline": "off", // { 다음 줄 바꿈을 강제로 하지 않는다.
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
      },
    },
  },
};
