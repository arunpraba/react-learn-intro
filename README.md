# React learn intro

This is a simple React component that displays two buttons and updates the number of times each button is clicked.

## How it works

The component defines a custom hook called useCount that initializes a state variable count to 0 and a function setCount to update it. The handleClick function calls setCount to increment the count by 1.

The Button component takes two props: count and onClick. It displays a button that shows how many times it has been clicked and calls the onClick function when clicked.

The App component uses the useCount hook to create a count variable and handleClick function. It then renders two Button components that use these variables and functions to update their count when clicked.
