 document.getElementById('rideForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const rideType = document.getElementById('rideType').value;
    const pickup = document.getElementById('pickup').value;
    const destination = document.getElementById('destination').value;

    // Create a list item to display the ride information
    const rideInfo = `
        <li>
            <strong>Name:</strong> ${name}<br>
            <strong>Phone:</strong> ${phone}<br>
            <strong>Ride:</strong> ${rideType}<br>
            <strong>Pickup:</strong> ${pickup}<br>
            <strong>Destination:</strong> ${destination}
        </li>
    `;
    
    document.getElementById('bookedRides').insertAdjacentHTML('beforeend', rideInfo);

    // Clear the form after submission
    document.getElementById('rideForm').reset();
});