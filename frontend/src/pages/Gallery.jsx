import React from "react";
import { Container, Row, Col } from "reactstrap";
import Subtitle from "../shared/Subtitle";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import "../styles/gallery.css";

const Gallery = () => {
  return (
    <section className="gallery-page">
      <Container>
        <Row>
          <Col lg="12" className="mb-4">
            <Subtitle subtitle="Gallery" />
            <h2>Explore Our Tour Gallery</h2>
          </Col>
          <Col lg="12">
            <MasonryImagesGallery />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Gallery;
