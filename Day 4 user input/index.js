


let username;
document.getElementById("btn").onclick = function(){
username = document.getElementById("mytext").value;
console.log(username);
window.alert("your welcome")
document.getElementById("label-name").innerHTML = "hello " + username;
}

