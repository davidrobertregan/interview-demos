# User Form Builer 

## Process for this project
1. Reviewed tips online for take home challenges
2. Read the instructions multiple times
3. Worked through the core deliverables one by one
4. Styled the form

## Description of how I approached deliverables 1 & 2

### The builder can add and remove choices

- Because each choice is its own seperate element in an array, I thought it would make the most sense to change from a text area to a list of buttons that represent the existing choice. 
- #### Buttons => for deleting a choice
    - I used .map() to create a button for each choice. 
    - For each button, I added an onClick event handler onDeleteChoice that updates the formData with setFormData:
        1. make a copy of existing formData with spread operator
        2. update the array of choices using .filter() (line 42 in Form.js)
- #### Text input => for adding new choices
    - Similarly, I added a button with a callback function that updates the formData: 
        1. make a copy of existing formData with spread operator
        2. updating the array of choices using the spread operator again and adding the new choice.

### Validations

#### Label field is required 
- When should this validation fire? As soon as the user submits the form. For this reason, I created a formValidations function that fires in onSubmit
- formValidations returns true if there is an issue and false if there are none. There's conditional logic in the handleSubmit that will stop the function if it returns true
- formValidations has a conditional where if the label variable from the formData obj is equal to an empty string, it will fire an alert and return true, stopping handleSubmit

#### There cannot be more than 50 choices 
- formValidations has a conditional where if the array of choices variable in from the formData obj has a length greater than 50, it will fire an alert and return true, stopping handleSubmit

#### There cannot be duplicate choices
- This validation actually lives in another function since I wanted it to fire when a user creates a new choice
- When a user clicks to add a choice, checkForDuplicates fires in the onAddChoice: 
    1. using filter(), we filter through choices from formData and return a new array that contains matches to the newChoice state value that changes on the form input
    2. if the length of this new array is zero, we know there is no match and it returns false, continuing onAddNewChoice
    3. if the array length is greater than zero, there are matches, so we alert the user of the issue and stop the function

#### If I had more time

- This project was a reminder to further hone in on my css skills. If I had more time, I would definitely focus in here.

