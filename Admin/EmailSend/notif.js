const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const minAttendance = Number(document.getElementById("percentage").value);

  fetch("/attendance", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      const resultsContainer = document.getElementById("results");
      resultsContainer.innerHTML = ""; // Clear previous results

      const table = document.createElement("table");
      table.innerHTML = `
      <thead>
        <tr>
          <th>Roll No</th>
          <th>Name</th>
          <th>Attendance</th>
        </tr>
      </thead>
      <tbody>
        ${data
          .map(
            (student) => `
          <tr>
            <td>${student.rollno}</td>
            <td>${student.name}</td>
            <td>${student.attendance}</td>
          </tr>
        `
          )
          .join("")}
      </tbody>
    `;
      resultsContainer.appendChild(table);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      // Display an error message to the user
    });
});
