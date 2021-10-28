
let journal = [] // notes here *

export const useJournal = () => {
    return journal.slice() //notes here *
}


export const getEntries = () => {
    return fetch('http://localhost:8088/entries') // Fetch from the API
        .then(dirtyEntries => dirtyEntries.json())  // Parse as JSON - Dirty Money
        .then(cleanEntries => {
            journal = cleanEntries
            // What should happen when we finally have the array?
        })
}


export const saveEntries = (entries) => {
    return fetch('http://localhost:8088/entries', { //fetch says go to host to retrieve data
        method: "POST",  
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entries)
    })
    .then(getEntries) // After we add a note, get them all again so our new note appears in our collection
}

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
// export const useJournalEntries = () => {
//     const sortedByDate = journal.sort(
//         (currentEntry, nextEntry) =>
//             Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
//     )
//     return sortedByDate
// }



/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
// const journal = [
//     {
//         id: 1,
//         date: "10/11/2021",
//         concept: "HTML & CSS",
//         entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
//         mood: "Ok"
//     },
//     {
//         id: 2,
//         date: "10/12/2021",
//         concept: "Functions",
//         entry: "Functions hurts my brain",
//         mood: "Determined"
//     },
//     {
//         id: 3,
//         date: "10/14/2021",
//         concept: "Javascript",
//         entry: "I learned how to use import and export in Martin's Aquarium.",
//         mood: "Confused"
//     }
    
    
// ]