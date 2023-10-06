// Load existing data from local storage

function deleteRow(button) {
    let row = button.parentNode.parentNode;
    let index = row.rowIndex - 1;

    let data = JSON.parse(localStorage.getItem('dataBody')) || [];
    data.splice(index, 1);
    localStorage.setItem('dataBody', JSON.stringify(data));

    loadTableData();
}


let data = JSON.parse(localStorage.getItem('data')) || [];

function renderData() {
    const dataBody = document.getElementById('dataBody');
    dataBody.innerHTML = '';

    data.forEach((entry, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
             <td>${index + 1}</td>
             <td>${entry.website}</td>
             <td>${entry.username}</td>
             <td>${entry.password}</td>
             <td>${entry.handle}</td>
             <td>${"Deleted"}</td>
         `;
        dataBody.appendChild(row);
    });
}

function addData() {
    const website = document.getElementById('website').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const handle = document.getElementById('socialMedia').value;

    if (website && username && password && handle) {
        data.push({ website, username, password, handle });
        localStorage.setItem('data', JSON.stringify(data));
        renderData();
    }
}

renderData();