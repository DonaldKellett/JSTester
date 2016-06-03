# JSTester

A simple custom Javascript TDD Framework that requires minimal setup.  Open Source

## Spec Methods

Spec methods are methods used to group and execute test cases.  Some spec methods are required for the tests to execute properly.

### Test.describe

`Test.describe` is the most basic of all spec methods used to group test cases to run against an algorithm.  **All test code MUST be placed in a `Test.describe` block in order to be executed properly.**

```javascript
Test.describe("Custom Message to describe Algorithm or Code - pass in empty string to use default message", function () {
  // The code to be executed
});
```

### Test.it

`Test.it` is used to subcategorise and group related test cases.  **`Test.it` is not required but it is highly recommended that you use it.  However, please note that `Test.it` must be nested in a `Test.describe` block to execute properly.**

```javascript
Test.describe("The Algorithm", function () {
  Test.it("Custom Message - pass in empty string to use default", function () {
    // The sub-group of tests to be executed
  });
  Test.it("Another sub-group of test cases", function () {
    // Another group of tests to be executed
  });
});
```

## Assertion Methods

### Test.expect

TODO: Complete Documentation
