const justFood = (pocetLidi) => {
    let cena = pocetLidi * 50
    return `Catering od Just Food  je pro ${pocetLidi} za ${cena}Kč`
}

const yourMama = (pocetLidi) => {
    let cena = pocetLidi * 100
    return `Catering od Your Mama je pro ${pocetLidi} za ${cena}Kč`
}
const flavourHeaven = (pocetLidi) => {
    let cena = pocetLidi * 300
    return `Catering od Flavour Heaven  je pro ${pocetLidi} za ${cena}Kč`
}

console.log(justFood(100));
console.log(yourMama(100));
console.log(flavourHeaven(100));

const createEvent = (udalostiEvent, pocetLidi, cateringFunkce) => {
    return `Udalost ${udalostiEvent} s ${cateringFunkce(pocetLidi)}`
}
console.log(createEvent("Inagurace prezidenta", 300, flavourHeaven));