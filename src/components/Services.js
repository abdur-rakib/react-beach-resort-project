import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaShuttleVan, FaBeer, FaHiking } from "react-icons/fa";
import Service from "./Service";

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt quasi laboriosam consectetur",
      },
      {
        icon: <FaHiking />,
        title: "endless hiking",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt quasi laboriosam consectetur",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt quasi laboriosam consectetur",
      },
      {
        icon: <FaBeer />,
        title: "Strongest beer",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt quasi laboriosam consectetur",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              info={service.info}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default Services;
