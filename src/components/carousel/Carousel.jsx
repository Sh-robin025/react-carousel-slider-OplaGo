import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
// icons
import { GoPrimitiveDot } from "react-icons/go";
import { FaLessThan, FaGreaterThan } from "react-icons/fa";
// styled components
import {
  CarouselHead,
  LeftContent,
  RightContent,
  Wrapper,
} from "../../styles/CarouselStyle";
// carousel card data
import courses from "../../data/courses.json";
// child component
import Item from "./Item";

export default class Carousel extends Component {
  state = {
    slideIndex: 0,
  };
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      infinite: false,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 3,
      afterChange: index => this.setState({ slideIndex: index }),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <Wrapper>
        <Container>
          <CarouselHead>
            <LeftContent>
              <a className="liveBtn" href="https://">
                <GoPrimitiveDot /> LIVE
              </a>
              <h3>Upcoming Live Couching</h3>
            </LeftContent>
            <RightContent>
              <button
                onClick={this.previous}
                className="navigation me-4"
                disabled={this.state.slideIndex === 0}
              >
                <FaLessThan />
              </button>
              <button
                onClick={this.next}
                className="navigation"
                disabled={this.state.slideIndex === courses.length - 3}
              >
                <FaGreaterThan />
              </button>
            </RightContent>
          </CarouselHead>
          <Slider ref={c => (this.slider = c)} {...settings}>
            {courses.map(course => (
              <Item course={course} key={course.id} />
            ))}
          </Slider>
        </Container>
      </Wrapper>
    );
  }
}
