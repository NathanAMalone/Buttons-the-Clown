import { getReservations, deleteReservation, getClowns, saveCompletion } from "./dataAccess.js";

export const Reservations = () => {
    const reservations = getReservations()
    const dateSortReservation = reservations.sort((a, b) => {
        let stringDateA = a.reservationDate,
            stringDateB = b.reservationDate;
        if (stringDateA < stringDateB) {
            return -1;
        }
        if (stringDateA > stringDateB) {
            return 1;
        }
        return 0;
    })
    const clowns = getClowns()

    let html = "<ul class='partyReservations'>"
        const partyReservations = dateSortReservation.map(
            (reservation) => {
                return `<li class='parties'>
                    Address: ${reservation.address}<br>Date: ${reservation.reservationDate}<br> Child's Name: ${reservation.childName}
                        <select class="clowns" id="clowns">
                            <option value="">Choose</option>
                            ${
                                clowns.map(
                                    clown => {
                                        return `<option value="${reservation.id}--${clown.id}">${clown.name}</option>`
                                    }
                                ).join("")
                            }
                        </select>
                    <button class="request__deny"
                            id="reservation--${reservation.id}">
                        Deny
                    </button>
                    </li>
                    `
            }
        )
    html += partyReservations.join("")

    html += "</ul>"

    return html

}

document.addEventListener("click", click => {
    if (click.target.id.startsWith("reservation--")) {
        const [,reservationId] = click.target.id.split("--")
        deleteReservation(parseInt(reservationId))
    }
})

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            const [reservationId, clownId] = event.target.value.split("--")
            const timestamp = new Date().toLocaleDateString();

            const completion = {
                reservationId: parseInt(reservationId),
                clownId: parseInt(clownId),
                date_created: timestamp

            }

            /*
                Invoke the function that performs the POST request
                to the `completions` resource for your API. Send the
                completion object as a parameter.
             */
            saveCompletion(completion)
        }
    }
)
