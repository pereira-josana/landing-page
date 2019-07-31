var template = document.querySelector(".footer-container");
var teamData = ["Team", "Lisa","Danielle","Brian","Join us!"];
var learnMoreData = ["Learn More", "Manifesto", "Works", "Stories"];
var meetUsData = ["Meet Us", "Studio", "Community", "Workshops"];
var contactData = ["Contact", "Twitter", "Facebook", "Instagram"];
var footerData = [teamData, learnMoreData, meetUsData, contactData];

function insertRow(columnList) {
    var row = document.createElement("div");
    row.classList.add("row");
    for (var i = 0; i < columnList.length; i++) {
      var column = document.createElement("div");
      column.classList.add("col-xs-3");
      for (var j = 0; j < columnList[i].length; j++) {
        var headerText = document.createElement(0 == j ? "h3" : "h4");
        headerText.textContent = columnList[i][j];
        column.appendChild(headerText);
        row.appendChild(column);
      }
    }
    
    template.appendChild(row);
}

insertRow(footerData);
