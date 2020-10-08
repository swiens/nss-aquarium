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
    console.log(fish)
    fishHTMLRepresentations += Fish(fish)
}

contentElement.innerHTML += `
<section class='fish_list_class'>
                        <h3 class='center_class'>Fish List 1</h3>
                        <div class="fish">
                        ${fishHTMLRepresentations}
                        </div>
</section>
`
}