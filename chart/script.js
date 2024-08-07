document.addEventListener("DOMContentLoaded", () => {
  const data = [
      { age: 19, gender: "Non-binary", year_in_school: "Freshman", major: "Psychology", monthly_income: 958, financial_aid: 270, tuition: 5939, housing: 709, food: 296, transportation: 123, books_supplies: 188, entertainment: 41, personal_care: 78, technology: 134, health_wellness: 127, miscellaneous: 72, preferred_payment_method: "Credit/Debit Card" },
      { age: 24, gender: "Female", year_in_school: "Junior", major: "Economics", monthly_income: 1006, financial_aid: 875, tuition: 4908, housing: 557, food: 365, transportation: 85, books_supplies: 252, entertainment: 74, personal_care: 92, technology: 226, health_wellness: 129, miscellaneous: 68, preferred_payment_method: "Credit/Debit Card" },
      { age: 24, gender: "Non-binary", year_in_school: "Junior", major: "Economics", monthly_income: 734, financial_aid: 928, tuition: 3051, housing: 666, food: 220, transportation: 137, books_supplies: 99, entertainment: 130, personal_care: 23, technology: 239, health_wellness: 112, miscellaneous: 133, preferred_payment_method: "Cash" },
      { age: 23, gender: "Female", year_in_school: "Senior", major: "Computer Science", monthly_income: 617, financial_aid: 265, tuition: 4935, housing: 652, food: 289, transportation: 114, books_supplies: 223, entertainment: 99, personal_care: 30, technology: 163, health_wellness: 105, miscellaneous: 55, preferred_payment_method: "Mobile Payment App" },
      { age: 20, gender: "Female", year_in_school: "Senior", major: "Computer Science", monthly_income: 810, financial_aid: 522, tuition: 3887, housing: 825, food: 372, transportation: 168, books_supplies: 194, entertainment: 48, personal_care: 71, technology: 88, health_wellness: 71, miscellaneous: 104, preferred_payment_method: "Credit/Debit Card" },
      { age: 25, gender: "Non-binary", year_in_school: "Sophomore", major: "Computer Science", monthly_income: 523, financial_aid: 790, tuition: 3151, housing: 413, food: 386, transportation: 122, books_supplies: 131, entertainment: 73, personal_care: 38, technology: 234, health_wellness: 108, miscellaneous: 99, preferred_payment_method: "Mobile Payment App" },
      { age: 23, gender: "Female", year_in_school: "Freshman", major: "Engineering", monthly_income: 1354, financial_aid: 69, tuition: 4973, housing: 812, food: 398, transportation: 101, books_supplies: 213, entertainment: 21, personal_care: 38, technology: 157, health_wellness: 117, miscellaneous: 48, preferred_payment_method: "Credit/Debit Card" },
      { age: 23, gender: "Female", year_in_school: "Junior", major: "Economics", monthly_income: 631, financial_aid: 748, tuition: 3966, housing: 571, food: 269, transportation: 92, books_supplies: 251, entertainment: 37, personal_care: 90, technology: 152, health_wellness: 56, miscellaneous: 62, preferred_payment_method: "Mobile Payment App" },
      { age: 22, gender: "Non-binary", year_in_school: "Senior", major: "Computer Science", monthly_income: 1402, financial_aid: 248, tuition: 5638, housing: 599, food: 354, transportation: 82, books_supplies: 155, entertainment: 123, personal_care: 41, technology: 162, health_wellness: 172, miscellaneous: 194, preferred_payment_method: "Credit/Debit Card" },
      { age: 18, gender: "Female", year_in_school: "Junior", major: "Computer Science", monthly_income: 1423, financial_aid: 74, tuition: 3977, housing: 626, food: 249, transportation: 117, books_supplies: 123, entertainment: 51, personal_care: 74, technology: 243, health_wellness: 34, miscellaneous: 196, preferred_payment_method: "Mobile Payment App" },
      { age: 23, gender: "Male", year_in_school: "Junior", major: "Biology", monthly_income: 762, financial_aid: 615, tuition: 4093, housing: 660, food: 262, transportation: 58, books_supplies: 183, entertainment: 98, personal_care: 21, technology: 274, health_wellness: 66, miscellaneous: 50, preferred_payment_method: "Credit/Debit Card" },
      { age: 25, gender: "Male", year_in_school: "Freshman", major: "Engineering", monthly_income: 1068, financial_aid: 19, tuition: 5138, housing: 734, food: 243, transportation: 200, books_supplies: 228, entertainment: 57, personal_care: 57, technology: 209, health_wellness: 193, miscellaneous: 146, preferred_payment_method: "Credit/Debit Card" },
      { age: 21, gender: "Male", year_in_school: "Sophomore", major: "Economics", monthly_income: 719, financial_aid: 540, tuition: 4863, housing: 894, food: 280, transportation: 120, books_supplies: 126, entertainment: 41, personal_care: 50, technology: 78, health_wellness: 113, miscellaneous: 114, preferred_payment_method: "Credit/Debit Card" },
      { age: 19, gender: "Female", year_in_school: "Junior", major: "Biology", monthly_income: 1176, financial_aid: 859, tuition: 5201, housing: 626, food: 234, transportation: 50, books_supplies: 274, entertainment: 20, personal_care: 77, technology: 125, health_wellness: 199, miscellaneous: 103, preferred_payment_method: "Mobile Payment App" },
      { age: 24, gender: "Non-binary", year_in_school: "Freshman", major: "Economics", monthly_income: 1496, financial_aid: 75, tuition: 5301, housing: 657, food: 151, transportation: 63, books_supplies: 92, entertainment: 124, personal_care: 64, technology: 196, health_wellness: 50, miscellaneous: 117, preferred_payment_method: "Cash" },
      { age: 22, gender: "Non-binary", year_in_school: "Sophomore", major: "Computer Science", monthly_income: 1227, financial_aid: 26, tuition: 4175, housing: 884, food: 328, transportation: 167, books_supplies: 175, entertainment: 111, personal_care: 96, technology: 73, health_wellness: 154, miscellaneous: 109, preferred_payment_method: "Cash" },
      { age: 23, gender: "Female", year_in_school: "Freshman", major: "Psychology", monthly_income: 1419, financial_aid: 237, tuition: 5450, housing: 883, food: 361, transportation: 200, books_supplies: 141, entertainment: 76, personal_care: 22, technology: 285, health_wellness: 185, miscellaneous: 76, preferred_payment_method: "Cash" },
      { age: 21, gender: "Female", year_in_school: "Freshman", major: "Computer Science", monthly_income: 1454, financial_aid: 851, tuition: 3538, housing: 754, food: 357, transportation: 110, books_supplies: 188, entertainment: 33, personal_care: 24, technology: 50, health_wellness: 74, miscellaneous: 46, preferred_payment_method: "Mobile Payment App" },
      { age: 19, gender: "Female", year_in_school: "Sophomore", major: "Psychology", monthly_income: 1487, financial_aid: 311, tuition: 4401, housing: 772, food: 357, transportation: 195, books_supplies: 225, entertainment: 84, personal_care: 87, technology: 83, health_wellness: 143, miscellaneous: 91, preferred_payment_method: "Credit/Debit Card" }
  ];

   // Populate the table
   const tableBody = document.querySelector("#expenseTable tbody");
   data.forEach(student => {
       const row = document.createElement("tr");
       for (const key in student) {
           const cell = document.createElement("td");
           cell.textContent = student[key];
           row.appendChild(cell);
       }
       tableBody.appendChild(row);
   });

   // Calculate custom metrics
   const totalExpenses = data.reduce((acc, student) => {
       const totalExpense = student.tuition + student.housing + student.food + student.transportation + student.books_supplies + student.entertainment + student.personal_care + student.technology + student.health_wellness + student.miscellaneous;
       student.total_expense = totalExpense;
       return acc + totalExpense;
   }, 0);

   const avgMonthlyIncome = data.reduce((acc, student) => acc + student.monthly_income, 0) / data.length;

   const totalFinancialAid = data.reduce((acc, student) => acc + student.financial_aid, 0);

   document.getElementById("totalExpenses").textContent = `Total Expenses: $${totalExpenses.toLocaleString()}`;
   document.getElementById("avgMonthlyIncome").textContent = `Average Monthly Income: $${avgMonthlyIncome.toFixed(2)}`;
   document.getElementById("totalFinancialAid").textContent = `Total Financial Aid: $${totalFinancialAid.toLocaleString()}`;

   // Bar Chart for Total Expenses by Category
   const categories = ["tuition", "housing", "food", "transportation", "books_supplies", "entertainment", "personal_care", "technology", "health_wellness", "miscellaneous"];
   const categoryData = categories.map(category => data.reduce((acc, student) => acc + student[category], 0));

   const expenseChartCtx = document.getElementById("expenseChart").getContext("2d");
   new Chart(expenseChartCtx, {
       type: 'bar',
       data: {
           labels: categories.map(cat => cat.replace('_', ' ').toUpperCase()),
           datasets: [{
               label: 'Total Expenses',
               data: categoryData,
               backgroundColor: 'rgba(75, 192, 192, 0.2)',
               borderColor: 'rgba(75, 192, 192, 1)',
               borderWidth: 1
           }]
       },
       options: {
           scales: {
               y: {
                   beginAtZero: true
               }
           }
       }
   });

   // Line Graph for Monthly Income vs. Total Expenses
   const incomeData = data.map(student => student.monthly_income);
   const totalExpenseData = data.map(student => student.total_expense);

   const incomeExpenseChartCtx = document.getElementById("incomeExpenseChart").getContext("2d");
   new Chart(incomeExpenseChartCtx, {
       type: 'line',
       data: {
           labels: data.map((_, i) => `Student ${i + 1}`),
           datasets: [
               {
                   label: 'Monthly Income',
                   data: incomeData,
                   borderColor: 'rgba(54, 162, 235, 1)',
                   backgroundColor: 'rgba(54, 162, 235, 0.2)',
                   fill: false,
                   tension: 0.1
               },
               {
                   label: 'Total Expenses',
                   data: totalExpenseData,
                   borderColor: 'rgba(255, 99, 132, 1)',
                   backgroundColor: 'rgba(255, 99, 132, 0.2)',
                   fill: false,
                   tension: 0.1
               }
           ]
       },
       options: {
           scales: {
               y: {
                   beginAtZero: true
               }
           }
       }
   });

   // Pie Chart for Expense Distribution by Category
   const pieChartCtx = document.getElementById("pieChart").getContext("2d");
   new Chart(pieChartCtx, {
       type: 'pie',
       data: {
           labels: categories.map(cat => cat.replace('_', ' ').toUpperCase()),
           datasets: [{
               label: 'Expense Distribution',
               data: categoryData,
               backgroundColor: [
                   'rgba(255, 99, 132, 0.2)',
                   'rgba(54, 162, 235, 0.2)',
                   'rgba(255, 206, 86, 0.2)',
                   'rgba(75, 192, 192, 0.2)',
                   'rgba(153, 102, 255, 0.2)',
                   'rgba(255, 159, 64, 0.2)',
                   'rgba(199, 199, 199, 0.2)',
                   'rgba(83, 102, 255, 0.2)',
                   'rgba(56, 159, 64, 0.2)',
                   'rgba(155, 206, 86, 0.2)',
               ],
               borderColor: [
                   'rgba(255, 99, 132, 1)',
                   'rgba(54, 162, 235, 1)',
                   'rgba(255, 206, 86, 1)',
                   'rgba(75, 192, 192, 1)',
                   'rgba(153, 102, 255, 1)',
                   'rgba(255, 159, 64, 1)',
                   'rgba(199, 199, 199, 1)',
                   'rgba(83, 102, 255, 1)',
                   'rgba(56, 159, 64, 1)',
                   'rgba(155, 206, 86, 1)',
               ],
               borderWidth: 1
           }]
       }
   });

   // Scatter Plot for Monthly Income vs. Total Expenses
   const scatterPlotCtx = document.getElementById("scatterPlot").getContext("2d");
   new Chart(scatterPlotCtx, {
       type: 'scatter',
       data: {
           datasets: [{
               label: 'Income vs. Expenses',
               data: data.map(student => ({
                   x: student.monthly_income,
                   y: student.total_expense
               })),
               backgroundColor: 'rgba(255, 159, 64, 0.5)',
               borderColor: 'rgba(255, 159, 64, 1)',
               borderWidth: 1
           }]
       },
       options: {
           scales: {
               x: {
                   title: {
                       display: true,
                       text: 'Monthly Income'
                   }
               },
               y: {
                   title: {
                       display: true,
                       text: 'Total Expenses'
                   },
                   beginAtZero: true
               }
           }
       }
   });
});
