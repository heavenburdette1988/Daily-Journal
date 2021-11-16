import { useJournal } from "./JournalDataProvider.js";
import { EntryListComponet } from "./JournalEntryList.js";
import { JournalForm } from "./JournalForm.js";
import { updateEntry } from "./JournalDataProvider.js";

const contentTarget = document.querySelector("body")

export const EntryEditForm = (entryId) => {
    // Give this component access to our application's notes state
    const allEntries = useJournal();

    // Find the note that we clicked on by its unique id
    const entryWeWantToEdit = allEntries.find(singleEntry => singleEntry.id === entryId) //when singlenote is equal to the Note ID print hereVVVV
   
    // Print the form
    // We'll use the HTML value attribute to pre-populate our form fields with the note's info
    contentTarget.innerHTML = `
        <h2>Edit Entry</h2>
        <input type="date" id="date" value="${entryWeWantToEdit.date}" />
        <input type="text" value="${entryWeWantToEdit.concept}" id="concept" />
        <input type="text" value="${entryWeWantToEdit.entry}" id="entry"/>
        <input type="text" value="${entryWeWantToEdit.mood}" id="mood"/>
        <button id="saveEntryChanges--${entryId}">Save Changes</button>
    `
}// Form for changes

//edit note event listener that allows you to save new note.
contentTarget.addEventListener("click", (event) => {
    if(event.target.id.startsWith("saveEntryChanges")){ 

        // Make a new object representation of a note
        const editedEntry = {
            id: +event.target.id.split("--")[1], // split on -- and pull index 1
            date: document.querySelector("#date").value, 
            concept: document.querySelector("#concept").value, 
            entry: document.querySelector("#entry").value,
            mood: document.querySelector("#mood").value
        } // these ids come from the form for where we edit the note so it can save it
        
        // Send to json-server and refresh the list
        updateEntry(editedEntry)//this updates the edited note
        .then(EntryListComponet)//This redisplays the updated list 
        
        // .then(JournalForm)//this redisplays the form
//**************************************************** */
//Leav Note here - changes are save but redisplaying form
    }
  
})

