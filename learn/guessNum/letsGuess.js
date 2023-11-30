let buttonEle = document.querySelector("button");
let h1Ele = document.querySelector("h1");
let bodyEle = document.querySelector("body");
let input = document.querySelector("input");
input.type = "number"
input.max = "100"
input.min = "0"

const randomNum = Math.floor(Math.random() * 100)
let index = 0;
let maxTry = 10;
let hisArrayKey = "guessHistory";


localStorage.setItem(hisArrayKey, JSON.stringify([]))


buttonEle.onclick = () => {
    if (takeOneGuess()) {
        h1Ele.textContent = "恭喜你"
    }
}


/**
 * 猜测
 * @returns {boolean} guessRight?
 */
function takeOneGuess() {
    // 提示输入
    let myGuessNum = guessNumCheck(input.value)
    // 存储输入的值
    let history = JSON.parse(localStorage.getItem(hisArrayKey));
    history.append(myGuessNum)
    localStorage.setItem(hisArrayKey, JSON.stringify(history))
    // 判断是否正确
    if (myGuessNum === randomNum) {
        alert("你他娘的还真是个天才")
        return true;
    } else {
        let compareToAnswer = myGuessNum > randomNum ? "greater" : "less"
        alert(`your guess is ${compareToAnswer} than right number`)
        return false
    }
}

/*
数字的检测
 */
function guessNumCheck(guess) {
    if (!guess) {
        takeOneGuess();
        return;
    }
    let number = Number.parseInt(guess);

    if (isNaN(number)) {
        alert("仅支持数字")
        takeOneGuess();
        return;
    }

    if (number >= 100 || number <= 1) {
        alert("1-100 please")
        takeGuess();
        return;
    }
    return number;
}


