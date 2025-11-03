import {
  LOTTO_COUNT,
  MAX_LOTTO_NUMBER,
  MIN_LOTTO_NUMBER,
} from "./constants/LottoConstants";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    for (const number of numbers) {
      if (Number.isNaN(number)) {
        throw new Error("[ERROR] ,를 통해 숫자들을 구분해 주세요");
      }
    }

    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    if (
      Math.min(...numbers) < MIN_LOTTO_NUMBER ||
      Math.max(...numbers) > MAX_LOTTO_NUMBER
    ) {
      throw new Error(
        "[ERROR] 로또 번호는 1 ~ 45 사이에 숫자를 입력해야 합니다."
      );
    }

    const uniqueNumber = new Set(numbers);
    if (uniqueNumber.size !== LOTTO_COUNT) {
      throw new Error("[ERROR] 중복된 숫자는 입력할 수 없습니다.");
    }
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }

  getMatchCount(winningNumber) {
    return this.#numbers.filter((number) => winningNumber.includes(number))
      .length;
  }
}

export default Lotto;
