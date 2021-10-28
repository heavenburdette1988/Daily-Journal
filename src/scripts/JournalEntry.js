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
        </section>
    `
}
