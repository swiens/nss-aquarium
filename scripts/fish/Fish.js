export const Fish = (fishObj) => {
    return `<div class="fish">
    <div>Name: ${fishObj.name}</div>
    <img class="fish_img" src="${fishObj.image}" alt="">
    <div>Scientific Name:${fishObj.scientific}</div>
    <div>Size:${fishObj.size}</div>
    <div>Harvest Location:${fishObj.location}</div>
    <div>Diet: ${fishObj.food}</div>
<div>     
`
}