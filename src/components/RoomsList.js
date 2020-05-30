import React from "react";
import Room from "../components/Room";

const RoomsList = ({ rooms }) => {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>Umfortunately no rooms found on your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="roomsList">
      <div className="roomList-center">
        {rooms.map((room) => {
          return <Room key={room.id} room={room} />;
        })}
      </div>
    </section>
  );
};

export default RoomsList;
