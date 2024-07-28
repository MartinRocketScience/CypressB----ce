import { When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import OrderHistoryHelper from '../helpers/orderHistoryHelper';

/**
 * Selects the Market option for trading.
 */
When('I choose Market option', () => {
    cy.get('#tab-MARKET')
        .contains('Market')
        .click();
});

/**
 * Provides the specified amount BTC into the Size input and click on Buy/Long button.
 *
 * @param {string} amount - The amount to be provided.
 */
And('I buy {string} BTC', (amount: string) => {
    cy.get('input[name="unitAmount"]')
      .should('be.visible')
      .type(amount);

    cy.contains('button', 'Buy/Long').click();

    OrderHistoryHelper.addOrder("Market", "Buy", Number(amount));

    // timeout for complete the order - .should('be.visible') will not work
    cy.wait(2000);
});

/**
 * Verifies that position exists,
 * and closes it at the market price.
 */
Then('I see the order in position tab and close it at market price', () => {
    cy.get('div.bn-tooltips-ele')
      .contains('button', 'Market')
      .should('be.visible')
      .click();

    OrderHistoryHelper.addOrder("Market", "Sell", OrderHistoryHelper.getTotalAmount());
});

/**
 * Verifies that the orders in the Order History Tab match the expected orders.
 */
And('I verify orders in the Order History Tab', () => {
    cy.contains('Order History').click();

    cy.get('div.css-1nb8i00')
        .children('div.w-full')
        .as('orders')

    cy.get('@orders').each((orderElement, index) => {
        if (index < OrderHistoryHelper.orders.length) {
            const order = OrderHistoryHelper.orders[index];
            cy.wrap(orderElement)
                .should('contain.text', order.side)
                .should('contain.text', order.type)
                .should('contain.text', `${order.amount} BTC`);
        }
    });
});

/**
 * Reset orders after each scenario.
 * In the same way we can logout user or after().
 */
afterEach(() => {
    OrderHistoryHelper.resetOrders();
});
