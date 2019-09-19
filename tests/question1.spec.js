import { expect } from "chai";
import question1 from "../src/questions/question1";

describe("Question 1: isNullOrEmpty", function() {
  it("should satisfy isNullOrEmpty ", function() {
    let result = question1("");
    expect(result).to.equal(true);
  });
  it("should not satisfy isNullOrEmpty ", function() {
    let result = question1("1");
    expect(result).to.equal(false);
  });
});
