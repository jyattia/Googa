var showingSecondMenu = false

function showSecondMenu() {
    if (!showingSecondMenu) {
        document.getElementById('secondMenu').style.display = "block"
    } else {
        document.getElementById('secondMenu').style.display = "none"
    }
    showingSecondMenu = !showingSecondMenu
}

function expandHomeOneItem(idNum, heightIncrease) {
    elementName = "homeOneItem" + idNum
    itemHeight = document.getElementById(elementName).style.height
    console.log(itemHeight)
    if (itemHeight === "70px" || itemHeight === "") {
        inc = 70 + heightIncrease + "px"
        document.getElementById(elementName).style.height = inc
    } else {
        document.getElementById(elementName).style.height = "70px"
    }
}