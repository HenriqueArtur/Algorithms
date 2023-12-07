import { describe, expect, it } from "vitest";
import { DataSharedById } from "../src/DataSharedById.js";

describe("DATA SHARED BY ID", () => {
  it("should return a simple combination", () => {
    const input = [
      ["23", "Algebra"],
      ["1", "Mechanics"],
      ["23", "Mechanics"],
      ["5", "Algorithms"],
      ["5", "Algebra"],
      ["5", "Mechanics"],
      ["5", "Design"],
      ["23", "Design"]
    ];

    const response = {
      "1,23": ["Mechanics"],
      "5,23": ["Algebra", "Mechanics", "Design"],
      "1,5": ["Mechanics"]
    };

    const output = DataSharedById(input);
    expect(output).toStrictEqual(response);
  });

  it("should return a combination with empty", () => {
    const input = [
      ["23", "Algebra"],
      ["1", "Mechanics"],
      ["23", "Mechanics"],
      ["5", "Algorithms"],
      ["5", "Algebra"],
      ["5", "Mechanics"],
      ["5", "Design"],
      ["23", "Design"],
      ["111", "Chemistry"]
    ];

    const response = {
      "1,5": ["Mechanics"],
      "1,23": ["Mechanics"],
      "1,111": [],
      "5,23": ["Algebra", "Mechanics", "Design"],
      "5,111": [],
      "23,111": []
    };

    const output = DataSharedById(input);
    expect(output).toStrictEqual(response);
  });
});
