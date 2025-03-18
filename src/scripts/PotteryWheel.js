let primaryKey = 1

export const makePottery = (shape, weight, height) => {
    const pottery = {
    shape: shape,
    weight: weight,
    height: height,
    primaryKey: primaryKey,
    }
    primaryKey++
    return pottery
}