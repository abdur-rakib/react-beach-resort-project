import React, { Component } from "react";
import { RoomContext } from "../context";
import Title from "./Title";
import Room from "./Room";
import Loading from "./Loading";

class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    const { featuredRooms, loading } = this.context;
    // console.log(featuredRooms);
    const renderRooms = featuredRooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });
    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : renderRooms}
        </div>
      </section>
    );
  }
}

export default FeaturedRooms;
