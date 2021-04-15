//
// let btn = document.querySelector("menu_Icon");
//
// btn.addEventListener("click", function(){
//   let menu = document.querySelector("nav");
//   function showMenu(){
//     menu.classList.add("navAdd");
//   }
//   showMenu();
// });

// (function(){
//   console.log("Ready!");
// });
console.log("Ready!");

// $ (function() {
$(".menu_Icon").on("click", function () {
  console.log("clicked")
  if ($("nav").hasClass("navAdd")) {
    $("#nav").removeClass("navAdd");
  } else {
    $("#nav").addClass("navAdd");
  }
});
//   });
