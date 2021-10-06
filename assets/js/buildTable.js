function buildTable(data, table) {
    var week = JSON.parse(data)
    var body = document.getElementsByTagName("body")[0]

    for (let i = 0; i < week.length; i++) {
        var h2 = document.createElement("h2")
        h2.appendChild(document.createTextNode(week[i]))
        body.appendChild(h2)
    }

}