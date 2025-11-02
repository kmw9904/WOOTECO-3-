import winningNumberValidates from "./winningNuberValidates.js";

describe("당첨 번호 유효성 검사(winningNumberValidates)", () => {
  test("숫자를 입력 안하거나 ','를 구분자로 사용하지 않을 경우 오류 발생", () => {
    const nonNumericNumbers = [1, 2, NaN, NaN, 5, 6];

    expect(() => winningNumberValidates(nonNumericNumbers)).toThrow("[ERROR] ,를 통해 숫자들을 구분해 주세요");
  });

  test("로또 번호가 6개가 아닐 경우 오류 발생", () => {
    const invalidCountNumbers = [1, 2, 3, 4, 5];

    expect(() => winningNumberValidates(invalidCountNumbers)).toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
  });

  test("로또 번호가 1미만일 경우 오류 발생", () => {
    const minRangeNumbers = [0, 1, 2, 3, 4, 5];

    expect(() => winningNumberValidates(minRangeNumbers)).toThrow("[ERROR] 로또 번호는 1 ~ 45 사이에 숫자를 입력해야 합니다.");
  });

  test("로또 번호가 45초과일 경우 오류 발생", () => {
    const maxRangeNumbers = [46, 1, 2, 3, 4, 5];

    expect(() => winningNumberValidates(maxRangeNumbers)).toThrow("[ERROR] 로또 번호는 1 ~ 45 사이에 숫자를 입력해야 합니다.");
  });

  test("중복 숫자가 올 경우 오류 발생", () => {
    const duplicateNumbers = [1, 1, 1, 2, 2, 2];

    expect(() => winningNumberValidates(duplicateNumbers)).toThrow("[ERROR] 중복된 숫자는 입력할 수 없습니다.");
  });
});
