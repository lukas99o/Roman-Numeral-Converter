const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const pTag = document.createElement("p");
pTag.className = "pTag-output";

function RomanNumeralConverter(num) {
    const romanNumeralArr = [
        { value: 1000, numeral: "M" },
        { value: 900, numeral: "CM" },
        { value: 500, numeral: "D" },
        { value: 400, numeral: "CD" },
        { value: 100, numeral: "C" },
        { value: 90, numeral: "XC" },
        { value: 50, numeral: "L" },
        { value: 40, numeral: "XL" },
        { value: 10, numeral: "X" },
        { value: 9, numeral: "IX" },
        { value: 5, numeral: "V" },
        { value: 4, numeral: "IV" },
        { value: 1, numeral: "I" }
    ];

    const result = [];

    while (num > 0) {
        for (let i = 0; i < romanNumeralArr.length; i++) {
            if (num >= romanNumeralArr[i].value) {
                result.push(romanNumeralArr[i].numeral);
                num -= romanNumeralArr[i].value;
                break;
            }
        }
    }

    return result.join("");
}

// handle all inputs
convertBtn.addEventListener("click", () => {
    output.replaceChildren();

    if (input.value === "") {
        pTag.innerHTML = "Please enter a valid number";
        output.appendChild(pTag);
        output.classList.remove('hidden');
    } else if (input.value < 1) {
        pTag.innerHTML = "Please enter a number greater than or equal to 1";
        output.appendChild(pTag);
        output.classList.remove('hidden');
    } else if (input.value >= 4000) {
        pTag.innerHTML = "Please enter a number less than or equal to 3999";
        output.appendChild(pTag);
        output.classList.remove('hidden');
    } else {
        pTag.innerHTML = RomanNumeralConverter(input.value);
        output.appendChild(pTag);
        output.classList.remove("hidden");
    }
});

input.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        output.replaceChildren();

        if (input.value === "") {
            pTag.innerHTML = "Please enter a valid number";
            output.appendChild(pTag);
            output.classList.remove('hidden');
        } else if (input.value < 1) {
            pTag.innerHTML = "Please enter a number greater than or equal to 1";
            output.appendChild(pTag);
            output.classList.remove('hidden');
        } else if (input.value >= 4000) {
            pTag.innerHTML = "Please enter a number less than or equal to 3999";
            output.appendChild(pTag);
            output.classList.remove('hidden');
        } else {
            pTag.innerHTML = RomanNumeralConverter(input.value);
            output.appendChild(pTag);
            output.classList.remove("hidden");
        }
    }
})