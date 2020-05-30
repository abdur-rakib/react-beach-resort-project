import React, { useContext } from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";

import { RoomContext } from "../context";
import Loading from "./Loading";

const RoomsContainer = () => {
  const { loading, sortedRooms, rooms } = useContext(RoomContext);

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </div>
  );
};

export default RoomsContainer;
