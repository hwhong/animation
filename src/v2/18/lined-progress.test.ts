import { RUNTIME, calculateDelay } from "./lined-progress";

describe("calculateDelay", () => {
  it("test1", () => {
    const index = 2;
    const activeNodes = [true, true, false, false, false];

    const delays = calculateDelay(index, activeNodes);
    expect(delays).toStrictEqual([
      undefined,
      undefined,
      0,
      undefined,
      undefined,
    ]);
  });

  it("test2", () => {
    const index = 4;
    const activeNodes = [true, true, false, false, false];

    const delays = calculateDelay(index, activeNodes);
    expect(delays).toStrictEqual([undefined, undefined, 0, 0.6, 1.2]);
  });

  it("test3", () => {
    const index = 4;
    const activeNodes = [false, false, false, false, false];

    const delays = calculateDelay(index, activeNodes);
    expect(delays).toStrictEqual([0, 0.6, 1.2, 1.8, 2.4]);
  });

  it("test4", () => {
    const index = 3;
    const activeNodes = [false, false, false, false, false];

    const delays = calculateDelay(index, activeNodes);
    expect(delays).toStrictEqual([0, 0.6, 1.2, 1.8, undefined]);
  });

  it("test5", () => {
    const index = 3;
    const activeNodes = [true, true, true, false, false];

    const delays = calculateDelay(index, activeNodes);
    expect(delays).toStrictEqual([
      undefined,
      undefined,
      undefined,
      0,
      undefined,
    ]);
  });

  it("test5", () => {
    const index = 3;
    const activeNodes = [false, false, false, false, false];

    const delays = calculateDelay(index, activeNodes);
    expect(delays).toStrictEqual([0, 0.6, 1.2, 1.8, undefined]);
  });

  it("test6", () => {
    const index = 3;
    const activeNodes = [true, true, false, false, false];

    const delays = calculateDelay(index, activeNodes);
    expect(delays).toStrictEqual([undefined, undefined, 0, 0.6, undefined]);
  });
});
