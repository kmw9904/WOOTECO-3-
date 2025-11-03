import WinningLotto from "../src/lotto/WinningLotto.js";

describe("보너스 번호 유효성 검사(WinningLotto)", () => {
  test("숫자를 입력 안할 경우 오류 발생", () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const nonNumericNumber = NaN;

    expect(() => new WinningLotto(winningNumbers, nonNumericNumber)).toThrow(
      "[ERROR] 숫자를 입력해주세요"
    );
  });

  test("보너스 번호가 1미만일 경우 오류 발생", () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const minRangeNumbers = 0;

    expect(() => new WinningLotto(winningNumbers, minRangeNumbers)).toThrow(
      "[ERROR] 보너스 번호는 1 ~ 45 사이에 숫자를 입력해야 합니다."
    );
  });

  test("보너스 번호가 45초과일 경우 오류 발생", () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const maxRangeNumbers = 46;

    expect(() => new WinningLotto(winningNumbers, maxRangeNumbers)).toThrow(
      "[ERROR] 보너스 번호는 1 ~ 45 사이에 숫자를 입력해야 합니다."
    );
  });

  test("중복 숫자가 올 경우 오류 발생", () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const duplicateNumber = 1;

    expect(() => new WinningLotto(winningNumbers, duplicateNumber)).toThrow(
      "[ERROR] 중복된 숫자는 입력할 수 없습니다."
    );
  });
});
