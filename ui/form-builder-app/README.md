# User Form Builder 
## To get the app running:
  - cd into ui/form-builder-app
  - run npm install
  - run npm start
## My overall process for this project
1. Reviewed tips online for take home challenges
2. Read the instructions multiple times
3. Worked through the core deliverables one by one
4. Styled the form

## Review Code here:
- [Form.js](./src/components/Form.js)
- [Index.css](./src/index.css)

## <b>How I approached two deliverables (1 & 2)</b>
### <b>"The builder can add and remove choices"</b>

- I changed the textarea to delete buttons instead so the user could add and delete choices before submitting the form
- #### Buttons: for deleting a choice
    - use .map() to create a button for each choice. 
    - add onClick event handler updating formData:
        1. make a copy of existing formData with spread operator
        2. update the array of choices using .filter() (line 42 in Form.js)
- #### Text input: for adding new choices
    - Similarly, add a button w/ callback function: 
        1. make a copy of existing formData with spread operator
        2. updating the array of choices using the spread operator again and adding the new choice.

### <b>Validations</b>

#### Label field is required 
- The formValidations function fires in handleSubmit because that's when these validations need to run
- formValidations returns true if there is an issue and false if there are none. There's conditional logic in the handleSubmit that will stop the function if it returns true
- formValidations has a conditional where if the label variable from the formData obj is equal to an empty string, it will fire an alert and return true, stopping handleSubmit

#### There cannot be more than 50 choices 
- formValidations has a conditional where if the array of choices variable in from the formData obj has a length greater than 50, it will fire an alert and return true, stopping handleSubmit

#### There cannot be duplicate choices
- This validation lives in another function since it should fire when a user creates a new choice
- When a user clicks to add a choice, checkForDuplicates fires in the onAddChoice: 
    1. using filter(), we filter through choices from formData and return a new array that contains matches to the newChoice state value that changes on the form input
    2. if the length of this new array is zero, we know there is no match and it returns false, continuing onAddNewChoice
    3. if the array length is greater than zero, there are matches, so we alert the user of the issue and stop the function

### <b>If I had more time/What I learned</b>

- Admittedly, this was my first take home code challenge in the job process. I put a little too much pressure on myself to do it quickly which led to some unneccessary pressure.
- I had an issue with the return key deleting choices rather than adding - I learned this had to do with the "type" of the button: https://dzello.com/blog/2017/02/19/demystifying-enter-key-submission-for-react-forms/
- This project was a reminder to further hone in on my css skills. If I had more time, I would definitely focus in here.

