function calc(num) {
    var screen = document.getElementById("screen")
    screen.value += num
    
}


function clearscreen() {
    var screen = document.getElementById("screen")
    screen.value =""
    
}
function result(){
    var screen = document.getElementById("screen")
    arr=screen.value
    num=arr.length;
    
    screen.value=eval(arr)
}