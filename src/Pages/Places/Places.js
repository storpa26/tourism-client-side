import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import "./Places.css";
const Places = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    fetch('https://aqueous-lake-21944.herokuapp.com/places')
      .then(res => res.json())
      .then(data => setPlaces(data))
  }, [])
  return (
    <Container className="my-5">
      <Row>
        <Col lg={8} xs={12}>
          <div>
            <h1 className="fs-1 fw-bolder">Explore all corners of <br />
              the world with us.</h1>
          </div>
        </Col>
        <Col lg={4} xs={12}>
          <div>
            Travelling is an amazing way to learn a lot of things in life. A lot of people around the world travel every year to many places. Moreover, it is important to travel to humans. Some travel to learn more while some travel to take a break from their life.
          </div>
        </Col>
      </Row>
      <div>
        <Row className="mx-auto g-4 my-5">
          {
            places.slice(0, 3).map(place => {
              return (
                <Col key={place._id} data-aos="fade-right" className="mx-auto" lg={4} xs={12}>
                  <Card className="p-0 places-card">
                    <Card.Img src={place.imgURL} height="250" width="500" />
                    <Card.Title>
                      <h6 className="quote-design"><FontAwesomeIcon icon={faQuoteLeft} /></h6>
                    </Card.Title>
                    <Card.Title className="fw-bold px-3 py-4">

                      <p>{place.title}</p>
                    </Card.Title>
                    <Card.Text className="px-3">
                      <p>{place.about}</p>
                    </Card.Text>

                  </Card>
                </Col>
              )
            })
          }
        </Row>
      </div>
    </Container>
  );
};

export default Places;