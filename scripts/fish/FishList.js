import { Fish } from "./Fish.js"
/**
 *  Fish which renders individual fish objects as HTML
 */
import { useFish } from "./FishDataProvider.js"

export const FishList = () => {
    const contentElement = document.querySelector(".fish_list_class")


    const fishes = useFish()
    

    let fishHTMLRepresentations = ""

    for (const fish of fishes) {
        fishHTMLRepresentations += Fish(fish)
        
    } 

    contentElement.innerHTML += `
                            <h3 class='center_class'>Fish List 1</h3>
                                ${fishHTMLRepresentations}
                
    `
}