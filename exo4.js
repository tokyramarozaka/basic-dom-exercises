// identifier les éléments clés du DOM 
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const addButton = document.querySelector("#addButton");
const tableBody = document.querySelector("#to-do-list tbody");

// Lorsque je click, ajouter un nouveau <tr> dans le tbody.
addButton.addEventListener("click", () => {
  tableBody.innerHTML += `
        <tr>
            <td>${title.value}</td>
            <td>${description.value}</td>
            <td>TODO</td>
        </tr>
    `;
  title.value = '';
  description.value = '';
  alert("La tâche a été ajoutée avec succès!");
});
