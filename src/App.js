import { LOTTO_PRICE } from "./constants/LottoConstants.js";
import InputView from "./InputView.js";
import OutputView from "./OutputView.js";
import generateLottoNumber from "./utils/generateLottoNumber.js";
import amountValidates from "./validates/amountValidates.js";
import winningNumberValidates from "./validates/winningNuberValidates.js";

class App {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
  }
  async run() {
    const amount = await this.inputView.readPurchaseAmount();

    amountValidates(amount);

    this.outputView.printPurchasedLottos(generateLottoNumber(amount / LOTTO_PRICE));

    const winningNumber = await this.inputView.readWinningNumber();

    winningNumberValidates(winningNumber);

    
  }
}

export default App;
