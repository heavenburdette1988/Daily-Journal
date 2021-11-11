console.log("Welcome to the main module")
import { useJournal } from './JournalDataProvider.js'
import { EntryListComponet } from './JournalEntryList.js' 
import { JournalEntryComponent } from './JournalEntry.js'
import { getEntries } from './JournalDataProvider.js'
import { JournalForm } from "./JournalForm.js"
import { EntryEditForm } from './JournalEditForm.js'


JournalForm()

// const allTheJournal = useJournalEntries()

// for (const journal of allTheJournal) {
//     console.log(journal)
// }

// JournalEntryComponent()
// useJournalEntries()
EntryListComponet()
getEntries()
// EntryEditForm