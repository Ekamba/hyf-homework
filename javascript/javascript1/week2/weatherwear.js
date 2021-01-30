function getClothesTowear(temperature) {
  
    if (temperature < 18) {
        return "Jacket and jeans";
    }else if (temperature == 18) {
        return "LebronVI and chicago bulls jersey";
    }else if (temperature > 18) {
        return "sandale and short"
    }
    
}
const clothesToWear = getClothesTowear(18);
console.log(clothesToWear);