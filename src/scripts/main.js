// Imports go first



// Make 5 pieces of pottery at the wheel
// let mug = makePottery()


// Fire each piece of pottery in the kiln


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list


import { firePottery } from "./Kiln.js";
import { toSellOrNotToSell } from "./PotteryCatalog.js";
import { makePottery } from "./PotteryWheel.js";
import { potteryList } from "./PotterList.js";
import { usePottery } from "./PotteryCatalog.js"


// inititial decleration of pottery objects
const potter = makePottery("circle", 3, 3)
const potter2 = makePottery("mud", 20, 3)
const potter3 = makePottery("round", 5, 3)
const potter4 = makePottery("triangle", 40, 3)
const potter5 = makePottery("hour glass", 4, 3)
const potter6 = makePottery("platter", 60, 3)
// console.log(potter)


// adding the fire and cracked properties
const fire = firePottery(potter, 2230)
const fire2 = firePottery(potter2, 3000)
const fire3 = firePottery(potter3, 1540)
const fire4 = firePottery(potter4, 2240)
const fire5 = firePottery(potter5, 1840)
const fire6 = firePottery(potter6, 1920)
// console.log(fire)
// console.log(fire2)
// console.log(fire3)
// console.log(fire4)
// console.log(fire5)
// console.log(fire6)

//adding price and pushing into array those that will be sold
const sellOrNo = toSellOrNotToSell(fire)
const sellOrNo2 = toSellOrNotToSell(fire2)
const sellOrNo3 = toSellOrNotToSell(fire3)
const sellOrNo4 = toSellOrNotToSell(fire4)
const sellOrNo5 = toSellOrNotToSell(fire5)
const sellOrNo6 = toSellOrNotToSell(fire6)
// console.log(sellOrNo)
// console.log(sellOrNo2)
// console.log(sellOrNo3)
// console.log(sellOrNo4)
// console.log(sellOrNo5)
// console.log(sellOrNo6)

// declare variable to updated the DOM
const potteryInUse = usePottery()

const potterHTMLlist = potteryList(potteryInUse)
const potteryDom = document.getElementById('potterList')
potteryDom.innerHTML = potterHTMLlist

