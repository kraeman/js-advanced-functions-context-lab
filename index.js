/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 const createEmployeeRecord = (array) => {
    const person = {firstName: array[0], familyName: array[1], title: array[2], payPerHour: array[3], timeInEvents: [], timeOutEvents: []}
    return person
}

const createEmployeeRecords = (arrayOfArrays) => {
    const arrayOfObjects = []
    arrayOfArrays.forEach(array => arrayOfObjects.push(createEmployeeRecord(array)))
    return arrayOfObjects
}

const createTimeInEvent = function(dateStamp) {
    const arrayOfTime = dateStamp.split(" ")
    console.log('arrayOfTime', arrayOfTime)
    const date = arrayOfTime[0]
    const thing = arrayOfTime[1]
    const thingy = parseInt(thing, 10)
    // debugger
    // console.log(thingy)
    const timeInObject = {type: "TimeIn", hour: thingy, date: date}
    this.timeInEvents.push(timeInObject)
    return this
}

const createTimeOutEvent = function(dateStamp) {
    debugger
    const arrayOfTime = dateStamp.split(" ")
    const date = arrayOfTime[0]
    const thing = arrayOfTime[1]
    const thingy = parseInt(thing, 10)
   
    const timeOutObject = {type: "TimeOut", hour: thingy, date: date}
    this.timeOutEvents.push(timeOutObject)
    return this
}


const hoursWorkedOnDate = function(dateStamp) {
    const toe = this.timeOutEvents
    const tie = this.timeInEvents
    const o = toe.find(e => e.date == dateStamp)
    const i = tie.find(e => e.date == dateStamp)
    // console.(tie[0].date)
    const hw = o.hour - i.hour
    return hw / 100
}
const wagesEarnedOnDate = function(date) {
    const hours = hoursWorkedOnDate.call(this, date)
    const money = hours * this.payPerHour
    return money
}



const calculatePayroll = (arrayOfEmployees) => {
    console.log(arrayOfEmployees)
    let payroll = 0
    arrayOfEmployees.forEach(e => payroll += allWagesFor.call(e))
    return payroll
}

const findEmployeeByFirstName = (srcArray, firstName) => {
    const match = srcArray.find(employee => employee.firstName == firstName)
    return match
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}