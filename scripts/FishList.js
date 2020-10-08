/**
 *  Fish which renders individual fish objects as HTML
 */
export const FishList = () => {
const contentElement = document.querySelector(".fish_list_class")

contentElement.innerHTML += `
<section class='fish_list_class'>
                        <h3 class='center_class'>Fish List 1</h3>
                        <div class="fish">
                        placeholder for list of fish
                        </div>
</section>
`
}