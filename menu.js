var moveMenu = document.getElementById("menu");


document.getElementById("open").addEventListener("click", function(){
    moveMenu.style.left = "0px";
});

document.getElementById("close").addEventListener("click", function(){
    moveMenu.style.left = "-110px";
});

