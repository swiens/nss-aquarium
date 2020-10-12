/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const fishCollection = [
    {
        name: "Amethyst",
        food: "Mostly zooplankton and crustaceans and fish flesh",
        scientific: "Gamma loreto",
        size: 8,
        location: "range covers the Bahamas, Venezuela, Lesser Antilles, Bermuda, and through the waters surrounding Central America and the northern part of South America",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBWGItFvFw8JuFDnEomcFOgpaPvCtGzAlp8w&usqp=CAU", 
    },
    {
        name: "Kelly",
        food: "Mostly zooplankton and crustaceans and fish flesh",
        scientific: "Gamma loreto",
        size: 8,
        location: "range covers the Bahamas, Venezuela, Lesser Antilles, Bermuda, and through the waters surrounding Central America and the northern part of South America",
        image: "https://images.immediate.co.uk/production/volatile/sites/4/2009/07/GettyImages-931270318-43ab672.jpg?quality=90&resize=940%2C400", 
    },
    {

        name: "Gill",
        food: "Mostly zooplankton and crustaceans and fish flesh",
        scientific: "Gamma loreto",
        size: 8,
        location: "range covers the Bahamas, Venezuela, Lesser Antilles, Bermuda, and through the waters surrounding Central America and the northern part of South America",
        image: "https://images.immediate.co.uk/production/volatile/sites/4/2009/07/GettyImages-931270318-43ab672.jpg?quality=90&resize=940%2C400", 
    }
    

]

export const useFish = () => {
    return fishCollection.slice()
}

export const addFish = (fishObject) => {
    fishCollection.push(fishObject)
}
   