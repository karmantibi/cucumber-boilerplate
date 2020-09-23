@e2e
Feature: Test e2e feature

    @e2e-1
    Scenario: Invalid search input has no results
    Given I open "http://automationpractice.com/index.php" in a new page
    When I fill searchbar with: "asdf" on Home Page
    And I click on search button on Home Page
    Then the warning box message is the following: "No results were found for your search" on Home Page

    @e2e-2
    Scenario: Invalid search input has no results
    Given I open "http://google.com" in a new page