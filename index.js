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
    plusName = "homeOnePlus" + idNum
    if (itemHeight === "70px" || itemHeight === "") {
        inc = 70 + heightIncrease + "px"
        document.getElementById(elementName).style.height = inc
        document.getElementById(plusName).innerHTML = "-"
    } else {
        document.getElementById(elementName).style.height = "70px"
        document.getElementById(plusName).innerHTML = "+"
    }
}

function home() {
    document.getElementById("bodyDiv").innerHTML = '' + 
    '<div class="homeOneDiv">' +
        '<center><h1 class="bodyHeader">Do you need software services?</h1></center>' +
        '<div class="homeSideBySide">' +
            '<div class="homeOneContent">' +
                '<h2>Here are some potential ways software could help your business!</h2>' +
            '<div class="homeOneItemsContainer">' +
            '<div id="homeOneItem1" class="homeOneItem">' +
                '<div class="homeOneBaseItem">' +
                    '<div class="homeOneSubTitle">Company Website</div>' +
                    '<button onclick="expandHomeOneItem(1, 100)" class="homeOneExpand">+</button>' +
                '</div>' +
                '<div class="homeOneSubContent">' +
                    '<p>Increase your company\'s outreach</p>' +
                    '<p>Help customers understand what your company offers</p>' +
                '</div>' +
            '</div>' +
            '<div id="homeOneItem2" class="homeOneItem">' +
                '<div class="homeOneBaseItem">' +
                    '<div class="homeOneSubTitle">Automate Tasks</div>' +
                    '<button onclick="expandHomeOneItem(2, 100)" class="homeOneExpand">+</button>' +
                '</div>' +
                '<div class="homeOneSubContent">' +
                    '<p>Increase your company\'s productivity by cutting down on tedious tasks</p>' +
                    '<p>Reduce errors that can arise during such tasks</p>' +
                '</div>' +
            '</div>' +
            '<div id="homeOneItem3" class="homeOneItem">' +
                '<div class="homeOneBaseItem">' +
                    '<div class="homeOneSubTitle">Mobile Apps</div>' +
                    '<button onclick="expandHomeOneItem(3, 100)" class="homeOneExpand">+</button>' +
                '</div>' +
                '<div class="homeOneSubContent">' +
                    '<p>As smartphones are pretty much everywhere, it may make sense to have an app for your business</p>' +
                '</div>' +
            '</div>' +
            '<div id="homeOneItem4" class="homeOneItem">' +
                '<div class="homeOneBaseItem">' +
                    '<div class="homeOneSubTitle">Much More</div>' +
                    '<button onclick="expandHomeOneItem(4, 100)" class="homeOneExpand">+</button>' +
                '</div>' +
                '<div class="homeOneSubContent">' +
                    '<p>Contact us today to see if we can help you with your software needs.</p>' +
                '</div>' +
            '</div>' +
            '</div>' +
        '</div>' +
        '</div>' +
    '</div>' +
    '<div class="homeTwoDiv" id="secondHomeDiv">' +
        '<center>' +
            '<h1 class="bodyHeader">Our approach to software</h1>' +
        '</center>' +
        '<div class="homeSideBySide">' +
            '<div class="homeTwoContent">' +
                '<div class="tabbedText">' +
                    '<h3>We are a Lancaster County based software development firm. We specialize in creating and maintaining custom software that meets specific custom requirements.</h3> <br></br>' +
                    '<h3>Since we specialize in creating custom software that varies drastically between customers, we will work closely with you and your team members to ensure that the application being developed is tailored specifically for you and your business.</h3><br></br>' +
                    '<h3>We realize that every business is unique, therefore we do not use any cookie cutter templates for any of our clients. But rather, we start developing applications from scratch in order to meet a specific client\'s requirements in a tailored manner.</h3>' +
                '</div>' +
            '</div>' +
        '</div>' +
    '</div>' +
    '<div class="homeThreeDiv">' +
        '<div class="homeThreeSpacer"></div>' +
        '<center>' +
            '<h1 class="homeThreeTitle">Contact us today to speak with us directly to discuss your software ideas!!!</h1>' +
        '</center>' +
        '<img class="homeThreeBackgroundImg" src="./images/robotcall.png" />' +
    '</div>'
}

function services() {
    document.getElementById("bodyDiv").innerHTML = '<h1>Services</h1>'
}

function aboutUs() {
    document.getElementById("bodyDiv").innerHTML = '<h1>About Us</h1>'
}

function contactUs() {
    document.getElementById("bodyDiv").innerHTML = '<h1>Contact Us</h1>'
}
