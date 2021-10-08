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
    table.setAttribute("class", "table table-striped table-bordered text-center")
    table.setAttribute("style", "text-align: center; width: 80%; margin-left: 10px")
    thead.setAttribute("class","thead-dark")

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
                data.appendChild(document.createTextNode(formatContent(content[0], data)))
                row.appendChild(data)
            } else {
                for (let k = 0; k < content.length; k++) {
                    data.appendChild(document.createTextNode(formatContent(content[k], data)))
                }
                row.appendChild(data)
            }
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
    if (content.slice(0, 2) == "--") {
        content = content.slice(2)
        data.setAttribute("class","table-danger")
    }
    if (content.slice(0, 2) == "++") {
        content = content.slice(2)
        data.setAttribute("class","table-info")
    }
    
    return content
}