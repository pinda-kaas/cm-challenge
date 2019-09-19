import { expect, assert } from "chai";
import question3 from "../src/questions/question3";

describe("Question 3: Triangle/error throw", function() {
  it("should throw error for invalid params ", function() {
    assert.throw(
      function() {
        question3(-1, 4, 5);
      },
      Error,
      "InvalidTriangleException"
    );
    assert.throw(
      function() {
        question3("a", 4, 5);
      },
      Error,
      "InvalidTriangleException"
    );
  });

  it("should calculate triangle area", function() {
    expect(question3(3, 4, 5)).equals(6);
  });
});
