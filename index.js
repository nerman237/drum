var dlength = document.querySelectorAll(".drum").length;
for(var i=0;i<dlength;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var bundleHTML = this.innerHTML;
        buttonanimation(bundleHTML);
        switch(bundleHTML){
            case "w":
                var wan= new Audio("crash.mp3");
                wan.play();
                break;
            case "a":
                var anne= new Audio("kick-bass.mp3");
                anne.play();
                break;
            case "s":
                var san= new Audio("snare.mp3");
                san.play();
                break;
            case "d":
                var dan= new Audio("tom-1.mp3");
                dan.play();
                break;
            case "j":
                var jan= new Audio("tom-2.mp3");
                jan.play();
                break;
            case "k":
                var kan= new Audio("tom-3.mp3");
                kan.play();
                break;
            case "l":
                var lan= new Audio("tom-4.mp3");
                lan.play();
                break;
        }
        
    })
     
}


var numberOfDruma=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDruma;i++){
document.querySelectorAll(".drum")[i].addEventListener("keypress",function(event){
makesound(event.key);
buttonanimation(event.key)
})}
function  makesound(key){
    switch(key){
        case "w":
            var wan= new Audio("crash.mp3");
            wan.play();
            break;
        case "a":
            var anne= new Audio("kick-bass.mp3");
            anne.play();
            break;
        case "s":
            var san= new Audio("snare.mp3");
            san.play();
            break;
        case "d":
            var dan= new Audio("tom-1.mp3");
            dan.play();
            break;
        case "j":
            var jan= new Audio("tom-2.mp3");
            jan.play();
            break;
        case "k":
            var kan= new Audio("tom-3.mp3");
            kan.play();
            break;
        case "l":
            var lan= new Audio("tom-4.mp3");
            lan.play();
            break;
    }
}
function buttonanimation(bundleHTML){
    var active= document.querySelector("." + bundleHTML);
     active.classList.add("pressed");
     setTimeout(function(){
        active.classList.remove("pressed");
     },100)
 }