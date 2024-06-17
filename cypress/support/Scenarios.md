# Scenarios

## Auth Page

### Login and Join form

> #### **Scenario:** Check Login and Join form are visibles on Auth page

- [x] **Automated**

**Steps:**

- Go to Auth page
  
  🟢 **Expected Result:** Check Login and Join form are visibles

### Context: Login section

> #### **Scenario:** Check error message when input are empty

- [x] **Automated**

**Steps:**

- Go to Auth page
- Click on Sign in button
  
🟢**Expected Result:** Check error message when input are empty

> #### **Scenario:** Check error message when password input is empty

- [x] **Automated**

**Steps:**

- Go to Auth page
- Type a valid email in email input
- Click on Sign in button
  
🟢 **Expected Result:** Check error message when password input is empty

> #### **Scenario:** Check error message when email is invalid

- [x] **Automated**

**Steps:**

- Go to Auth page
- Type a invalid email in email input (test.mailcom)
- Click on Sign in button
  
🟢 **Expected Result:** Check error message when email is invalid

### Context: Join section

> #### **Scenario:** Check error message when email address is empty

- [x] **Automated**

**Steps:**

- Go to Auth page
- Click on Create an account button
  
🟢 **Expected Result:** Check error message when email address is empty

> #### **Scenario:** Check error message when email address is invalid

- [x] **Automated**

**Steps:**

- Go to Auth page
- Type a invalid email (test.mailcom)
- Click on Create an account button
  
🟢 **Expected Result:** Check error message when email address is invalid







### Invalid Login

* **Scenario:** User attempts to log in with invalid credentials.
* **Steps:**
  * User navigates to the login page.
  * User enters invalid username or password.
  * User clicks on the login button.
* **Expected Result:** User receives an error message indicating invalid credentials.

### Forgot Password

* **Scenario:** User forgets their password and requests a password reset.
* **Steps:**
  * User navigates to the login page.
  * User clicks on the "Forgot Password" link.
  * User enters their registered email address.
  * User clicks on the "Submit" button.
* **Expected Result:** User receives an email with instructions on how to reset their password.

### Account Creation

* **Scenario:** User creates a new account.
* **Steps:**
  * User navigates to the registration page.
  * User enters valid personal information.
  * User creates a username and password.
  * User clicks on the "Create Account" button.
* **Expected Result:** User receives a confirmation message and is redirected to the login page.

### Logout

* **Scenario:** User logs out of their account.
* **Steps:**
  * User navigates to the home page.
  * User clicks on the "Logout" button.
* **Expected Result:** User is logged out and redirected to the login page.
