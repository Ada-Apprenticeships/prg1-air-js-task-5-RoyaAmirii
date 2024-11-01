const fs = require('fs');

function readCsv(filename, delimiter = ',') {
    try {
        const fileContent = fs.readFileSync(filename, { encoding: 'utf-8' });
        const rows = fileContent.split('\n');
        const data = [];

        for (let i = 1; i < rows.length; i++) {
            const row = rows[i].trim();
            if (row) {
                const columns = row.split(delimiter);
                data.push(columns);
            }
        }

        return data;
    } catch (err) {
        console.error("Error reading file:", err.message);
        return null;
    }
}
// Function to get distance from airports data
function getDistance(airportCode, airportsData) {
    const airport = airportsData.find(row => row[1] === airportCode); // Assuming column 1 has airport codes
    return airport ? parseInt(airport[2]) : null; // Assuming column 2 has distances
}
// Function to get aircraft data
function getAircraftData(aircraftType, aircraftData) {
    return aircraftData.find(row => row[0] === aircraftType); // Assuming the first column has aircraft types
}

    


// Usage example
const airportsData = readCsv('airports.csv');
if (airportsData) {
    airportsData.forEach(row => {
        console.log(row);
    });
}
