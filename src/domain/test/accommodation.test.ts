import { describe, beforeEach, test, expect } from "vitest";
import Accommodation from "../accommodation.ts";

describe("Accommodation", () => {
  describe("Accommodation name", () => {
    test("should set and return a non-empty name", () => {
      const accommodation = new Accommodation("Hotel", 100);
      expect(accommodation.getName()).toBe("Hotel");
    });

    test("should trim the name", () => {
      const accommodation = new Accommodation(" Hotel ", 100);
      expect(accommodation.getName()).toBe("Hotel");
    });

    test.each([undefined, null, "", "   "])(
      "should reject a missing name: %s",
      (name) => {
        expect(() => new Accommodation(name, 100)).toThrow("Name is required");
      },
    );

    test("should reject a name that is not a string", () => {
      expect(() => new Accommodation(123, 100)).toThrow("Name is required");
    });
  });

  describe("Accommodation cost", () => {
    test.each([0, 100])("should accept a cost of %s", (cost) => {
      const accommodation = new Accommodation("Hotel", cost);
      expect(accommodation.getCost()).toBe(cost);
    });

    test.each([undefined, null, "100", Number.NaN, Number.POSITIVE_INFINITY])(
      "should reject a non-numeric or missing cost: %s",
      (cost) => {
        expect(() => new Accommodation("Hotel", cost)).toThrow(
          "Cost must be a number",
        );
      },
    );

    test("should reject a negative cost", () => {
      expect(() => new Accommodation("Hotel", -1)).toThrow(
        "Cost must be >= 0",
      );
    });
  });
});
