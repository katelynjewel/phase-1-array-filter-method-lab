// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

// findMatching- This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.

const findMatching = (array, string) =>
    array.filter((obj) => JSON.stringify(obj)
    .toLowerCase()
    .indexOf(string.toLowerCase()) !== -1
)

// function findMatching(array, string) {
//     let newArray = []
//     array.filter(function (driver) {
//          if (drivers === string) {
//             let element = driver
//         return newArray.push(element)
//          };  
//     });
//     return newArray    
// }                 


// fuzzyMatch - This function takes an array of drivers' names and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.

const fuzzyMatch = (array, string) =>
  array.filter((obj) => JSON.stringify(obj)
    .toLowerCase()
    .indexOf(string.toLowerCase()) !== -1
)

// function fuzzyMatch(drivers, index, letter) {
//     let filteredNames = drivers.filter(function(word) {
//         return word[index] === letter;
//     });
//     return filteredNames
// }

// matchName - This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. The function should return each element whose name property matches the provided string argument.

const matchName = (array, string) => {
    let newArray = []
    array.filter(function(driver) {
        return driver.hometown === string;
    })
    return newArray.push(driver)
}