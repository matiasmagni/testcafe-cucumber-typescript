@google
Feature: Google search

  I want to find TestCafe repository by Google search

  Scenario: User searches for "TestCafe" on Google
    Given Google's search page is opened
    When "github TestCafe" is typed on Google's search input
    And "enter" key is pressed on Google's search input
    Then the first result is "DevExpress/testcafe: A Node.js tool to automate end" on Google's results page
