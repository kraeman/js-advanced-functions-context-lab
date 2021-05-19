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
    const arrayOfTime = dateStamp.split("")
    const date = arrayOfTime.slice(0, 10)
    const m = date.join("")
    const thing = arrayOfTime.slice(11, 15)
    const thingy = parseInt(thing.join(""), 10)
    debugger
    // console.log(thingy)
    const timeInObject = {type: "TimeIn", hour: thingy, date: m}
    this.timeInEvents.push(timeInObject)
    return this
}

const createTimeOutEvent = (dateStamp) => {
    debugger
    const arrayOfTime = dateStamp.split("")
    console.log(arrayOfTime)
    const date = arrayOfTime.slice(0, 10)
    const m = date.join("")
    const thing = arrayOfTime.slice(11, 15)
    const thingy = parseInt(thing.join(""), 10)
    console.log(thingy)
    console.log(m)
    const timeOutObject = {type: "TimeOut", hour: thingy, date: m}
    this.timeOutEvents.push(timeOutObject)
    return this
}


const hoursWorkedOnDate = (dateStamp) => {
    const toe = this.timeOutEvents
    const tie = this.timeInEvents
    const o = toe.find(e => e.date == dateStamp)
    const i = tie.find(e => e.date == dateStamp)
    const hw = o.hour - i.hour
    return hw / 100
}
const wagesEarnedOnDate = (date) => {
    const hours = hoursWorkedOnDate(this, date)
    const money = hours * this.payPerHour
    return money
}



const calculatePayroll = (arrayOfEmployees) => {
    let payroll = 0
    arrayOfEmployees.forEach(e => payroll += allWagesFor(e))
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