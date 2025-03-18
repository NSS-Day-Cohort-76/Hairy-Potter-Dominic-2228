export const ObjToBeSold = []

export const toSellOrNotToSell = (potteryObj) => {
  if(potteryObj.weight >= 6){
    potteryObj.price = 40
  }
  else if(potteryObj.weight < 6) {
    potteryObj.price = 20
  }


  if(potteryObj.cracked === true){
    return "Not avalable for sell"
  }
  else {
    ObjToBeSold.push(potteryObj)
  }


  return potteryObj
}

export const usePottery = () => {
    return structuredClone(ObjToBeSold)
}