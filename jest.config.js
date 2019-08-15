// module.exports = {
//   moduleFileExtensions: ["js", "jsx", "json", "vue"],
//   transform: {
//     "^.+\\.vue$": "vue-jest",
//     ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$":
//       "jest-transform-stub",
//     "^.+\\.jsx?$": "babel-jest"
//   },
//   transformIgnorePatterns: ["/node_modules/"],
//   moduleNameMapper: {
//     "^@/(.*)$": "<rootDir>/src/$1"
//   },
//   snapshotSerializers: ["jest-serializer-vue"],
//   // testMatch: [
//   //   // "**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)"
//   //   // 以上是指定只有tests目录下的文件才进行单元测试
//   //   "**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)"
//   //   // 只要是spec结尾的文件都进行单元测试
//   // ],
//   // testURL: "http://localhost/",
//   // collectCoverage: process.env.COVERAGE === "true",
//   // // 是否运行测试覆盖率的收集，主要是看在什么运行环境下,这里是测试集成环境下的。
//   // collectCoverageFrom: ["src/**/*.{js,vue}", "!**/node_modules/**"],
//   // // 将那些文件列入到测试基准中
//   testMatch: ["**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)"],
//   testURL: "http://localhost/",
//   collectCoverage: process.env.COVERAGE === "true",
//   collectCoverageFrom: ["src/**/*.{js,vue}", "!**/node_modules/**"],
//   watchPlugins: [
//     "jest-watch-typeahead/filename",
//     "jest-watch-typeahead/testname"
//   ]
// };
module.exports = {
  moduleFileExtensions: ["js", "jsx", "json", "vue"],
  transform: {
    "^.+\\.vue$": "vue-jest",
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
    "^.+\\.jsx?$": "babel-jest"
  },
  transformIgnorePatterns: ["/node_modules/"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  snapshotSerializers: ["jest-serializer-vue"],
  testMatch: ["**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)"],
  testURL: "http://localhost/",
  collectCoverage: process.env.COVERAGE === "true",
  collectCoverageFrom: ["src/**/*.{js,vue}", "!**/node_modules/**"]
};
