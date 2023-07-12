import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Cs = () => {
  const [turfs, setTurfs] = useState([]);
  const [selectedTurf, setSelectedTurf] = useState("");
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [bookingId, setBookingId] = useState("");

  useEffect(() => {
    fetchTurfs();
  }, []);

  const fetchTurfs = () => {
    axios
      .get("http://localhost:5000/api/turfs") // Update URL if necessary
      .then((response) => {
        setTurfs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleTurfSelection = (turfId) => {
    setSelectedTurf(turfId);
    setSelectedSlots("");
  };

  const handleSlotSelection = (slotId) => {
    if (selectedSlots.includes(slotId)) {
      setSelectedSlots(selectedSlots.filter((id) => id !== slotId));
    } else {
      setSelectedSlots([...selectedSlots, slotId]);
    }
  };

  const handleBooking = () => {
    const storedAccessToken = localStorage.getItem("accessToken");
    const bookingData = {
      turfId: selectedTurf,
      slots: selectedSlots,
    };

    axios
      .post("http://localhost:5000/api/book", bookingData) // Update URL if necessary
      .then((response) => {
        console.log(response.data.message);
        setBookingId(response.data.bookingId);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Select Turf</h2>
      <ul>
        {turfs.map((turf) => (
          <li key={turf._id}>
            {turf.name} - {turf.region}
            <button onClick={() => handleTurfSelection(turf._id)}>
              Select
            </button>
          </li>
        ))}
      </ul>

      {selectedTurf && (
        <div>
          <h2>Select Slots</h2>
          <ul>
            {turfs
              .find((turf) => turf._id === selectedTurf)
              .slots.map(
                (slot) =>
                  !slot.booked && (
                    <li
                      key={slot.slotId}
                      className={`slot ${
                        selectedSlots.includes(slot.slotId)
                          ? "cursor-pointer text-blue-600"
                          : "cursor-pointer text-green-600"
                      }`}
                      onClick={() => handleSlotSelection(slot.slotId)}
                    >
                      {slot.time}
                    </li>
                  )
              )}
          </ul>

          <button onClick={handleBooking} disabled={selectedSlots.length === 0}>
            Book Turf
          </button>

          {bookingId && <p>Booking ID: {bookingId}</p>}
        </div>
      )}
    </div>
  );
};

export default Cs;
