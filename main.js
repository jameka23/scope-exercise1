console.log("hi")
/*
Some software developers were contracted to build some code, but there weren't quite clear yet on how scope works. Your job is to fix their code to stop all the errors from being thrown.

*/

// ==================== Practice 1 ==========================
/*
C is for Cookie
*/
// const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
// let y = 1

// for (let x = 1; x < cookies.length; x++) {
//     const currentCookie = cookies[x]
//     console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
// }

// ==================== Practice 2 ==========================
/*
Conjunction Function
*/
// const conjunction = function (firstWord, secondWord) {
//     const conjoinedWord = `${firstWord} ${secondWord}`
//     console.log(conjoinedWord)
// }

// conjunction("Master", "Card")

// ==================== Practice 3 ==========================
/*
Mod Squad
*/
// document.querySelector(".show-info").innerHTML = HTMLRepresentation
// {
//     const ModSquad = {
//         "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
//         "series": {
//             "start": "1968",
//             "end": "1973"
//         }
//     }

//     let HTMLRepresentation = `<h1>The Mod Squad</h1>`

//     ModSquad.members.forEach(member => {
//         HTMLRepresentation += `<div>${member}</div>`
//         console.log(HTMLRepresentation)
//     })
// }

// ==================== Practice 4 ==========================
/*
Simon Says 
*/
     
const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]
let invalidCounter = 0

for (let k = 0; k < locations.length; k++) {
    const currentLocation = locations[k]
    let invalidLocation = true

    if (currentLocation[0] > 2) {
        invalidLocation = true
    }

    if (invalidLocation) {
        invalidCounter ++
        console.log("This location is invalid")
    }
}

/*
    Since k is used as the loop counter, it will be the
    total number of locations, not the invalid ones. You
    need to fix this somehow.
*/
console.log(`There were ${invalidCounter} invalid locations`)