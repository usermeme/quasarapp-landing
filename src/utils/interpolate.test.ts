import { interpolate } from "./interpolate";

describe("interpolate", () => {
  it("should return the right value", () => {
    expect(interpolate(10, [0, 100], [0, 100])).toBe(10);
    expect(interpolate(10, [0, 100], [0, 1000])).toBe(100);

    expect(interpolate(10, [0, 100], [50, 100])).toBe(55);
    expect(interpolate(10, [0, 100], [0, 50])).toBe(5);
  });
});
