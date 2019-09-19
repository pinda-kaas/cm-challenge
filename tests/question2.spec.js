import { expect } from "chai";
import question2 from "../src/questions/question2";

describe("Question 2: Positive divisors", function() {
  it("should return length of array = 12 ", function() {
    let result = question2(60);
    expect(result.length).to.equal(12);
  });
  it("should return length of array = 8 ", function() {
    let result = question2(42);
    expect(result.length).to.equal(8);
  });
});
