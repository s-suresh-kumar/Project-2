
// Creates Table for new data
let tipTable = [
  { serverName: "Bob", tipAmount: "$3.00" }, // Placeholder Values in serverName & tipAmount
  { serverName: "Bill", tipAmount: "$3.50" },
];

let table = document.querySelector("table");
generateTableHead(table);

let data = Object.keys(tipTable[0]);

function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
}

function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }
  
generateTableHead(table, data);
generateTable(table, tipTable);