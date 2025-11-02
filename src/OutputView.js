import { Console } from "@woowacourse/mission-utils";

class OutputView {
  printPurchasedLottos(lottos) {
    Console.print(`\n${lottos.length}개를 구매했습니다.`);

    lottos.forEach((lotto) => {
      const numbers = lotto.getNumbers().join(", ");
      Console.print(`[${numbers}]`);
    });
  }
}

export default OutputView;
