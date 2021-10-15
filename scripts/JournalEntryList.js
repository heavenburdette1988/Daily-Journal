/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"


// DOM reference to where all entries will be rendered

 
export const EntryListComponet = () => {
    const entryLog = document.querySelector(".mainEntries")
    // Use the journal entry data from the data provider component
    const journals = useJournalEntries()

    let journalHTMLRepresentations = ""
    for (const journal of journals) {
        /*
            Invoke the component that returns an
            HTML representation of a single entry
        */
        journalHTMLRepresentations += JournalEntryComponent(journal)
     }
     entryLog.innerHTML += `
     <article class="JournalList">
     ${journalHTMLRepresentations}
 </article>
     `
    }

    // EntryListComponet()