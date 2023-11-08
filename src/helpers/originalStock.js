function originalStock(inventoryArray) {
    let purchased = 0
    for (let i = 0; i < inventoryArray.length; i++) {
        purchased = purchased + inventoryArray[i].originalStock;
    }
    return purchased
}
export default originalStock;