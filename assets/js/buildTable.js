function buildTable(data) {
    let week = JSON.parse(data)
    
    //important variables
    let div = document.getElementsByClassName("createTable")[0]
    let table = document.createElement("table")
    let thead = document.createElement("thead")
    let tbody = document.createElement("tbody")
    let firstRow = document.createElement("tr")
    let firstCell = document.createElement("th")
    
    //set atributes
    table.setAttribute("class", "table table-striped")

    //create Headline
    firstCell.appendChild(document.createTextNode("#"))
    firstCell.setAttribute("scope","col")
    firstRow.appendChild(firstCell)
    for (let i = 0; i < week.length; i++) {
        let colText = document.createTextNode(week[i][0])
        let col = document.createElement("th")
        col.setAttribute("scope","col")
        col.appendChild(colText)
        firstRow.appendChild(col)
    }
    thead.appendChild(firstRow)
    table.appendChild(thead)

    //create Table
    for (let j = 1; j < week[0].length; j++) {
        for (let i = 0; i < week.length; i++) {
            
        }
    }
    table.appendChild(tbody)

    div.appendChild(table)
}