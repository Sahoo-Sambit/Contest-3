let tableData = [];

const createRowButton = document.getElementById('create-row-button');
createRowButton.addEventListener('click', () => {
  const tbody = document.querySelector('tbody');
  const newRow = document.createElement('tr');
  const id = tbody.children.length + 1;
  newRow.innerHTML = `
    <td>${id}</td>
    <td><input type="text" name="student_name"></td>
    <td><input type="text" name="student_roll"></td>
    <td><input type="text" name="subject"></td>
    <td><input type="text" name="marks"></td>
    <td><input type="text" name="markedBy"></td>
    <td><input type="text" name="Save"></td>
  `;
  tbody.appendChild(newRow);
});

const saveButton = document.getElementById('save-button');
saveButton.addEventListener('click', () => {
  const inputs = document.querySelectorAll('tbody input');
  const newRowData = {};
  for (const input of inputs) {
    const name = input.getAttribute('name');
    const value = input.value.trim();
    if (!value) {
      console.error(`Error: ${name} field cannot be empty`);
      return;
    }
    if (name === 'marks' && isNaN(value)) {
      console.error(`Error: ${name} field must be a number`);
      return;
    }
    if (name === 'markedBy' && !isValidEmail(value)) {
      console.error(`Error: ${name} field must be a valid email address`);
      return;
    }
    newRowData[name] = value;
  }
  newRowData.id = tableData.length + 1;
  tableData.push(newRowData);
  console.log('New row:', newRowData);
  console.log('Table data:', tableData);
});

function isValidEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}
