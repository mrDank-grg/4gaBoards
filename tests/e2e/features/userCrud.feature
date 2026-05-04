Feature: Create users
  As an admin
  I want to create users
  So that I can organize them efficiently

  Scenario Outline: Create new users
    Given the admin user has logged in with the following credentials:
      | email | password |
      | demo  | demo     |
    And the admin user has navigated to users setting page
    When the admin user creates a new user with email "<email>", password "<password>", name "<name>" and username "<username>"
    Then the new user with email "<email>" should be added to users list
    Examples:
      | email             | password    | name    | username    |
      | ashish@gmail.com  | Ashish@123  | Ashish  | AshishUser  |
      | bipin@gmail.com   | Bipin@123   | Bipin   | BipinUser   |
      | sandesh@gmail.com | Sandesh@123 | Sandesh | SandeshUser |

  Scenario Outline: Update existing user
    Given the admin user has logged in with the following credentials:
      | email | password |
      | demo  | demo     |
    And the admin user has navigated to users setting page
    When the admin user updates a new user with old email "old_email" with new email "<new_email>", password "<password>", name "<name>" and username "<username>"
    Then the updated user with email "<email>" should be visible in the users list
    Examples:
      | old_email         | new_email            | password      | name        | username    |
      | ashish@gmail.com  | ashishgrg@gmail.com  | Ashish@12345  | Ashish grg  | Ashishhhh   |
      | bipin@gmail.com   | bipingrg@gmail.com   | Bipin@12345   | Bipin grg   | Bipinnnnn   |
      | sandesh@gmail.com | sandeshgrg@gmail.com | Sandesh@12345 | Sandesh grg | Sandeshhhhh |
