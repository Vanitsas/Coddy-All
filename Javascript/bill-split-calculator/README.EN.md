# Bill Split Calculator 💰

This project is a simple Bill Split Calculator made in JavaScript. It calculates how much each person should pay including a tip percentage. Perfect for learning basic arithmetic operations, input handling, and output formatting.

## 📌 Features

- Calculates tip amount based on bill and tip percentage  
- Adds the tip to the total bill  
- Divides the total amount among the number of people  
- Outputs the total and per-person amount  

## 🧠 How It Works

1. Reads three inputs:  
   - Bill amount (`billAmount`)  
   - Tip percentage (`tipPercentage`)  
   - Number of people (`numPeople`)  
2. Calculates the tip: `(tipPercentage / 100) * billAmount`  
3. Adds the tip to the bill: `totalWithTip = billAmount + tipAmount`  
4. Divides total with tip by number of people: `perPerson = totalWithTip / numPeople`  
5. Prints the results  

## ▶️ Example

Input:  
100
15
4

Output:
Bill Split Calculator
Total (including tip): $115
Each person pays: $28.75  

## ⚙️ Usage

```bash
node index.js