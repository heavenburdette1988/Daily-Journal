import { EntryEditForm } from "./JournalEditForm.js"

/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent  = (journal) => {
    return `
        <section class="journalEntry">
        
                <div class="journal__id">${journal.id}</div>
                <div class="journal__date">${journal.date}</div>
                <div class="journal__concept">${journal.concept}</div>
                <div class="journal__entry">${journal.entry}</div>
                <div class="journal__mood">${journal.mood}</div>
                <button id="deleteNote--${journal.id}">Delete</button>
                <button id="edit--${journal.id}">Edit</button>
        </section>
    `
}


const editEventHub = document.querySelector("body")
editEventHub.addEventListener("click", (eventObject) => {
//   console.log(eventObject.target.id.split("--"))
  if(eventObject.target.id.startsWith("edit")) {

    console.log("you clicked")
    const entryId = +eventObject.target.id.split("--")[1]//I do not understand the split--
    EntryEditForm(entryId);
    }
})


