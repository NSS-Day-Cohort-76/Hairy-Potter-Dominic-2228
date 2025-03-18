import { makePottery } from "./PotteryWheel.js"

export const firePottery = (potteryObj, temp) => {
    potteryObj.fired = true
    if(temp > 2220){
      potteryObj.cracked = true
    }
    else{
      potteryObj.cracked = false
    }
    return potteryObj
}