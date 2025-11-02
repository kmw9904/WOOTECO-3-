import { Console } from "@woowacourse/mission-utils";

class InputView {
  async readPurchaseAmount() {
    const input = await Console.readLineAsync("구입금액을 입력해주세요.\n");

    return Number(input);
  }
}

export default InputView;
