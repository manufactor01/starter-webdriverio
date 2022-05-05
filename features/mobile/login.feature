@run @mobile
Feature: Login to mobile app

  @login_web
  Scenario Outline: As a user: <username>, I can log in to the app

    Given I am on the login view
    When I login with <username> and <password>
    Then I should see a flash message saying <message>

    Examples:
      | username         | password | message            |
      | tomsmith@foo.com | 12345678 | You are logged in! |
      | foobar@foo.com   | barfooBa | You are logged in! |
