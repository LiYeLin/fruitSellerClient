// 从dom中提取元素节点
let myImage = document.querySelector("img");
let buttonElement = document.querySelector("button");
let headingElement = document.querySelector("h1");
// 设置图片的点击事件 两张图切换
myImage.onclick = () => {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/firefox-icon2.png");
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
};


// 判断是否设置过用户名 否则直接调用setUserName
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla 酷毙了，" + storedName;
}

// 设置点击事件
buttonElement.onclick = () => {
    setUserName();
}

function setUserName() {
    let myName = prompt("请输入你的名字。");
    // 用户名为空 直接返回
    if (!myName || myName === "") {
        return;
    }
    // 保存用户名到localStorage并且展示在heading元素中
    localStorage.setItem("name", myName);
    headingElement.textContent = "Mozilla 酷毙了，" + myName;
}
