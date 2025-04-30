let events = [
  { id: 1, name: "Concert: Rock Band", date: "2025-06-01", location: "Arena", availableTickets: 50, price: 100 },
  { id: 2, name: "Movie: Avengers Endgame", date: "2025-06-05", location: "Cinema Hall", availableTickets: 30, price: 12 },
  { id: 3, name: "Travel: New York Tour", date: "2025-06-10", location: "City Travel Agency", availableTickets: 20, price: 300 }
];

function loadAdminEvents() {
  const tableBody = document.getElementById("event-table");
  tableBody.innerHTML = "";
  events.forEach(event => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${event.name
