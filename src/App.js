import { LOTTO_PRICE } from "./constants/LottoConstants.js";
import InputView from "./InputView.js";
import OutputView from "./OutputView.js";
import generateLottoNumber from "./utils/generateLottoNumber.js";
import amountValidates from "./validates/amountValidates.js";
import WinningLotto from "./winningLotto.js";

class App {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
  }
  async run() {
    const amount = await this.inputView.readPurchaseAmount();

    amountValidates(amount);

    const lottos = generateLottoNumber(amount / LOTTO_PRICE);

    this.outputView.printPurchasedLottos(lottos);

    const winningNumber = await this.inputView.readWinningNumber();

    const bonusNumber = await this.inputView.readBonusNumber();

    const winningLotto = new WinningLotto(winningNumber, bonusNumber);

    this.outputView.printWinLottos(lottos, winningLotto);
  }
}

export default App;
