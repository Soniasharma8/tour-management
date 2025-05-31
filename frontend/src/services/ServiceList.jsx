import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "Plan your day with us accurate, up- to- the- minute weather information.",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "Discover hidden gems and iconic landmarks with our knowledegeable guide.",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "Make it yours ! Personalize your journey to create unforgottable memories.",
  },
];

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" md="6" sm="12" className="mb-4" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
