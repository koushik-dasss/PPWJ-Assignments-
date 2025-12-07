// Create a function bookTickets(eventName, seats, callback)
// that:
// •Accepts an event name and number of seats.
// •Uses a callback function to confirm booking.
// •If seats requested exceed available seats (say 5), print “Booking
// Failed”.
// •Otherwise, execute the callback to confirm booking.
function bookTickets(eventName , seats , callback){
    let availableSeats = 5;
    if(seats>availableSeats){
        console.log("Booking failed.");
    }else{
        callback(eventName,seats);
    }
}
function confirmBooking(event ,seats){
    console.log("Booking confirmed for "+ event + " with "+ seats+ " seats.");
}
bookTickets("Tech Fest",10,confirmBooking);
bookTickets("Music Event",4,confirmBooking);