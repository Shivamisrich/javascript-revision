const fs = require('fs');
const readline = require('readline');

// Interface for terminal input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask questions one by one
rl.question("Amount: ₹", (amount) => {
  rl.question("Category (e.g. Fuel, Tea, Toll): ", (category) => {
    rl.question("Note (e.g. Truck UP32 or Driver tea): ", (note) => {
      const expense = {
        date: new Date().toLocaleDateString('en-IN'),
        amount: parseFloat(amount),
        category,
        note,
      };

      // Read old data
      const rawData = fs.readFileSync('data.json');
      const expenses = JSON.parse(rawData);

      // Add new expense
      expenses.push(expense);

      // Save it back
      fs.writeFileSync('data.json', JSON.stringify(expenses, null, 2));

      console.log("\n✅ Expense Saved:");
      console.table([expense]);

      rl.close();
    });
  });
});