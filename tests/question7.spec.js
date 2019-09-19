import { expect } from "chai";
import question7 from "../src/questions/question7";

describe("Question 7: Array to object", function() {
  it('should return array length of 1 ', function() {
    let users = [
      { id: 1, name: "bob" },
      {
        id: 2,
        name: "sally"
      },
      {
        id: 3,
        name: "bob",
        age: 30
      }
    ];

    let result = question7(users, "age");
    expect(Object.keys(result).length).to.equal(1);
  });
});
