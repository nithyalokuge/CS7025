fetch("assets/js/capitals.json")
    .then(response => response.json())
    .then(data => {
        const table = document.createElement("table");
        const thead = document.createElement("thead");
        const tbody= document.createElement("tbody");

        // Create table header
        const headerRow = document.createElement("tr");
        const countryHeader = document.createElement("th");
        const capitalHeader = document.createElement("th");

        countryHeader.textContent = "Country"; 
        capitalHeader.textContent = "Capital"; 

        headerRow.appendChild(countryHeader); 
        headerRow.appendChild(capitalHeader);
        thead.appendChild(headerRow); 

        // Loop through each object in the JSON array
        data.forEach(item => {
            // Create a new row
            const row = document.createElement("tr"); 
            const countryCell = document.createElement("td"); 
            const capitalCell = document.createElement("td"); 

            countryCell.textContent = item.country; 
            capitalCell.textContent = item.capital; 

            // Add a class to the country cell
            countryCell.classList.add("country-cell");

            // Append cells to the row
            row.appendChild(countryCell);
            row.appendChild(capitalCell);

            // Append the row to the tbody
            tbody.appendChild(row);
        });

        // Append thead and tbody to the table
        table.appendChild(thead);
        table.appendChild(tbody);

        // Append the table to the container
        document.getElementById("table-container").appendChild(table);
    })
    .catch(error => console.error("Error fetching data: ", error));
