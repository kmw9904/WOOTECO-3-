import { Random } from "@woowacourse/mission-utils";
import {
  LOTTO_COUNT,
  MAX_LOTTO_NUMBER,
  MIN_LOTTO_NUMBER,
} from "../constants/LottoConstants.js";
import Lotto from "../lotto/Lotto.js";

export default function generateLottoNumber(count) {
  const lottos = [];
  for (let current = 0; current < count; current++) {
    const numbers = Random.pickUniqueNumbersInRange(
      MIN_LOTTO_NUMBER,
      MAX_LOTTO_NUMBER,
      LOTTO_COUNT
    ).sort((a, b) => a - b);
    const lotto = new Lotto(numbers);
    lottos.push(lotto);
  }

  return lottos;
}
