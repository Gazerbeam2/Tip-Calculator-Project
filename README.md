# Tip-Calculator-Project

This project is a simple Tip Calculator using Html, CSS, and Javascript. Users enter a value which represents the cost of their bill and also a value that represents the the percentage of their tip and is returned the total bill cost + tip and the tip amount separately.

Link to project: https://tip-calculator-project-six.vercel.app/

## How It's Made:

**Tech used:** HTML, CSS, Javascript

The application runs off a singular javascript function enabled by a click EventListener tied to button element. Upon clicking the button, the function creates a variable called bill cost which holds the value of the #billAmount input as a number. Another variable is created which stores of the value of the #tipAmount input divided by 100 representing the decimal amount of the tip. Next the tipAmount variable is created which multiplies the decimalTipPercentage with the billcost variable to get the tip amount.After that, totalBillCost adds the tip amount and the bill amount to get together. Finally we take both the tip amount and total bill cost and put then back into the DOM to display to the user.

### Lessons Learned:

I learned that .value returns a string so i have to use the parseInt method to make sure that i'm getting a numeric type. I learned that i have the ability to create applications.
