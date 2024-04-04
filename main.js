var a = 0
document.getElementById("dec").onclick = function(){
    a -= 1
    document.getElementById('counter').innerHTML = a
}
document.getElementById("inc").onclick = function(){
    a += 1
    document.getElementById('counter').innerHTML = a
}
document.getElementById("res").onclick = function(){
    a = 0
    document.getElementById('counter').innerHTML = a
}