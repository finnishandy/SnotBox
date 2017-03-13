var expect    = require("chai").expect;
var getErrors = require("../src/error");
const sampleError = {
  message: "Wrong username or password",
  developerMessage: "InvalidCredentialsException"
};

const sampleError2 = { errors: [
  {message: "Invalid email address", property:"username"}
]};

describe("Error generator", function() {
  it("fooo", () => {
    console.log('modified error', getErrors(sampleError));
    expect(
      getErrors(sampleError)).to.deep.equal({ errors: {"InvalidCredentialsException": "Wrong username or password"}
      });
  });

  it("barr", () => {
    console.log('modified error2', getErrors(sampleError2));
    expect(
      getErrors(sampleError2)).to.deep.equal({ errors: { "username": "Invalid email address"}
      });
  });

  it("fart", () => {
    console.log('modified error2', getErrors(undefined));
    expect(getErrors(undefined)).to.equal(undefined);
  });

});