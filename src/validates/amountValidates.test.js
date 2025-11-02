import amountValidates from "./amountValidates.js";

describe("구입 금액 유효성 검사 (amountValidates)", () => {
  test("음수 금액이 입력되면 오류 발생", () => {
    const negativeAmount = -1000;

    expect(() => amountValidates(negativeAmount)).toThrow("[ERROR] 구입 금액은 음수가 될 수 없습니다.");
  });

  test("0원이 입력되면 오류 발생", () => {
    const zeroAmount = 0;

    expect(() => amountValidates(zeroAmount)).toThrow("[ERROR] 구입 금액을 0원보다 크게 입력해주세요.");
  });

  test("1000원 단위가 아니면 오류 발생", () => {
    const unitAmount = 1100;

    expect(() => amountValidates(unitAmount)).toThrow("[ERROR] 구입 금액은 1,000원 단위로 입력해주세요.");
  });

  test("숫자가 아니면 오류 발생", () => {
    const symbolAmount = NaN;

    expect(() => amountValidates(symbolAmount)).toThrow("[ERROR] 숫자를 입력해주세요.");
  });
});
