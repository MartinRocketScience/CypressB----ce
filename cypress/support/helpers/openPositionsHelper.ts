type PositionSymbol = 'BTCUSDT' | 'USDTBTC';

interface Position {
  symbol: PositionSymbol;
  amount: number;
}

class OpenPositionsHelper {
  positions: Position[] = [];

  /**
   * Adds a new position to the positions array or updates the amount if the position already exists.
   * 
   * @param symbol - The symbol of the position, either 'BTCUSDT' or 'USDTBTC'.
   * @param amount - The amount for the position as a floating point number.
   */
  addOrUpdatePosition(symbol: PositionSymbol, amount: number) {
    const existingPosition = this.positions.find(position => position.symbol === symbol);

    if (existingPosition) {
      existingPosition.amount += amount;
    } else {
      const newPosition: Position = {
        symbol,
        amount
      };
      this.positions.unshift(newPosition);
    }
  }

  /**
   * Returns the positions array as a formatted JSON string.
   * 
   * @returns A string representing the positions array in JSON format.
   */
  getPositionAsJson(): string {
    return JSON.stringify(this.positions, null, 2);
  }

  /**
   * Resets the positions array to an empty state.
   */
  resetPositions() {
    this.positions = [];
  }
}

export default new OpenPositionsHelper();
