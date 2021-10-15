console.log("Welcome to the main module")
import { useJournalEntries } from './JournalDataProvider.js'
import { EntryListComponet } from './JournalEntryList.js' 
import { JournalEntryComponent } from './JournalEntry.js'

const allTheJournal = useJournalEntries()

for (const journal of allTheJournal) {
    console.log(journal)
}

// JournalEntryComponent()
// useJournalEntries()
EntryListComponet()