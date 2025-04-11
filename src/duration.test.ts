import { formatDuration } from "./duration";

describe("Converting seconds into XXhYYmZZs format", () => {
  test("33 turns into 33s", () => {
    expect(formatDuration(33)).toBe("33s");
  });
  test("123 turns into 2m3s", () => {
    expect(formatDuration(123)).toBe("2m3s");
  });
  test("500 turns into 8m20s", () => {
    expect(formatDuration(500)).toBe("8m20s");
  });
  test("3600 turns into 1h", () => {
    expect(formatDuration(3600)).toBe("1h");
  });
  test("3999 turns into 1h6m39s", () => {
    expect(formatDuration(3999)).toBe("1h6m39s");
  });
  test("0 turns into 0s", () => {
    expect(formatDuration(0)).toBe("0s");
  });
  test("negative number gives an Error", () => {
    expect(formatDuration(-5)).toThrow(Error);
  });
  test("Number with numbers after a comma get shortend", () => {
    expect(formatDuration(5.3)).toBe("5s");
  });
});