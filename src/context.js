import React, { Component } from "react";
import items from "./data";
const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
  };
  componentDidMount = () => {
    // console.log("Mounted");
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter((room) => room.featured === true);

    this.setState({
      rooms,
      featuredRooms,
      loading: false,
    });
  };
  formatData = (items) => {
    let tempRooms = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => {
        return image.fields.file.url;
      });
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempRooms;
  };
  getRoom = (slug) => {
    const tempRoms = [...this.state.rooms];
    const room = tempRoms.find((room) => room.slug === slug);
    return room;
  };
  render() {
    // console.log(this.state);
    return (
      <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

export { RoomProvider, RoomContext };
