var tests = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // testsAutoImport.js
  var testsAutoImport_exports = {};
  __export(testsAutoImport_exports, {
    tests: () => tests
  });

  // src/utils/sum/sum.test.js
  var sum_test_exports = {};
  __export(sum_test_exports, {
    sum_test: () => sum_test
  });
  function sum_test() {
    describe("sum of two numbers", () => {
      it("should return 3, sum of two numbers 1 and 2", () => {
        const result = sum(1, 2);
        const expected = 3;
        expect(result).toBe(expected);
      });
    });
  }

  // src/tests/sample/successSuiteTest/successSuiteTest.test.js
  var successSuiteTest_test_exports = {};
  __export(successSuiteTest_test_exports, {
    successSuiteTest: () => successSuiteTest
  });
  function successSuiteTest() {
    describe("suite should succeed", () => {
      it("should succeed, true === true", () => {
        expect(true).toBe(true);
      });
      it("should succeed, 3 === 3", () => {
        expect(3).toBe(3);
      });
    });
  }

  // src/tests/sample/failSuiteTest/failSuiteTest.test.js
  var failSuiteTest_test_exports = {};
  __export(failSuiteTest_test_exports, {
    failSuiteTest: () => failSuiteTest
  });
  function failSuiteTest() {
    describe("suite should fail", () => {
      it("should fail, true to be false", () => {
        expect(true).toBe(false);
      });
      it("tests numbers, 3 === 3", () => {
        expect(3).toBe(3);
      });
    });
  }

  // testsAutoImport.js
  var tests = { ...sum_test_exports, ...successSuiteTest_test_exports, ...failSuiteTest_test_exports };
  return __toCommonJS(testsAutoImport_exports);
})();
