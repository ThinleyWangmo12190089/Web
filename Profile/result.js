var selectedRow = null
function onFormSubmit() {
  var formData = readFormData();
  if (selectedRow == null)
    insertNewRecord(formData);
  else
    updateRecord(formData);
  resetForm();
}


function readFormData() {
  var formData = {};
  formData["mcode"] = document.getElementById("mcode").value;
  formData["mname"] = document.getElementById("mname").value;
  formData["ca"] = document.getElementById("ca").value;
  formData["sexam"] = document.getElementById("sexam").value;
  formData["marks"] = document.getElementById("marks").value;
  return formData;
}

function insertNewRecord(data) {
  var table = document.getElementById("result").getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.mcode;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.mname;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.ca;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.sexam;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.marks;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                 <a onClick="onDelete(this)">Delete</a>`;
                   }


function resetForm() {
  document.getElementById("mcode").value = "";
  document.getElementById("mname").value = "";
  document.getElementById("ca").value = "";
  document.getElementById("sexam").value = "";
  document.getElementById("marks").value = "";
  selectedRow = null;
}


function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("mcode").value = selectedRow.cells[0].innerHTML;
  document.getElementById("mname").value = selectedRow.cells[1].innerHTML;
  document.getElementById("ca").value = selectedRow.cells[2].innerHTML;
  document.getElementById("sexam").value = selectedRow.cells[3].innerHTML;
  document.getElementById("marks").value = selectedRow.cells[4].innerHTML;
}

function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.mcode;
  selectedRow.cells[1].innerHTML = formData.mname;
  selectedRow.cells[2].innerHTML = formData.ca;
  selectedRow.cells[3].innerHTML = formData.sexam;
  selectedRow.cells[4].innerHTML = formData.marks;
}

function onDelete(td) {
  if (confirm('Are you sure to delete this record?')) {
    row = td.parentElement.parentElement;
    document.getElementById("result").deleteRow(row.rowIndex);
    resetForm();
  }
}