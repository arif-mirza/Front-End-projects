//BaseURLS

// const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

// //references

// const dropdowns = document.querySelectorAll(".dropdown select");
// const btn = document.querySelector("form button");
// const formCurr = document.querySelector(".from select");
// const toCurr = document.querySelector(".to select");
// const msg = document.querySelector(".msg");



// // to get all selects in select menu

// for ( let select of dropdowns){
//     for(currCode in countryList){
//         newOption = document.createElement("option");
//         newOption.innerText = currCode;
//         newOption.value = currCode;
//       //  console.log(newOption.value);
      

//       //defult selected

//       if( select.name === "from" && currCode === "USD"){
//         newOption.selected = "selected";
//       }
//       if( select.name === "to" && currCode === "PKR"){
//         newOption.selected = "selected";
//         // console.log(newOption.value);
//       };
//       select.append(newOption);

//     };

//     //update flag
//     select.addEventListener("change" , (evt) => {
//         updateFlag( evt.target);
//     });
// };



// const updateFlag = (element) => {
//     let currCode = element.value;
//     let countryCode = countryList[currCode];
//     let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
//     let img = element.parentElement.querySelector("img");
//     img.src = newSrc;
//     //console.log(img.src);

// }

// //currency converter function
// btn.addEventListener("click", async (evt) => {
//      evt.preventDefault();
//      console.log("hello");
//         let enterAmount = document.querySelector('.amount input');
//         let amtValue = enterAmount.value;
//      if (amtValue === "" || amtValue < 1){
//          amtValue = 1;
//          enterAmount.value = "1";
//         };
    
    
//      const URL = `${BASE_URL}/${formCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    
//      let reponse = await fetch(URL);
//      let data = await reponse.json();
//      let rate = data[toCurr.value.toLowerCase()];
    
//     //     //console.log(rate);
//     let finalAmount = amtValue * rate;
//     msg.innerText = `${amtValue} ${formCurr.value} = ${finalAmount} ${toCurr.value}`;
//  });

 
















// const BASE_URL =  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

//  const dropdowns = document.querySelectorAll(".dropdown select");
// const btn = document.querySelector("form button");

// const fromcurr = document.querySelector(".from select");
// const tocurr = document.querySelector(".to select");
// const msg = document.querySelector(".msg");




// // to get all select menu from countryList
// for(let select of dropdowns){                                 
//     for(currCode in countryList){
//     newOption = document.createElement("option");
//     newOption.innerText = currCode; 
//     newOption.value = currCode;

//     //for defalt selected
//     if(select.name === "from" && currCode === "USD"){
//         newOption.selected = "selected";

//     }else if(select.name === "to" && currCode === "PKR"){
//         newOption.selected = "selected";
//     };
//     select.append(newOption);
// };

// select.addEventListener("change" , (evt) => {
//     updateFlag(evt.target);
// });
// };

// const updateFlag = (element) => {
//   let currCode = element.value;
//   let countryCode = countryList[currCode];
//   let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
//   let img = element.parentElement.querySelector("img");
//   img.src = newSrc;
// }


// btn.addEventListener("click", async (evt) => {
//     evt.preventDefault();
//     let enterAmount = document.querySelector('.amount input');
//     let amtValue = enterAmount.value;
//     if (amtValue === "" || amtValue < 1){
//         amtValue = 1;
//         enterAmount.value = "1";
//     };


//     const URL = `${BASE_URL}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`;

//     let reponse = await fetch(URL);
//     let data = await reponse.json();
//     let rate = data[tocurr.value.toLowerCase()];

//     //console.log(rate);
//     let finalAmount = amtValue * rate;
//    msg.innerText = `${amtValue} ${fromcurr.value} = ${finalAmount} ${tocurr.value}`;
// });






// Base URL for currency API
const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

// References to HTML elements
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const msg = document.querySelector(".msg");

// Function to populate select menus with currency options
const populateSelectMenus = () => {
    for (let select of dropdowns) {
        for (let currCode in countryList) {
            let newOption = document.createElement("option");
            newOption.innerText = currCode;
            newOption.value = currCode;

            // Set default selected options
            if (select.name === "from" && currCode === "USD") {
                newOption.selected = true;
            } else if (select.name === "to" && currCode === "PKR") {
                newOption.selected = true;
            }
            select.append(newOption);
        }

        // Update flag when the selection changes
        select.addEventListener("change", (evt) => {
            updateFlag(evt.target);
        });
    }
};

// Function to update flag images based on currency selection
const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

// Function to handle currency conversion
btn.addEventListener("click", async (evt) => {
    evt.preventDefault();

    // Get the entered amount
    let enterAmount = document.querySelector('.amount input');
    let amtValue = parseFloat(enterAmount.value) || 1; // Default to 1 if no amount entered or invalid input

    const fromCurr = document.querySelector(".from select").value.toLowerCase();
    const toCurr = document.querySelector(".to select").value.toLowerCase();

    // Fetch currency conversion rates
    const URL = `${BASE_URL}/${fromCurr}/${toCurr}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[toCurr];

    // Calculate the converted amount
    let finalAmount = amtValue * rate;
    msg.innerText = `${amtValue} ${fromCurr.toUpperCase()} = ${finalAmount.toFixed(2)} ${toCurr.toUpperCase()}`;
});

// Call the function to populate select menus with currency options
populateSelectMenus();
