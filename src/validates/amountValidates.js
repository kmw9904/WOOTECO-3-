import { LOTTO_PRICE } from "../constants/LottoConstants.js";

const validateNegative = (amount) => {
  if (amount < 0) {
    throw new Error("[ERROR] 구입 금액은 음수가 될 수 없습니다.");
  }
};

const validateZero = (amount) => {
  if (amount === 0) {
    throw new Error("[ERROR] 구입 금액을 0원보다 크게 입력해주세요.");
  }
};

const validateUnit = (amount) => {
  if (amount % LOTTO_PRICE !== 0) {
    throw new Error("[ERROR] 구입 금액은 1,000원 단위로 입력해주세요.");
  }
};

const validateNumber = (amount) => {
  if (Number.isNaN(amount)) {
    throw new Error("[ERROR] 숫자를 입력해주세요.");
  }
};

export default function amountValidates(amount) {
  validateNumber(amount);
  validateNegative(amount);
  validateZero(amount);
  validateUnit(amount);
}
