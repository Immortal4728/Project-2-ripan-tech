
const events = [
  { id: 1, name: "Concert: Rock Band", date: "2025-06-01", location: "Arena", availableTickets: 50, price: 100 },
  { id: 2, name: "Movie: Avengers Endgame", date: "2025-06-05", location: "Cinema Hall", availableTickets: 30, price: 12 },
  { id: 3, name: "Travel: New York Tour", date: "2025-06-10", location: "City Travel Agency", availableTickets: 20, price: 300 }
];

const eventContainer = document.getElementById("events-list");

function loadEvents() {
  eventContainer.innerHTML = "";
  events.forEach(event => {
    const eventCard = document.createElement("div");
    eventCard.classList.add("col-md-4");

    eventCard.innerHTML = `
      <div class="event-card">
        <img src="assets/images/event-thumbnail.jpg" alt="Event Thumbnail" class="event-thumbnail" />
        <h5>${event.name}</h5>
        <p><strong>Date:</strong> ${event.date}</p>
        <p><strong>Location:</strong> ${event.location}</p>
        <p><strong>Available Tickets:</strong> ${event.availableTickets}</p>
        <p><strong>Price:</strong> $${event.price}</p>
        <button class="btn btn-primary" onclick="openBookingModal(${event.id})">Book Tickets</button>
      </div>
    `;
    eventContainer.appendChild(eventCard);
  });
}

function openBookingModal(eventId) {
  const event = events.find(e => e.id === eventId);
  document.getElementById("event-name").innerText = `Book tickets for: ${event.name}`;
  document.getElementById("ticket-count").value = 1;
  $('#bookingModal').modal('show');
}

function bookTickets() {
  const eventName = document.getElementById("event-name").innerText.split(": ")[1];
  const ticketCount = parseInt(document.getElementById("ticket-count").value);

  const event = events.find(e => e.name === eventName);
  if (ticketCount <= event.availableTickets) {
    event.availableTickets -= ticketCount;
    alert(`You have successfully booked ${ticketCount} ticket(s) for ${eventName}.`);
    $('#bookingModal').modal('hide');
    loadEvents();  // Refresh the events list
  } else {
    alert("Sorry, not enough tickets available.");
  }
}

loadEvents();
