@github
Feature: GitHub search

  I want to find TestCafe repository on GitHub

  Scenario: User searches for "TestCafe" on GitHub
    Given GitHub page is opened
    When "TestCafe" is typed on Search GitHub's input on GitHub page
    And "Enter" key is pressed on Search GitHub's input on GitHub page
    # FAILS on PURPOSE -> so screenshot can be seen in the report
    Then the first GitHub's result is "DevExpress/testcafe" on GitHub's results page