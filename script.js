//your code here
const btn = document.querySelector("#swap");
const change = document.querySelector("main");


console.log(change.classList.value);

btn.addEventListener("click",()=>{
    if(change.classList.value=="day"){
        change.classList.remove("day");
        change.classList.add("night");
        btn.classList.add("button_night");
    }
    else {
        change.classList.add("day");
        change.classList.remove("night");
        btn.classList.remove("button_night");
    
    }

})
//  const swapTheme=()=>{
//     btn.addEventListener("click",()=>{
//         removeActiveClass();
//         change.classList.add(".night");
//         btn.classList.add(".button_night");

//     })
// //  }

// const removeActiveClass=()=>{
//      change.classList.remove(".day");
//      btn.classList.remove(".button_day");

// }