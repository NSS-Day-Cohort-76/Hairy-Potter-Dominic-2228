import { usePottery } from "./PotteryCatalog.js"
//import and use the arr from potteryCatalog so i can iterate over the arr that contains the objects that are not cracked
export const potteryList = (potteryInUse) => {
  let potteryHTML = ''

  for (const list of potteryInUse) {
    potteryHTML += `
    <section class="pottery" id="pottery--1">
  <h2 class="pottery__shape">${list.shape}</h2>
  <div class="pottery__properties">
    ${list.shape} weighs ${list.weight} grams and is ${list.height} cm in height
  </div>
  <div class="pottery__price">Price is $${list.price}</div>
</section>
    `
  }
  return potteryHTML
}