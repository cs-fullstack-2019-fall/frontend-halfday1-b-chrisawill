//variables for the functions

let click1 = 0;
let click2 = 0;
let finalScore = 0;
let winner = "";
//main function
function main()
{
  click1 = document.getElementById("butt1");

  console.log(click1);

  click1.onclick = function ()
  {
    alert("working")
  }

let clicks = document.querySelectorAll("butt1");
  for (let i = 0;i<= clicks;i++)
{
  clicks.onclick=function (press)
  {
    press.addEventListener("click")
  }
}




//   for (let i = 0;i<=click1;i++)
//   {
//     let clicks = document.getElementById("butt1");
//     clicks.addEventListener("click", clickedtarget);
// let changedtext = document.getElementById("counter")
//       // console.log(document.getElementById("middle"))
//     }
// }
// main();
// function clickedtarget(dev)
// {
//   let change = dev.target.querySelector("butt1");
//   finalScore++;
// }
//
// let tally = 0;
// let clicks = 0;
// let score=0;
// let finalscore = "";
//
// function main()
// {
//   tally = document.getElementById("middle");
//
//
// }

// function main()
// {
//   clicks = 0;
//   score = 0;
//
//   document.addEventListener("click");
//
// }
// main();


//
//
// document.getElementById("butt1").append(function (dev)
// {
//   for (let i =1; i <=tally; i++);
//   {
//     console.log("butt1")
//   }
// });