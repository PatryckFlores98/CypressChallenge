Feature: Automation Challenge

  Scenario: Test 1 - Validate the account registration
    Given I access the UI
    And I click on Got It button
    And I click on Register button
    And I fill the <email> field
    And I click on age verification check
    And fill <password> field
    And reenter the <confirm> password field
    And I click on No Bonus check
    When I click on Create Account button
    Then the account has to be created
    Examples:
      | email         | password  | confirm |
      | test@test.com | Test123   | Test123 |

  
Scenario: Test 2 - Access the news
    Given I access the UI
    And I click on Got It button
    And I click on News button
    When I click on a news
    Then the news has to be displayed