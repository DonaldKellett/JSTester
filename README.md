# JSTester

A simple custom Javascript TDD Framework that requires minimal setup.  Open Source

## Initialization

To start using JSTester, just include the following HTML in the `<head>` tags of your HTML file:

```html
<script src="/path/to/your/tester.js"></script>
```

Please also ensure that your HTML file contains `<body>` tags; otherwise, the JSTester will not work as expected.

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

#### Syntax

```javascript
Test.expect(passed[, msg[, success]]);
```

#### Description

The most basic of all assertion methods; all other methods build upon `Test.expect`.  `Test.expect` expects at least one argument (`passed`) which is a value that evaluates to `true` or `false`.  If the value provided is truthy (e.g. `1`, `true`, any string other than an empty string, etc.) then the test passes; otherwise it fails.  The `msg` and `success` parameters are optional.  `msg` is the message displayed upon a failed test and `success` is the message displayed upon a successful test.

### Test.assertEquals

#### Syntax

```javascript
Test.assertEquals(actual, expected[, msg[, success]]);
```

#### Description

Checks whether the actual value is identical to (`===`) the expected value.  Passes the test if they are identical; fails otherwise.  Again, `msg` and `success` are optional (explained above).

### Test.assertNotEquals

#### Syntax

```javascript
Test.assertNotEquals(actual, unexpected[, msg[, success]]);
```

#### Description

Verifies that the actual value is not identical to (`!==`) the unexpected value.  If the two values are identical then the test fails.  `msg` and `success` are optional.

### Test.assertSimilar

#### Syntax

```javascript
Test.assertSimilar(actual, expected[, msg[, success]]);
```

#### Description

Very similar to `Test.assertEquals` except that it also works with arrays and objects.  This is achieved through `JSON.stringify`.

### Test.assertNotSimilar

#### Syntax

```javascript
Test.assertNotSimilar(actual, unexpected[, msg[, success]]);
```

#### Description

Very similar to `Test.assertNotEquals` except it also works on arrays and objects by using `JSON.stringify`.

### Test.expectError

#### Syntax

```javascript
Test.expectError([msg, ]fn[, success]);
```

#### Description

Used to check whether a block of code (`fn`) contains any errors.  Upon error, the test passes.  If the block of code passed in contains no errors then the test fails.  Can catch any error except for syntax errors.  `msg` and `success` are optional but since `msg` is before `fn`, pass in an empty string as the first argument to use default failing message.

### Test.expectNoError

#### Syntax

```javascript
Test.expectNoError([msg, ]fn[, success]);
```

#### Description

Checks a block of code for any errors.  Very similar to `Test.expectError` but this assertion method passes the test when the function `fn` contains **no** errors.

## Miscellaneous

### Test.randomNumber

`Test.randomNumber` accepts no arguments and returns a random integer from `0` to `100` (both inclusive).

### Test.randomToken

#### Syntax

```javascript
Test.randomToken([length]);
```

#### Description

`Test.randomToken` *optionally* accepts an integer `length` which specifies the length of the random string.  The random string generated will contain only lowercase letters and digits.  If the length is not specified it defaults to `10`.

e.g.

```javascript
Test.randonToken() -> "s9nh1l87b6"
Test.randomToken(1) -> "g"
Test.randomToken(5) -> "01mhg"
Test.randomToken(50) -> "dkinhdf56hlkj98nbhgh654878junh56g74f3k1a8jjn6bv56c"
```
