var source = moment();
console.log(source);
var currentDay = source.format("dddd MMM Mo YYYY");
document.getElementById('currentDay').innerHTML = currentDay;
var v = source.format("HH");


setSavedValues();

//color coding to red if time slot matches current hour
$(document).ready(function(){
if(v == "9"){
    $("#9aminput").css("background-color", "#F14D57");
}
if(v == "10"){
    $("#10aminput").css("background-color", "#F14D57");
}
if(v == "11"){
    $("#11aminput").css("background-color", "#F14D57");
}
if(v == "12"){
    $("#12pminput").css("background-color", "#F14D57");
}
if(v == "13"){
    $("#1pminput").css("background-color", "#F14D57");
}
if(v == "14"){
    $("#2pminput").css("background-color", "#F14D57");
}
if(v == "15"){
    $("#3pminput").css("background-color", "#F14D57");
}
if(v == "16"){
    $("#4pminput").css("background-color", "#F14D57");
}
if(v == "17"){
    $("#5pminput").css("background-color", "#F14D57");
}
})

//color coding to green if time slot is greater than current hour
$(document).ready(function(){
if(Number(v) < 9){
    $("#9aminput").css("background-color", "#74E96E");
}
if(Number(v) < 10){
    $("#10aminput").css("background-color", "#74E96E");
}
if(Number(v) < 11){
    $("#11aminput").css("background-color", "#74E96E");
}
if(Number(v) < 12){
    $("#12pminput").css("background-color", "#74E96E");
}
if(Number(v) < 13){
    $("#1pminput").css("background-color", "#74E96E");
}
if(Number(v) < 14){
    $("#2pminput").css("background-color", "#74E96E");
}
if(Number(v) < 15){
    $("#3pminput").css("background-color", "#74E96E");
}
if(Number(v) < 16){
    $("#4pminput").css("background-color", "#74E96E");
}
if(Number(v) < 17){
    $("#5pminput").css("background-color", "#74E96E");
}
})

//hover function
$(document).ready(function(){
    $(".saveBtn").hover(function(){
        $(this).css("background-color", "#1d5966");
    },
    function(){
    $(this).css("background-color","#06AED5");
    });
})



//save input 
document.getElementById("9amsave").addEventListener("click", function (){

    var saved9am = document.getElementById("9aminput").value;
    localStorage.setItem("9amsavedinput", saved9am);
})
document.getElementById("10amsave").addEventListener("click", function (){

    var saved9am = document.getElementById("10aminput").value;
    localStorage.setItem("10amsavedinput", saved9am);
})
document.getElementById("11amsave").addEventListener("click", function (){

    var saved9am = document.getElementById("11aminput").value;
    localStorage.setItem("11amsavedinput", saved9am);
})
document.getElementById("12pmsave").addEventListener("click", function (){

    var saved9am = document.getElementById("12pminput").value;
    localStorage.setItem("12pmsavedinput", saved9am);
})
document.getElementById("1pmsave").addEventListener("click", function (){

    var saved9am = document.getElementById("1pminput").value;
    localStorage.setItem("1pmsavedinput", saved9am);
})
document.getElementById("2pmsave").addEventListener("click", function (){

    var saved9am = document.getElementById("2pminput").value;
    localStorage.setItem("2pmsavedinput", saved9am);
})
document.getElementById("3pmsave").addEventListener("click", function (){

    var saved9am = document.getElementById("3pminput").value;
    localStorage.setItem("3pmsavedinput", saved9am);
})
document.getElementById("4pmsave").addEventListener("click", function (){

    var saved9am = document.getElementById("4pminput").value;
    localStorage.setItem("4pmsavedinput", saved9am);
})
document.getElementById("5pmsave").addEventListener("click", function (){

    var saved9am = document.getElementById("5pminput").value;
    localStorage.setItem("5pmsavedinput", saved9am);
})

//set saved values into input field
function setSavedValues(){

    var x1 = localStorage.getItem("9amsavedinput");
    document.getElementById("9aminput").value = x1;
    var x1 = localStorage.getItem("10amsavedinput");
    document.getElementById("10aminput").value = x1;
    var x1 = localStorage.getItem("11amsavedinput");
    document.getElementById("11aminput").value = x1;
    var x1 = localStorage.getItem("12pmsavedinput");
    document.getElementById("12pminput").value = x1;
    var x1 = localStorage.getItem("1pmsavedinput");
    document.getElementById("1pminput").value = x1;
    var x1 = localStorage.getItem("2pmsavedinput");
    document.getElementById("2pminput").value = x1;
    var x1 = localStorage.getItem("3pmsavedinput");
    document.getElementById("3pminput").value = x1;
    var x1 = localStorage.getItem("4pmsavedinput");
    document.getElementById("4pminput").value = x1;
    var x1 = localStorage.getItem("5pmsavedinput");
    document.getElementById("5pminput").value = x1;
    
}