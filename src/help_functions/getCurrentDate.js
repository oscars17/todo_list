const pad = (n) => n < 10 ? '0'+n : n

const getCurrentDate = () => {
    let current_date = new Date()
    return current_date.getDate() + '/' + pad((current_date.getMonth()+1))  + "/"
        + pad(current_date.getFullYear()) + " @ "
        + pad(current_date.getHours()) + ":"
        + pad(current_date.getMinutes()) + ":"
        + pad(current_date.getSeconds())
}

export default getCurrentDate