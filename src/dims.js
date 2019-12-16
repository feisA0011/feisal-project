function logger(strings) {
    let reserveString = string.split("")
        .reverse()
        .join("");
    console.log(reserveString)
}

module.exports = logger;