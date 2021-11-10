
export const sortByDateValue = (dataArray, key) => {
    const res = {}
    dataArray.forEach(item => {
        res[item.date] = item[key]
    })
    return res
}

export const fillMissingDay = (data, key, from, to) => {
    const currentData = sortByDateValue(data, key)
    const dateDiapason = getDatesBetween(from, to)
    const res = {}

    dateDiapason.forEach(date => {
        if(currentData[date]){
            res[date] = currentData[date]
        }else{
            res[date] = 0
        }
    })
    return res
}

export const getDatesBetween = (from, to) => {
    from = new Date(from)
    to = new Date(to)
    const dates = []
    let currentDate = from
    const addDays = function (days) {
        const date = new Date(this.valueOf())
        date.setDate(date.getDate() + days)
        return date
    }
    while (currentDate <= to) {
        dates.push(currentDate.toISOString().split('T')[0])
        currentDate = addDays.call(currentDate, 1)
    }
    return dates
}