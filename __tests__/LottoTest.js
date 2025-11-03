import Lotto from "../src/Lotto.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성

  test("숫자를 입력 안하거나 ','를 구분자로 사용하지 않을 경우 오류 발생", () => {
    expect(() => {
      new Lotto([1, 2, NaN, NaN, 5, 6]);
    }).toThrow("[ERROR] ,를 통해 숫자들을 구분해 주세요");
  });

  test("로또 번호가 6개가 아닐 경우 오류 발생", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
  });

  test("로또 번호가 1미만일 경우 오류 발생", () => {
    expect(() => {
      new Lotto([0, 1, 2, 3, 4, 5]);
    }).toThrow("[ERROR] 로또 번호는 1 ~ 45 사이에 숫자를 입력해야 합니다.");
  });

  test("로또 번호가 45초과일 경우 오류 발생", () => {
    expect(() => {
      new Lotto([46, 1, 2, 3, 4, 5]);
    }).toThrow("[ERROR] 로또 번호는 1 ~ 45 사이에 숫자를 입력해야 합니다.");
  });

  test("중복 숫자가 올 경우 오류 발생", () => {
    expect(() => {
      new Lotto([1, 1, 1, 2, 2, 2]);
    }).toThrow("[ERROR] 중복된 숫자는 입력할 수 없습니다.");
  });
});
