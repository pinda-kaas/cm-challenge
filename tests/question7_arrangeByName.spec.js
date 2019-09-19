import { expect } from "chai";
import question7_arrangeBy from "../src/questions/question7_arrangeByName";

describe("Question 7: Arrange by name extract keys", function() {
  it('should return array length of 2 ', function() {
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

    let arrangeByName = question7_arrangeBy("name");

    let result = arrangeByName(users);

    expect(result.length).to.equal(2);
  });
});
