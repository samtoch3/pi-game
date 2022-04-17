alert(
    "π : Une Constante Mathematique\n\n😯 - Encore... Un jeu de Math \n😺 - C'est le Jeu π\n🥺 - Est-il dificilde jouer?\n😺 - Non! C'est très simplee, essayez de vous souvenir d'autant de chiffres de π que possible..\n\n🔘 - Cliquez pour démarrer\n⚠️ - Cliquez pour redémarrer\n\n\n"
);

let last = "";
let piValue =
    "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679";

let currLength = 0;
let score = 0;
let highScore = 0;
let startFunInterval;
let skipDot = 0;

function getDigit(digit) {
    if (!gameStart && forceFully == false) {
        againTry = 2;
        last += digit;
        document.getElementById("output").innerHTML = last;

        if (digit != piValue[currLength]) {
            highScore = score > highScore ? score : highScore;
            document.getElementById("output").innerHTML = `Hi-Score: ${highScore}`;
            document.getElementById("restart").innerHTML = "🔘";
            highScore = 0;
            digitLength = 3;
            againTry = 0;
        } else {
            if (digit == ".") {
                document.getElementById("crt-dg").innerHTML = `${skipDot}/${
          digitLength - 1
        }`;
                currLength++;
            } else {
                score++;
                currLength++;
                skipDot++;
                document.getElementById("crt-dg").innerHTML = `${skipDot}/${
          digitLength - 1
        }`;
            }

            if (currLength == digitLength) {
                //gameStart = false;
                // console.log("hello");
                startFunInterval = setInterval(start, 500);
            }
        }
    }
}

let gameStart = false;
let digitLength = 3;
let colorReset;
let colorSet;
let forceFully = true;
let againTry = 0;
let lastCurrLen = 0;
let lastDigitLength = 0;

function start() {
    clearInterval(colorSet);
    clearInterval(colorReset);

    last = "";
    lastCurrLen = currLength;
    currLength = 0;
    highScore = score > highScore ? score : highScore;
    score = 0;
    skipDot = 0;
    document.getElementById("output").innerHTML = "";

    if (gameStart == true) {
        //console.log(curr, digitLength);
        againTry = 1;
        gameStart = false;

        document.getElementById("output").innerHTML = `type digits...`;

        if (curr < digitLength) {
            document.getElementById("output").innerHTML = `Hi-Score: ${highScore}`;
            document.getElementById("restart").innerHTML = "🔘";
            document.getElementById("crt-dg").innerHTML = `${0}/${0}`;
            digitLength = 3;
            curr = 0;
            maxScore = 0;
            score = 0;
            againTry = 0;
            forceFully = true;
        } else {
            forceFully = false;
            document.getElementById("restart").innerHTML = "⚠️";
        }

        document.getElementById(`d${piValue[prev]}`).style.backgroundColor =
            "#3c4043";
        curr = 0;
        prev = 0;
    } else {
        forceFully = false;
        clearInterval(startFunInterval);
        lastDigitLength = digitLength;
        digitLength++;
        curr = 0;
        prev = 0;
        gameStart = true;

        if (againTry == 1) {
            againTry = 0;
            gameStart = false;
            document.getElementById("output").innerHTML = `Hi-Score: ${highScore}`;
            document.getElementById("restart").innerHTML = "🔘";
            document.getElementById("crt-dg").innerHTML = `${0}/${0}`;
            digitLength = 3;
            curr = 0;
            maxScore = 0;
            score = 0;
            highScore = 0;
        } else if (againTry == 2 && lastCurrLen != lastDigitLength) {
            againTry = 0;
            gameStart = false;
            document.getElementById("output").innerHTML = `Hi-Score: ${highScore}`;
            document.getElementById("restart").innerHTML = "🔘";
            document.getElementById("crt-dg").innerHTML = `${0}/${0}`;
            digitLength = 3;
            curr = 0;
            maxScore = 0;
            score = 0;
            highScore = 0;
        } else {
            document.getElementById("restart").innerHTML = "⚠️";

            colorReset = setInterval(mtRango, 500);
            colorSet = setInterval(rangDo, 500);
        }
    }
}

let curr = 0;
let prev = 0;

function rangDo() {
    if (curr == digitLength) {
        document.getElementById("crt-dg").innerHTML = `${0}/${digitLength - 1}`;
        currLength = 0;
        // console.log(digitLength, "Pillu");
        start();
    } else {
        document.getElementById(`d${piValue[curr]}`).style.backgroundColor = "red";
        document.getElementById("output").innerHTML += piValue[curr];

        document.getElementById("crt-dg").innerHTML = `${curr}/${digitLength - 1}`;
        prev = curr;
        curr++;
    }
}

function mtRango() {
    document.getElementById(`d${piValue[prev]}`).style.backgroundColor =
        "#3c4043";
}
