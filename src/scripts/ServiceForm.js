import { sendRequest } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const userParentName = document.querySelector("input[name='partyParentName']").value
        const userChildName = document.querySelector("input[name='partyChildName']").value
        const userNumberOfChildren = document.querySelector("input[name='partyNumberOfChildren']").value
        const userAddress = document.querySelector("input[name='partyAddress']").value
        const userDate = document.querySelector("input[name='partyDate']").value
        const userHours = document.querySelector("input[name='partyHours']").value


        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName: userParentName,
            childName: userChildName,
            numberOfChildren: parseInt(userNumberOfChildren),
            address: userAddress,
            reservationDate: userDate,
            reservationHours: parseInt(userHours)
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})

export const ServiceForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="partyParentName">Parent's Names</label>
            <input type="text" name="partyParentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyChildName">Address</label>
            <input type="text" name="partyChildName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyNumberOfChildren">Budget</label>
            <input type="number" name="partyNumberOfChildren" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyAddress">Address</label>
            <input type="text" name="partyAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyDate">Date needed</label>
            <input type="date" name="partyDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyNumberOfChildren">Budget</label>
            <input type="number" name="partyHours" class="input" />
        </div>
        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html