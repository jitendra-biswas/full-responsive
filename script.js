// var area = document.querySelector("body")
// var cursor = document.querySelector(".cursor")
// area.addEventListener("mousemove", function(dets){
//     cursor.style.left = dets.x+"px"
//     cursor.style.top = dets.y+"px"
// })

var side = document.querySelector(".side-nav")
var bar = document.querySelector("#bar")
var value = 0
bar.addEventListener("click",function(){
    if(value == 0){
        side.style.display = "block"
        value = 1
    }
    else{
        side.style.display = "none"
        value = 0
    }
})