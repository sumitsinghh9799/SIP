// ===============================
// Dashboard Data
// ===============================

const dashboardData = {
    income: 2645,
    expense: 1895
};

// Calculate balance
const balance = dashboardData.income - dashboardData.expense;

// ===============================
// Update Dashboard Cards
// ===============================

document.getElementById("income").textContent =
    "₹" + dashboardData.income.toLocaleString();

document.getElementById("expense").textContent =
    "₹" + dashboardData.expense.toLocaleString();

// ===============================
// Monthly Chart Data
// ===============================

const incomeData = [
    700,
    500,
    600,
    894,
    1000,
    850,
    720,
    950,
    780,
    910,
    980,
    860
];

const expenseData = [
    400,
    350,
    450,
    768,
    650,
    600,
    580,
    690,
    520,
    640,
    700,
    610
];

// ===============================
// Apex Chart
// ===============================

const options = {

    chart: {
        type: "bar",
        height: 350,
        toolbar: {
            show: false
        }
    },

    series: [

        {
            name: "Income",
            data: incomeData
        },

        {
            name: "Expense",
            data: expenseData
        }

    ],

    colors: [
        "#00C389",
        "#FF7B00"
    ],

    plotOptions: {

        bar: {
            borderRadius: 6,
            columnWidth: "45%"
        }

    },

    dataLabels: {
        enabled: false
    },

    stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
    },

    xaxis: {

        categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ]

    },

    yaxis: {

        labels: {

            formatter: function(value){
                return "₹" + value;
            }

        }

    },

    fill: {
        opacity: 1
    },

    tooltip: {

        y: {

            formatter: function(value){

                return "₹" + value;

            }

        }

    },

    legend: {

        position: "top"

    }

};

// ===============================
// Render Chart
// ===============================

const chart = new ApexCharts(
    document.querySelector("#chart"),
    options
);

chart.render();