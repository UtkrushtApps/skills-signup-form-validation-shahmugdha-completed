# Task Overview
Utkrusht is a proof-of-skills marketplace where new users sign up to take technical assessments in areas like React, AI, and full-stack development. The current web app includes a basic signup form for candidates, but it accepts any input and immediately shows a success message, even when the user provides empty or clearly invalid data. Your task is to turn this into a simple but realistic signup experience that respects basic validation and gives users useful feedback.

## Objectives
- Ensure the signup form behaves like a basic, user-friendly form that does not accept obviously invalid input.
- Make the form track and use the current values of each input field through React state, rather than ignoring what the user types.
- Display clear inline error messages when required fields are missing or when the email and password do not meet simple rules.
- Only show the success message when the form has been fully and correctly completed, and keep the form visible when there are problems.

## How to Verify
- Try submitting the form with all fields empty. The form should not switch to the success view, and you should see error messages indicating which fields need attention.
- Enter an invalid email format (for example, a value without an "@" character) and attempt to submit. The form should stay on the page and highlight the email issue with an inline message.
- Enter a password that is shorter than the required minimum length and submit. The form should continue to show, with a message that makes it clear the password is too short.
- Fill out all fields with valid values and then submit. The error messages should disappear, and the success message should be shown instead of the form.
- Review your code to confirm that the form uses React state to store the current input values and uses conditional rendering to show or hide error and success messages.

## Helpful Tips
- Consider how the form should decide whether to show the success message or keep the form visible based on the current input values.
- Think about grouping related pieces of information, such as the values the user has typed and any messages about what is wrong with those values.
- Explore a straightforward way to check all fields when the form is submitted so that you can decide where to show messages and whether to continue.
- Review how conditional rendering can be used to show different content (for example, the form or a success state) without navigating to another page.
- Consider keeping the layout and styling simple so you can focus on making the behavior and feedback clear and predictable for users.
