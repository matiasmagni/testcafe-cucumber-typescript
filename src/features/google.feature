@google
Feature: Google search

  User wants to find a repository on Google search results

  Scenario: User searches for "TestCafe" on Google
    Given Google's search page is opened
    When the user types "github TestCafe" on Google's search input
    And the user press the "enter" key on Google's search input
    Then the link "DevExpress/testcafe: A Node.js tool to automate end" is the first result shown on Google's results page
