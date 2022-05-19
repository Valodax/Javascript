const colors = ["Green", "Red", "Blue", "Yellow"]
const btn = document.getElementById('btn')
const color = document.querySelector(".color")

btn.addEventListener('click', function () {
    // get a random number that is between index 0 and 3
    const randomNumber = getRandomNumber();
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}