import { Console } from "@woowacourse/mission-utils";

class InputView {
  async readPurchaseAmount() {
    const input = await Console.readLineAsync("구입금액을 입력해주세요.\n");

    return Number(input);
  }

  async readWinningNumber() {
    const input = await Console.readLineAsync("\n당첨 번호를 입력해주세요.\n");

    return input.split(",").map((number) => Number(number.trim()));
  }

  async readBonusNumber() {
    const input = await Console.readLineAsync("\n보너스 번호를 입력해주세요\n");

    return Number(input);
  }
}

export default InputView;
