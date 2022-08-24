import { fetchReservations, fetchClowns } from "./dataAccess.js"
import { ClownShow } from "./ButtonsTheClown.js"


export const mainContainer = document.querySelector("#container")

const render = () => {
    fetchReservations()
    .then(() => fetchClowns())
    .then(
        () => {
            mainContainer.innerHTML = ClownShow()
        }
    )
}

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

render()