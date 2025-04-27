const btn = document.getElementById("btn");
const output = document.getElementById("output");

btn.addEventListener("click", function () {
    const inputVal = document.getElementById("ip").value;
    const num = parseFloat(inputVal);

    if (isNaN(num)) {
        output.textContent = "Please enter a valid number!";
        return;
    }

    myPromise1(num)
        .then((result1) => {
            output.textContent = `Result: ${result1}`;
            return myPromise2(result1);
        })
        .then((result2) => {
            output.textContent = `Result: ${result2}`;
            return myPromise3(result2);
        })
        .then((result3) => {
            output.textContent = `Result: ${result3}`;
            return myPromise4(result3);
        })
        .then((result4) => {
            output.textContent = `Final Result: ${result4}`;
        })
        .catch((err) => {
            output.textContent = `Error: ${err}`;
        });
});

function myPromise1(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num);
        }, 2000); // 2 seconds
    });
}

function myPromise2(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * 2);
        }, 2000); // 2 seconds
    });
}

function myPromise3(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num - 3);
        }, 1000); // 1 second
    });
}

function myPromise4(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num / 2 + 10);
        }, 1000); // 1 second
    });
}
