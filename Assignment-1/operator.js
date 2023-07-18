do {
    const operatorList = "1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\n5. Modulo\n6. Exponentiation\n7. Equal to\n8. Not equal to\n9. Greater than\n10. Less than\n11. Greater than or equal to\n12. Less than or equal to\n13. Logical AND\n14. Logical OR\n15. Logical NOT";

    const operatorChoice = parseInt(prompt("Choose an operator (Enter the corresponding number):\n" + operatorList));
    
    switch (operatorChoice) {
      case 1:
        const addNum1 = parseFloat(prompt("Enter the first number:"));
        const addNum2 = parseFloat(prompt("Enter the second number:"));
        result = addNum1 + addNum2;
        break;
  
      case 2:
        const subNum1 = parseFloat(prompt("Enter the first number:"));
        const subNum2 = parseFloat(prompt("Enter the second number:"));
        result = subNum1 - subNum2;
        break;
  
      case 3:
        const mulNum1 = parseFloat(prompt("Enter the first number:"));
        const mulNum2 = parseFloat(prompt("Enter the second number:"));
        result = mulNum1 * mulNum2;
        break;
  
      case 4:
        const divNum1 = parseFloat(prompt("Enter the first number:"));
        const divNum2 = parseFloat(prompt("Enter the second number:"));
        result = divNum1 / divNum2;
        break;
  
      case 5:
        const modNum1 = parseFloat(prompt("Enter the first number:"));
        const modNum2 = parseFloat(prompt("Enter the second number:"));
        result = modNum1 % modNum2;
        break;
  
      case 6:
        const base = parseFloat(prompt("Enter the base number:"));
        const exponent = parseFloat(prompt("Enter the exponent:"));
        result = base ** exponent;
        break;
  
      case 7:
        const eqNum1 = parseFloat(prompt("Enter the first number:"));
        const eqNum2 = parseFloat(prompt("Enter the second number:"));
        result = eqNum1 === eqNum2;
        break;
   
      case 8:
        const neqNum1 = parseFloat(prompt("Enter the first number:"));
        const neqNum2 = parseFloat(prompt("Enter the second number:"));
        result = neqNum1 !== neqNum2;
        break;
  
      case 9:
        const gtNum1 = parseFloat(prompt("Enter the first number:"));
        const gtNum2 = parseFloat(prompt("Enter the second number:"));
        result = gtNum1 > gtNum2;
        break;
  
      case 10:
        const ltNum1 = parseFloat(prompt("Enter the first number:"));
        const ltNum2 = parseFloat(prompt("Enter the second number:"));
        result = ltNum1 < ltNum2;
        break;
  
      case 11:
        const gteNum1 = parseFloat(prompt("Enter the first number:"));
        const gteNum2 = parseFloat(prompt("Enter the second number:"));
        result = gteNum1 >= gteNum2;
        break;
  
      case 12:
        const lteNum1 = parseFloat(prompt("Enter the first number:"));
        const lteNum2 = parseFloat(prompt("Enter the second number:"));
        result = lteNum1 <= lteNum2;
        break;
  
      case 13:
        const bool1 = prompt("Enter the first boolean value (true or false):");
        const bool2 = prompt("Enter the second boolean value (true or false):");
        result = bool1.toLowerCase() === "true" && bool2.toLowerCase() === "true";
        break;
  
      case 14:
        const bool3 = prompt("Enter the first boolean value (true or false):");
        const bool4 = prompt("Enter the second boolean value (true or false):");
        result = bool3.toLowerCase() === "true" || bool4.toLowerCase() === "true";
        break;
  
      case 15:
        const bool5 = prompt("Enter a boolean value (true or false):");
        result = !bool5.toLowerCase() === "true";
        break;
  
      default:
        alert("Invalid operator choice.");
        break;
    }
  
    if (result !== undefined) {
      alert("Result: " + result);
    }
  
    const continueChoice = prompt("Do you want to continue? (Enter 'yes' or 'no')").toLowerCase();
    if (continueChoice !== "yes") {
        alert("Thank you");
      break;
    }
  } while (true);
  