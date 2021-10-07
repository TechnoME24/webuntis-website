function buildTable(weekData, tag) {
    let week = JSON.parse(weekData)
    
    //important variables
    let div = document.getElementsByClassName(tag)[0]
    let table = document.createElement("table")
    let thead = document.createElement("thead")
    let tbody = document.createElement("tbody")
    let firstRow = document.createElement("tr")
    let firstCell = document.createElement("th")
    
    //set atributes
    table.setAttribute("class", "table table-striped")

    //create Headline
    firstCell.appendChild(document.createTextNode("#"))
    firstRow.appendChild(firstCell)
    for (let i = 0; i < week.length; i++) {
        let colText = document.createTextNode(week[i][0])
        let col = document.createElement("th")
        col.appendChild(colText)
        firstRow.appendChild(col)
    }
    thead.appendChild(firstRow)
    table.appendChild(thead)

    //create Table
    for (let i = 1; i < week[0].length; i++) {
        let row = document.createElement("tr")
        let header = document.createElement("th")
        header.appendChild(document.createTextNode(i))
        row.appendChild(header)
        for (let j = 0; j < week.length; j++) {
            let data = document.createElement("td")
            let content = week[j][i]

            if (content.length == 1) {
                content = formatContent(content, data)
            } else {
                for (let k = 0; k < content.length; k++) {
                    console.log(content[k])
                    content = content + formatContent(content[k], data)
                }
            }
            data.appendChild(document.createTextNode(content))
            row.appendChild(data)
        }
        tbody.appendChild(row)
    }
    table.appendChild(tbody)

    div.appendChild(table)
}

function formatContent(content, data) {
    if (content == "empty") {
        content = "-"
    }
    return content
}