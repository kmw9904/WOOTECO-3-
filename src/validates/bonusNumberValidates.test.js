import bonusNumberValidates from "./bonusNumberValidates.js";

describe("보너스 번호 유효성 검사(bonusNumberValidates)", () => {
  test("숫자를 입력 안할 경우 오류 발생", () => {
    const nonNumericNumber = NaN;

    expect(() => bonusNumberValidates(nonNumericNumber)).toThrow("[ERROR] 숫자를 입력해주세요");
  });

  test("보너스 번호가 1미만일 경우 오류 발생", () => {
    const minRangeNumbers = 0;

    expect(() => bonusNumberValidates(minRangeNumbers)).toThrow("[ERROR] 보너스 번호는 1 ~ 45 사이에 숫자를 입력해야 합니다.");
  });

  test("보너스 번호가 45초과일 경우 오류 발생", () => {
    const maxRangeNumbers = 46;

    expect(() => bonusNumberValidates(maxRangeNumbers)).toThrow("[ERROR] 보너스 번호는 1 ~ 45 사이에 숫자를 입력해야 합니다.");
  });

  test("중복 숫자가 올 경우 오류 발생", () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const duplicateNumber = 1;

    expect(() => bonusNumberValidates(duplicateNumber, winningNumbers)).toThrow("[ERROR] 중복된 숫자는 입력할 수 없습니다.");
  });
});
