let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

const form = document.getElementById("expenseForm");

const titleInput = document.getElementById("title");
const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");
const typeInput = document.getElementById("type");
const dateInput = document.getElementById("date");

const searchInput = document.getElementById("search");
const filterInput = document.getElementById("filter");

const transactionList = document.getElementById("transactionList");

const incomeCard = document.getElementById("income");
const expenseCard = document.getElementById("expense");
const balanceCard = document.getElementById("balance");

const limitBar = document.getElementById("limitBar");

const exportBtn = document.getElementById("exportCSV");
const themeBtn = document.getElementById("themeBtn");

let incomeData = new Array(12).fill(0);
let expenseData = new Array(12).fill(0);

const spendingLimit = 50000;

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

        "#22c55e",

        "#ef4444"

    ],

    plotOptions: {

        bar: {

            horizontal: false,

            borderRadius: 8,

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

        title: {

            text: "Amount (₹)"

        }

    },

    fill: {

        opacity: 1

    },

    tooltip: {

        y: {

            formatter: function (val) {

                return "₹" + val;

            }

        }

    },

    legend: {

        position: "top"

    }

};

const chart = new ApexCharts(

    document.querySelector("#chart"),

    options

);

chart.render();


function saveTransactions() {

    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );

}

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const title = titleInput.value.trim();
    const amount = Number(amountInput.value);
    const category = categoryInput.value;
    const type = typeInput.value;
    const date = dateInput.value;

    if (title === "" || amount <= 0 || date === "") {

        alert("Please fill all fields correctly.");
        return;

    }

    const transaction = {

        id: Date.now(),

        title,

        amount,

        category,

        type,

        date

    };

    transactions.push(transaction);

    saveTransactions();

    form.reset();

    renderDashboard();

});

function deleteTransaction(id) {

    const confirmDelete = confirm(
        "Delete this transaction?"
    );

    if (!confirmDelete) return;

    transactions = transactions.filter(function (item) {

        return item.id !== id;

    });

    saveTransactions();

    renderDashboard();

}

function clearAllTransactions() {

    const answer = confirm(
        "Delete all transactions?"
    );

    if (!answer) return;

    transactions = [];

    saveTransactions();

    renderDashboard();

}

function renderDashboard() {

    transactionList.innerHTML = "";

    let totalIncome = 0;
    let totalExpense = 0;

    incomeData.fill(0);
    expenseData.fill(0);

    const searchValue = searchInput.value.toLowerCase();
    const filterValue = filterInput.value;

    const filteredTransactions = transactions.filter((item) => {

        const matchSearch = item.title
            .toLowerCase()
            .includes(searchValue);

        const matchFilter =
            filterValue === "all" ||
            item.type === filterValue;

        return matchSearch && matchFilter;

    });

    filteredTransactions.forEach((item) => {

        const li = document.createElement("li");

        li.className =
            item.type === "income"
                ? "income-item"
                : "expense-item";

        li.innerHTML = `

            <div>

                <strong>${item.title}</strong>

                <small>${item.category}</small>

                <small>${item.date}</small>

            </div>

            <div>

                <h3>

                    ${item.type === "income" ? "+" : "-"}

                    ₹${item.amount.toLocaleString()}

                </h3>

            </div>

            <button onclick="deleteTransaction(${item.id})">

                Delete

            </button>

        `;

        transactionList.appendChild(li);

    });

    transactions.forEach((item) => {

        if (item.type === "income") {

            totalIncome += item.amount;

        } else {

            totalExpense += item.amount;

        }

        const month = new Date(item.date).getMonth();

        if (item.type === "income") {

            incomeData[month] += item.amount;

        } else {

            expenseData[month] += item.amount;

        }

    });

    incomeCard.textContent =
        "₹" + totalIncome.toLocaleString();

    expenseCard.textContent =
        "₹" + totalExpense.toLocaleString();

    balanceCard.textContent =
        "₹" + (totalIncome - totalExpense).toLocaleString();

        Math.min(
            (totalExpense / spendingLimit) * 100,
            100
        );

    limitBar.style.width = percent + "%";

    if (percent < 50) {

        limitBar.style.background = "#22c55e";

    } else if (percent < 80) {

        limitBar.style.background = "#f59e0b";

    } else {

        limitBar.style.background = "#ef4444";

    }

    // ============================
    // Update Chart
    // ============================

    chart.updateSeries([

        {

            name: "Income",

            data: incomeData

        },

        {

            name: "Expense",

            data: expenseData

        }

    ]);

}

searchInput.addEventListener("input", function () {

    renderDashboard();

});

filterInput.addEventListener("change", function () {

    renderDashboard();

});


exportBtn.addEventListener("click", function () {

    if (transactions.length === 0) {

        alert("No transactions available!");

        return;

    }

    let csv =
        "Title,Amount,Category,Type,Date\n";

    transactions.forEach(function (item) {

        csv +=

            `${item.title},${item.amount},${item.category},${item.type},${item.date}\n`;

    });

    const blob = new Blob(

        [csv],

        {

            type: "text/csv"

        }

    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "transactions.csv";

    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);

    URL.revokeObjectURL(url);

});

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");

    themeBtn.textContent = "☀️";

}

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");

        themeBtn.textContent = "☀️";

    } else {

        localStorage.setItem("theme", "light");

        themeBtn.textContent = "🌙";

    }

});

function showEmptyMessage() {

    if (transactionList.children.length === 0) {

        transactionList.innerHTML = `

            <li style="
                text-align:center;
                padding:25px;
                color:gray;
                font-size:18px;
                list-style:none;
            ">

                No transactions found.

            </li>

        `;

    }

}

const oldRenderDashboard = renderDashboard;

renderDashboard = function () {

    transactions.sort(function (a, b) {

        return new Date(b.date) - new Date(a.date);

    });

    oldRenderDashboard();

    showEmptyMessage();

};

dateInput.value = new Date()

    .toISOString()

    .split("T")[0];

renderDashboard();
