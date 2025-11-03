import {
  MATCH_COUNT_TO_RANK,
  MAX_LOTTO_NUMBER,
  MIN_LOTTO_NUMBER,
  RANK,
} from "./constants/LottoConstants.js";
import Lotto from "./Lotto.js";

export default class WinningLotto {
  #lotto;
  #bonusNumber;

  constructor(lottoNumbers, bonusNumber) {
    this.#lotto = new Lotto(lottoNumbers);

    this.#validateBonusNumber(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  #validateBonusNumber(bonusNumber) {
    if (Number.isNaN(bonusNumber)) {
      throw new Error("[ERROR] 숫자를 입력해주세요");
    }

    if (bonusNumber < MIN_LOTTO_NUMBER || bonusNumber > MAX_LOTTO_NUMBER) {
      throw new Error(
        "[ERROR] 보너스 번호는 1 ~ 45 사이에 숫자를 입력해야 합니다."
      );
    }

    if (this.#lotto.getNumbers().includes(bonusNumber)) {
      throw new Error("[ERROR] 중복된 숫자는 입력할 수 없습니다.");
    }
  }

  #determineRank(matchCount, hasBonus) {
    if (matchCount === 5 && hasBonus) {
      return RANK.SECOND;
    }

    return MATCH_COUNT_TO_RANK[matchCount];
  }

  match(purchasedLotto) {
    const matchCount = purchasedLotto.getMatchCount(this.#lotto.getNumbers());

    const hasBonus = purchasedLotto.hasBonusNumber(this.#bonusNumber);

    return this.#determineRank(matchCount, hasBonus);
  }
}
