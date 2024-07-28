type OrderType = 'Market' | 'Limit';
type OrderSide = 'Buy' | 'Sell';

interface Order {
  type: OrderType;
  side: OrderSide;
  amount: number;
}

class OrderHistoryHelper {
  orders: Order[] = [];

  /**
   * Adds a new order to the orders array.
   * 
   * @param type - The type of the order, either 'Market' or 'Limit'.
   * @param side - The side of the order, either 'Buy' or 'Sell'.
   * @param amount - The amount for the order as a floating point number.
   */
  addOrder(type: OrderType, side: OrderSide, amount: number) {
    const newOrder: Order = {
      type,
      side,
      amount,
    };
    this.orders.unshift(newOrder);
  }

  getTotalAmount(): number {
    return this.orders.reduce((total, order) => total + order.amount, 0);
  }

  /**
   * Returns the orders array as a formatted JSON string.
   * 
   * @returns A string representing the orders array in JSON format.
   */
  getOrdersAsJson(): string {
    return JSON.stringify(this.orders, null, 2);
  }

  /**
   * Resets the orders array to an empty state.
   */
  resetOrders() {
    this.orders = [];
  }
}

export default new OrderHistoryHelper();
