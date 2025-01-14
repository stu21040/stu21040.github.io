console.log("I'm Ready!");
document.addEventListener("DOMContentLoaded", () => {
    // 取得按鈕元素
    console.log("Loaded Finish");
    const button = document.getElementById("myButton");

    // 為按鈕添加點擊事件
    button.addEventListener("click", () => {
        alert("你點擊了按鈕！");
    });
});