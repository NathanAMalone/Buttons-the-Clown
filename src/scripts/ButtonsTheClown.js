import { ServiceForm } from "./ServiceForm.js"
import { Reservations } from "./Reservations.js"


export const ClownShow = () => {
    return `
        <h1>Buttons and Lollipop's Clown Show!</h1>
        <section class="serviceForm">
            ${ ServiceForm() }
        </section>
        <section class="listReservations">
        <h2>Reservations</h2>
        
        ${ Reservations() }
        </section>
    `
}
