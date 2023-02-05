let myHeader1 = document.querySelector("h1");
myHeader1.onclick = function() {
    if (myHeader1.textContent === '奖状合集') {
        myHeader1.textContent = '石露的奖状合集'
    } else if (myHeader1.textContent === '石露的奖状合集') {
        myHeader1.textContent = '雷军安的奖状合集'
    }
}

function setUserName() {
    let myName = prompt("请输入你的名字")
    if (!myName) {
        setUserName()
    }
    localStorage.setItem('name', myName)
    myHeader1.textContent = myName + "的奖状合集"
}

if (!localStorage.getItem('name')) {
    setUserName()
} else {
    let storedName = localStorage.getItem('name')
}

// myHeader1.addEventListener("click", ()=>{
//     alert("别戳我，怕疼");
// })

let myButton1 = document.getElementById("button_1")
myButton1.onclick = function() {
    setUserName()
}

let myImg = document.querySelector("img");
let myButton2 = document.getElementById("button_2");
myButton2.onclick = function() {
    let mySrc = myImg.getAttribute('src');
    if (mySrc === 'images/同心战役特别贡献奖.png') {
        myImg.setAttribute('src', 'images/卓越研发奖.png')
    } else {
        myImg.setAttribute('src', 'images/同心战役特别贡献奖.png')
    }
}

window.onload = function() {
    window.requestAnimationFrame(currTime)
}