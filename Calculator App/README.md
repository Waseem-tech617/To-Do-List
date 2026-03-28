 Calculator App:

A simple and interactive calculator built using **HTML, CSS, and JavaScript**. This project demonstrates core **DOM manipulation**, **event handling**, and **string-based expression evaluation** in JavaScript.

Features:

1. Basic arithmetic operations:

* Subtraction (-)
 * Multiplication (*)
  * Division (/)
  * Percentage (%)
* Real-time display updates
* Delete last character (DEL)
* Clear all input (AC)
* Expression evaluation using `eval()`
* Prevents invalid inputs:
 * Addition (+)
  * No multiple operators in sequence (e.g., `++`, `*-`)
  * Cannot start expression with an operator (except controlled logic)
* Replaces last operator if user enters another operator


This ensures:

* No invalid expressions like `5++3`
* Last operator gets replaced instead of duplicated


Learning Outcomes:

Through this project, you will understand:
* DOM Selection & Manipulation
* Event Listeners in JavaScript
* Handling user input dynamically
* String operations (`slice`, `substring`)
* Preventing invalid UI interactions
* Writing clean and maintainable logic


 Future Improvements:

* Add keyboard support
* Implement scientific calculator functions
* Replace `eval()` with a custom parser
* Improve UI/UX with animations
* Add history of calculations


Note:

* This project uses `eval()` for simplicity.
* In production applications, it is recommended to use a safer expression parser instead of `eval()