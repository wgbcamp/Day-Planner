var source = moment();
console.log(source);
var currentDay = source.format("dddd MMM Mo YYYY");
document.getElementById('currentDay').innerHTML = currentDay;




// if (typeof(Storage) == "undefined"){
//     localStorage.setItem("lastname", "Smith");
//     document.getElementById("choco").innerHTML = localStorage.getItem("lastname");
// }




