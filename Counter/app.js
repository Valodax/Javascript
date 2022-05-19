// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
var current = 50;

function hslToHex(h, s, l) {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}

light = 40
btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
            light++;
        } else if (styles.contains("increase")) {
            count++;
            light++
        } else {
            count = 0;
            light = 40;
        }
        if (count > 0) {
            value.style.color = hslToHex(100, 100, light);
            console.log(hslToHex(0, 100, light));
        }
        if (count < 0) {
            value.style.color = hslToHex(0, 100, light);
            console.log(hslToHex(0, 100, light));
        }
        if (count == 0) {
            value.style.color = "#222";
        }
        value.textContent = count;
    });
});


