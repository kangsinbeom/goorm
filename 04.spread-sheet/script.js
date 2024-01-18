const spreadSheetContainer = document.querySelector("#spreadsheet-container");
const exportBtn = document.querySelector("#export-btn");
const ROWS = 10;
const COLS = 10;
const spreadSheet = [];
const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
class Cell {
  constructor(
    isHeader,
    disabled,
    data,
    row,
    column,
    rowName,
    columnName,
    active = false
  ) {
    this.isHeader = isHeader;
    this.disabled = disabled;
    this.data = data;
    this.row = row;
    this.column = column;
    this.active = active;
    this.rowName = rowName;
    this.columnName = columnName;
  }
}

const handleOnChange = (data, cell) => {
  cell.data = data;
};

const getElFromRowCol = (row, col) => {
  return document.querySelector("#cell_" + row + col);
};

const clearHeaderActiveState = () => {
  const headers = document.querySelectorAll(".header");
  headers.forEach((header) => {
    header.classList.remove("active");
  });
};
const handleCellClick = (cell) => {
  clearHeaderActiveState();
  const rowHeader = spreadSheet[0][cell.row];
  const columnHeader = spreadSheet[cell.column][0];
  const columnHeaderEl = getElFromRowCol(columnHeader.row, columnHeader.column);
  const rowHeaderEl = getElFromRowCol(rowHeader.row, rowHeader.column);
  columnHeaderEl.classList.add("active");
  rowHeaderEl.classList.add("active");
  document.querySelector("#cell-status").innerHTML =
    cell.columnName + cell.rowName;
};

const creaetCellEl = (cell) => {
  const cellEl = document.createElement("input");
  cellEl.className = "cell";
  cellEl.id = `cell_${cell.row}${cell.column}`;
  cellEl.value = cell.data;
  cellEl.disabled = cell.disabled;
  if (cell.isHeader) {
    cellEl.classList.add("header");
  }

  cellEl.onclick = () => handleCellClick(cell);
  cellEl.onchange = (e) => handleOnChange(e.target.value, cell);
  return cellEl;
};

const drawSheet = () => {
  for (let i = 0; i < spreadSheet.length; i++) {
    const rowContainerEl = document.createElement("div");
    rowContainerEl.className = "cell-row";
    for (let j = 0; j < spreadSheet[i].length; j++) {
      const cell = spreadSheet[i][j];
      rowContainerEl.append(creaetCellEl(cell));
    }
    spreadSheetContainer.append(rowContainerEl);
  }
};

const initalSpreadSheet = () => {
  for (let i = 0; i < ROWS; i++) {
    let spreadSheetRow = [];
    for (let j = 0; j < COLS; j++) {
      let cellData = "";
      let isHeader = false;
      let disabled = false;
      if (j === 0) {
        cellData = i;
        isHeader = true;
        disabled = true;
      }
      if (i === 0) {
        cellData = alphabet[j - 1];
        isHeader = true;
        disabled = true;
      }
      if (cellData <= 0) {
        cellData = "";
      }
      if (!cellData) {
        cellData = "";
      }
      const rowName = i;
      const columnName = alphabet[j - 1];
      const cell = new Cell(
        isHeader,
        disabled,
        cellData,
        j,
        i,
        rowName,
        columnName,
        false
      );
      spreadSheetRow.push(cell);
    }
    spreadSheet.push(spreadSheetRow);
  }
  drawSheet();
};
initalSpreadSheet();
console.log(spreadSheet);
exportBtn.onclick = (e) => {
  let csv = "";
  for (let i = 0; i < spreadSheet.length; i++) {
    if (i === 0) continue;
    csv +=
      spreadSheet[i]
        .filter((item) => !item.isHeader)
        .map((item) => item.data)
        .join(",") + "\r\n";
  }
  const csvObj = new Blob([csv]);
  const csvUrl = URL.createObjectURL(csvObj);

  const a = document.createElement("a");
  a.href = csvUrl;
  a.download = "spreadsheet name.csv";
  a.click();
};
