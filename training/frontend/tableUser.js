
export const buildTable = (data) => {
	var table = document.getElementsByClassName('myTable')[0];
	let initialRow = `<tr><td></td></tr>`
	table.innerHTML = initialRow
	table.innerHTML = ` <th> ${"Role"}</th>
						<th> ${"ID"}</th>
						<th> ${"User-Name"}</th>
						<th> ${"Email"}</th>`
	for (var i = 0; i < data.length; i++) {
		var row = `<tr>
      				<td>${data[i].Type}</td>
      				<td>${data[i].Id}</td>
      				<td>${data[i].Username}</td>
      				<td>${data[i].Email}</td>
      				              
              </tr>`
		table.innerHTML += row
	}
};
