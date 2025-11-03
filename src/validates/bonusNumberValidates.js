import { MAX_LOTTO_NUMBER, MIN_LOTTO_NUMBER } from "../constants/LottoConstants.js";

const validateNumeric = (bonusNumber) => {
  if (Number.isNaN(bonusNumber)) {
    throw new Error("[ERROR] 숫자를 입력해주세요");
  }
};

const validateRange = (bonusNumber) => {
  if (bonusNumber < MIN_LOTTO_NUMBER || bonusNumber > MAX_LOTTO_NUMBER) {
    throw new Error("[ERROR] 보너스 번호는 1 ~ 45 사이에 숫자를 입력해야 합니다.");
  }
};

const validateDuplicate = (bonusNumber, winningNumber) => {
  if (winningNumber.includes(bonusNumber)) {
    throw new Error("[ERROR] 중복된 숫자는 입력할 수 없습니다.");
  }
};

export default function bonusNumberValidates(bonusNumber, winningNumber) {
  validateNumeric(bonusNumber);
  validateRange(bonusNumber);
  validateDuplicate(bonusNumber, winningNumber);
}
