###Date

date created = new Date().getDate()
month created (words) = new Date().toLocaledateString("en-US", {month: "long"})
year created = new Date().getFullYear()

const Date = `${date} ${month} ${year}`

