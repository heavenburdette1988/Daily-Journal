import { EntryListComponet } from "./JournalEntryList.js" 
import { saveEntries } from"./JournalDataProvider.js"


//This form prints new entries and stores them to server

const contentTarget = document.querySelector("#container")


// Handle browser-generated click event in component
document.querySelector("body").addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEntries") {
            //^^^object representation of a note
        // let entryText = document.querySelector("#noteText").value

        // console.dir(entryText);

         const newEntry = {

            // noteText: entryText
            // Key/value pairs here
          
            concept: document.querySelector("#concept").value,
            date: document.querySelector("#journalDate").value,
            entry: document.querySelector("#entry").value,
            mood: document.querySelector("#mood").value
            
            // suspectID: document.querySelector("#suspectId").value,
           
        }
            console.log(newEntry)
            document.querySelector("#concept").value = ""
            document.querySelector("#journalDate").value = ""
            document.querySelector("#entry").value = ""
            document.querySelector("#mood").value = ""
           
            // document.querySelector("#suspectId").value = ""
        // }
        // Make a new object representation of a note
       
        // const 
        // Change API state and application state
        saveEntries(newEntry)
        .then(EntryListComponet) // Refresh your list of notes once you've saved your new one
    }
})

export const JournalForm = () => {
    contentTarget.innerHTML = `<h2>Daily Journal</h2>
    <form action="" class="form">
        <fieldset>
            <label for="journalDate">Date of Entry</label>
            <input type="date" name="journalDate" id="journalDate">
        </fieldset>
    </form>
    <form>
        <fieldset>
            <label>Concepts Covered</label>
            <input type="text" name="conceptCovered" id="concept">
        </fieldset>
    </form>
    <form>
        <fieldset>
            <label>Journal Entry</label>
            <textarea type="text" name="journalEntry" id="entry"></textarea>
            </fieldset>
        </fieldset>
    </form>
    <form>
        <fieldset>
            <label>Mood of the day</label>
            <select class="form-select" multiple aria-label="multiple select example" id="mood">
                <option selected>Open this select menu</option>
                <option value="sad">Sad</option>
                <option value="tired">Tired</option>
                <option value="happy">Happy</option>
                <option value="mad">Mad</option>
                <option value="broken">broken</option>
                <option value="confident">Confident</option>
                <option value="hopeful">Hopeful</option>
                <option value="proud">Proud</option>
            </select>
        </fieldset>
        <button type="submit" id="saveEntries">Record Journal Entry</button>
    </form>
    <section>
    `
}  


