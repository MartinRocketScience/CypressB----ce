@BuyLongOnMarket
Feature: Buy/Long on Market

  Scenario: Buy BTC on Market
    Given I am logged into the app
    And I close popups
    When I choose Market option
    And I buy "0.004" BTC
    And I buy "0.002" BTC
    Then I see the order in position tab and close it at market price
    And I verify orders in the Order History Tab

    # NOTE: If we wanted to use parameterization, we would change the scenario to a scenario outline,
    # introduce variables, and add examples. For instance:

    # Scenario Outline: Buy BTC on Market with different amounts
    #   Given I am logged into the app
    #   And I close popups
    #   When I choose Market option
    #   And I buy "<amount_1>" BTC
    #   And I buy "<amount_2>" BTC
    #   Then I see the order in position tab and close it at market price
    #   And I verify orders in the Order History Tab

    # Examples:
    #   | amount_1 | amount_2 |
    #   | 0.004    | 0.003    |
    #   | 0.002    | 0.007    |
