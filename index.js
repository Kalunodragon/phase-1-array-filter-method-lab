const { objectContaining } = require("expect")

// Code your solution here
function findMatching(drivers, string){
    let result = drivers.filter(item => item.toLowerCase() === string.toLowerCase())
    return result
}
function fuzzyMatch(drivers, string){
    return drivers.filter(item => item.startsWith(string))
}
function matchName(drivers, string){
    let result = drivers.filter(item => item.name === string) 
        return result
}