const reviews = [
    {
        id: 1,
        name: "Amanda",
        job: "Web Developer",
        img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        text: "If the church of cheese was a thing, I would definitely become a priest.",
    },
    {
        id: 2,
        name: "Bob",
        job: "Sales Administrator",
        img: "https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg",
        text: "Fundamentally speaking, like the moon, we are all made of cheese.",
    },
    {
        id: 3,
        name: "Catherine",
        job: "Financial Analyst",
        img: "https://i.pinimg.com/736x/32/23/be/3223be5aa0554f7bdc75e74de2a0cbfd.jpg",
        text: "I put cheese on my crackers because I love eating salty things.",
    },
    {
        id: 4,
        name: "Daniel",
        job: "Retail Associate",
        img: "https://en.unesco.org/gem-report/sites/default/files/CGP_20190717110842_17_0.jpg",
        text: "Blue cheese is my favourite type of cheese because it reminds me of my socks.",
    },

];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});
// show random person
randomBtn.addEventListener("click", function () {
    console.log("hello");

    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});