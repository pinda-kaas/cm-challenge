import { assert } from "chai";
import question4 from "../src/questions/question4";

describe("Question 4: Most common integers", function() {
  it("should return only 1 integer", function() {
    let result = question4([1,2,1,1,1,1,1,1,2,2, 3, 1]);
    assert.deepEqual(result, [1]);
  });

  it("should return 3 integers", function() {
    let result = question4([1,2, 3]);
    assert.deepEqual(result, [1,2,3]);
  });
});
