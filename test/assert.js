(function(exports){
  var assert = {
    isTrue: function(assertionToCheck, testDescription) {
      if (!assertionToCheck) {
        throw new Error("Assertion failed " + testDescription + "is not truthy");
      } else {
        console.logo("Assertion passed: " + testDescription);
    }
  }
};
exports.assert = assert;
})(this);
