var ball1 = document.getElementById("ch1");
var ball2 = document.getElementById("ch2");
var ball3 = document.getElementById("ch3");

var zoom = document.getElementById("zoom");

var numInp = document.getElementById("numberImg");


document.getElementById("bg1").addEventListener("click", function (){
   
    ball1.style.backgroundImage = "url('imgs/i1.jpg')";
    ball2.style.backgroundImage = "url('imgs/i2.jpg')";
    ball3.style.backgroundImage = "url('imgs/i3.jpg')";
    
    ball1.addEventListener("mouseenter", function (){
    zoom.style.backgroundImage = "url('imgs/i1.jpg')";  
    });
    
    ball2.addEventListener("mouseenter", function (){
    zoom.style.backgroundImage = "url('imgs/i2.jpg')";
    });
    
    ball3.addEventListener("mouseenter", function (){
    zoom.style.backgroundImage = "url('imgs/i3.jpg')";
    });
    
});

document.getElementById("bg2").addEventListener("click", function (){
   
    ball1.style.backgroundImage = "url('imgs/i4.jpg')";
    ball2.style.backgroundImage = "url('imgs/i5.jpg')";
    ball3.style.backgroundImage = "url('imgs/i6.jpg')";
    
    ball1.addEventListener("mouseenter", function (){
    zoom.style.backgroundImage = "url('imgs/i4.jpg')";
    });
    
    ball2.addEventListener("mouseenter", function (){
    zoom.style.backgroundImage = "url('imgs/i5.jpg')";
    });
    
    ball3.addEventListener("mouseenter", function (){
    zoom.style.backgroundImage = "url('imgs/i6.jpg')";
    });
    
});

document.getElementById("bg3").addEventListener("click", function (){
   
    ball1.style.backgroundImage = "url('imgs/i7.jpg')";
    ball2.style.backgroundImage = "url('imgs/i8.jpg')";
    ball3.style.backgroundImage = "url('imgs/i9.jpg')";
    
    ball1.addEventListener("mouseenter", function (){
    zoom.style.backgroundImage = "url('imgs/i7.jpg')";
    });
    
    ball2.addEventListener("mouseenter", function (){
    zoom.style.backgroundImage = "url('imgs/i8.jpg')";
    });
    
    ball3.addEventListener("mouseenter", function (){
    zoom.style.backgroundImage = "url('imgs/i9.jpg')";
    });
    
});

document.getElementById("bg4").addEventListener("click", function (){
   
    ball1.style.backgroundImage = "url('imgs/i10.jpg')";
    ball2.style.backgroundImage = "url('imgs/i11.jpg')";
    ball3.style.backgroundImage = "url('imgs/i12.jpg')";
    
    ball1.addEventListener("mouseenter", function (){
    zoom.style.backgroundImage = "url('imgs/i10.jpg')";
    });
    
    ball2.addEventListener("mouseenter", function (){
    zoom.style.backgroundImage = "url('imgs/i11.jpg')";
    });
    
    ball3.addEventListener("mouseenter", function (){
    zoom.style.backgroundImage = "url('imgs/i12.jpg')";
    });
    
    
});



//PART 4B

document.getElementById("makeBG").addEventListener("click", function (){
    document.getElementById("bg").style.backgroundImage = zoom.style.backgroundImage;       
});


document.getElementById("reset").addEventListener("click", function (){
       
    document.getElementById("bg").style.display = "none";
    
});

document.getElementById("showApp").addEventListener("click", function (){
       
    document.getElementById("app1").style.display = "block";
    
});

document.getElementById("hideApp").addEventListener("click", function (){
       
    document.getElementById("app1").style.display = "none";
    
});


//PART 5

var width = 100;
var height = 70;

zoom.addEventListener("click", function (){ 
 document.getElementById("zoomcontrols").style.display = "block";
    
});


document.getElementById("plus").addEventListener("click", function (){
    
    width += 10;
    height += 7;
    zoom.style.width = width + "%";
    zoom.style.height = height + "%";
    
    if (width > 91 && height > 64) {
        
    width = 91;
    height = 64;
    zoom.style.width = 91 + "%";
    zoom.style.height = 64 + "%";
        
    }
});

document.getElementById("minus").addEventListener("click", function (){
    
    width -= 10;
    height -= 7;
    zoom.style.width = width + "%";
    zoom.style.height = height + "%";
    
    if (width < 11 && height < 8) {  
    width = 11;
    height = 8;
    zoom.style.width = 11 + "%";
    zoom.style.height = 8 + "%";
        
    }
});



// Part 6A

numInp.addEventListener("change", function(){

    
if (numInp.value == "1"){
        zoom.style.backgroundImage = "url('imgs/i1.jpg')";
    } else if (numInp.value == "2"){
        zoom.style.backgroundImage = "url('imgs/i2.jpg')";
    } else if (numInp.value == "3"){
        zoom.style.backgroundImage = "url('imgs/i3.jpg')";
    } else if (numInp.value == "4"){
        zoom.style.backgroundImage = "url('imgs/i4.jpg')";
    } else if (numInp.value == "5"){
        zoom.style.backgroundImage = "url('imgs/i5.jpg')";
    } else if (numInp.value == "6"){
        zoom.style.backgroundImage = "url('imgs/i6.jpg')";
    } else if (numInp.value == "7"){
        zoom.style.backgroundImage = "url('imgs/i7.jpg')";
    } else if (numInp.value == "8"){
        zoom.style.backgroundImage = "url('imgs/i8.jpg')";
    } else if (numInp.value == "9"){
        zoom.style.backgroundImage = "url('imgs/i9.jpg')";
    } else if (numInp.value == "10"){
        zoom.style.backgroundImage = "url('imgs/i10.jpg')";
    } else if (numInp.value == "11"){
        zoom.style.backgroundImage = "url('imgs/i11.jpg')";
    } else if (numInp.value == "12"){
        zoom.style.backgroundImage = "url('imgs/i12.jpg')";
    } else if (numInp.value < "1" || numInp.value > "12"){
        alert ("Doesn't Exist!");  
    }
});

// Part 6B

/*


document.getElementById("next").addEventListener("click", function (){
    
    
if (ball1.style.backgroundImage == "imgs/i1.jpg" && ball2.style.backgroundImage == "imgs/i2.jpg" && ball3.style.backgroundImage == "imgs/i3.jpg"){
   
    
    ball1.style.backgroundImage = "url('imgs/i4.jpg')";
    ball2.style.backgroundImage = "url('imgs/i5.jpg')";
    ball3.style.backgroundImage = "url('imgs/i6.jpg')";
}
});



*/



