import { Console } from "@woowacourse/mission-utils";
import { RANK } from "./constants/LottoConstants.js";

class OutputView {
  printPurchasedLottos(lottos) {
    Console.print(`\n${lottos.length}개를 구매했습니다.`);

    lottos.forEach((lotto) => {
      const numbers = lotto.getNumbers().join(", ");
      Console.print(`[${numbers}]`);
    });
  }

  printWinLottos(lottos, winningLotto) {
    Console.print("\n당첨 통계\n---");

    const rankLotto = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
    };

    for (const lotto of lottos) {
      rankLotto[winningLotto.match(lotto)] += 1;
    }

    Console.print(`3개 일치 (5,000원) - ${rankLotto[RANK.FIFTH]}개`);
    Console.print(`4개 일치 (50,000원) - ${rankLotto[RANK.FOURTH]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${rankLotto[RANK.THIRD]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${rankLotto[RANK.SECOND]}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${rankLotto[RANK.FIRST]}개`);
  }
}

export default OutputView;
