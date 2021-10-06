var tbl = document.getElementsByTagName("table")[0]
    var week = JSON.parse(data)

    for (let i = 0; i < week.length; i++) {
        var day = week[i]
        var col = document.createElement("td")
        for (let j = 0; j < day.length; j++) {
            var lesson = day[j]
            var cell = document.createElement("tr");
            
            if (lesson.length == 1) {
                if (lesson == "empty") {
                    var cellText = document.createTextNode("-");
                    cell.setAttribute("style","color:white")
                }else{
                    var cellText = document.createTextNode(lesson);
                }
            }else if (lesson.length == 2) {
                var cellText = document.createTextNode(lesson);
            }
            cell.appendChild(cellText);
            col.appendChild(cell);
            col.setAttribute("style","width: 10%;")
        }
        tbl.appendChild(col);
        tbl.setAttribute("style","width: 50%;")
    }