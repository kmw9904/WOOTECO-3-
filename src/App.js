import InputView from "./InputView.js";
import OutputView from "./OutputView.js";
import amountValidates from "./validates/amountValidates.js";

class App {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
  }
  async run() {
    const amount = await this.inputView.readPurchaseAmount();

    amountValidates(amount);

    const winningNumber = await this.inputView.readWinningNumber()

    
  }
}

export default App;
