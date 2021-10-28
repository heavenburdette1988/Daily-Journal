/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { getEntries, useJournal } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"


// DOM reference to where all entries will be rendered
  const entryLog = document.querySelector("#container")
 
export const EntryListComponet = () => {
    getEntries()
    .then( () => {
      
        // Use the journal entry data from the data provider component
        const journals = useJournal()
    
        let journalHTMLRepresentations = ""
        for (const journal of journals) {
            /*
                Invoke the component that returns an
                HTML representation of a single entry
            */
            journalHTMLRepresentations += JournalEntryComponent(journal)
         }
         entryLog.innerHTML += `
         <article class="JournalList"><h3>Daily Entries</h3>
         ${journalHTMLRepresentations}
     </article>
         `
        }
    )
   
    }

    // document.querySelector("#notes-nav-link").addEventListener("click", () => {
    //     NoteList()
    //   })
    