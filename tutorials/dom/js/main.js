console.log("hello hello");

let pageTitle = document.querySelector("#page-title");
let header = document.querySelector("header");
let body = document.querySelector("body")

// javascrip timeout changes h1 title after 3 seconds
setTimeout(function () {
    pageTitle.style.color = "pink";
    // console.log("timeout worked");
}, 3000)

//click event on header changes background color
header.onclick = function () {
    //console.log("clicked header");
   body.style.backgroundColor = "black";
}


// console.log("hello hello");

// // javascrip timeout changes h1 title after 3 seconds
// setTimeout(function () {
//     document.querySelector("#page-title").style.color = "pink";
//     // console.log("timeout worked");
// }, 3000)

// //click event on header changes background color
// document.querySelector("header").onclick = function () {
//     //console.log("clicked header");
//     document.querySelector("body").style.backgroundColor = "black";
// }