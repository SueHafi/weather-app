import { describe, test, expect } from "vitest";
import { mapToState } from "./weatherModel.js";
import { data, expectedData } from "./testData.js";

describe("weatherModel", () => {
  test("example", () => {
    const result = mapToState(data);
    expect(result).toEqual(expectedData);
  });
});
