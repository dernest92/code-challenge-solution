# Coding Challenge

You can click [here](https://self-test.netlify.com/) to view a live demo of my solution.


## Challenge Guidlines
> We would like to give you a chance to show off your frontend skills by creating a simple form in any language or framework of your choice. You are welcome to use any tools or resources at your disposal.
>
> We have provided mockups (with redlines) of the expected UI of your webpage in both mobile and desktop views that should serve as a guide. The assets folder contains the only images you will use for this exercise.
>
> The form you will create has 4 input fields and a submit type button. All fields are required with the exception of 'Address 2'. The UI should prevent the user from submitting the form unless all required fields have been filled. Invalid fields should be highlighted in red as shown in the mocks. Once all data has been entered, the submit button should trigger an alert dialog and output the data the user has entered.
>
> Please complete as much as you can and be prepared to demo your webpage and answer any questions about your code and design choices. We estimate that this challenge should take roughly 2-4 hours to complete. Feel free to reach out to us with any questions/clarifications, and happy coding!


## Highlights
### Icon prop on button component
Button can accept a string on the 'iconRight' prop. Inside the button component there is an icon object, which renders a different SVG depending on what key is passed.

```jsx
 <CustomButton iconRight="arrow-right">Next</CustomButton>
```

### Data driven input components
The input component accepts an object as a 'field' prop.

```javascript
const field =  {
    name: "Last Name",
    value: "",
    required: true,
    error: false
  }
```

```jsx
  <Input
    field={field}
    handleChange={this.handleChange}
    key={field.name}
  />
```

Creating inputs in this way eliminates the need to add flag props like 'isRequired'. Defining fields like this also makes validation easier.


## Further Improvements
* Increase font size in inputs to 16px to avoid "zoom on focus" in mobile browsers
* Use scss variables to store page break widths and reused colors
* Create "Theme" classes (ie. dark, primary, danger)
* Create an "Icon" component which accepts an icon name as a prop
