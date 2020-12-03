@github
Feature: GitHub search

  User wants to find a repository on GitHub

  Scenario: User searches for "TestCafe" on GitHub
    Given GitHub page is opened
    When the user types "TestCafe" on Search GitHub's input on GitHub page
    And the user press the "enter" key on Search GitHub's input on GitHub page
    # FAILS on PURPOSE -> so screenshot can be seen in the report
    Then the link "DevExpress/testcafe" is the first result on GitHub's results page
