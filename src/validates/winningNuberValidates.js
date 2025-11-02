import { LOTTO_COUNT, MAX_LOTTO_NUMBER, MIN_LOTTO_NUMBER } from "../constants/LottoConstants.js";

const validateNumeric = (numbers) => {
  for (const number of numbers) {
    if (Number.isNaN(number)) {
      throw new Error("[ERROR] ,를 통해 숫자들을 구분해 주세요");
    }
  }
};

const validateCount = (numbers) => {
  if (numbers.length !== LOTTO_COUNT) {
    throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
  }
};

const validateRange = (numbers) => {
  if (Math.min(...numbers) < MIN_LOTTO_NUMBER || Math.max(...numbers) > MAX_LOTTO_NUMBER) {
    throw new Error("[ERROR] 로또 번호는 1 ~ 45 사이에 숫자를 입력해야 합니다.");
  }
};

const validateDuplicate = (numbers) => {
  const uniqueNumber = new Set(numbers);
  if (uniqueNumber.size !== LOTTO_COUNT) {
    throw new Error("[ERROR] 중복된 숫자는 입력할 수 없습니다.");
  }
};

export default function winningNumberValidates(numbers) {
  validateNumeric(numbers);
  validateCount(numbers);
  validateRange(numbers);
  validateDuplicate(numbers);
}
