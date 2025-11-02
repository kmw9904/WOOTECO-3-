import InputView from "./InputView";
import OutputView from "./OutputView";

class App {
  constructor() {
    this.inputView = new this.InputView();
    this.outputView = new this.OutputView();
  }
  async run() {
    const amount = await this.inputView.readPurchaseAmount();

    
  }
}

export default App;
