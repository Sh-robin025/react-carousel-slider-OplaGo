import React from "react";
// icons
import { BiTime } from "react-icons/bi";
import { AiOutlineYoutube } from "react-icons/ai";
import { RiQuestionAnswerLine } from "react-icons/ri";
import { FaFilePdf } from "react-icons/fa";
// static card image
import Image from "../../assets/banner.png";
// styled components
import { Card } from "../../styles/CarouselStyle";

const Item = ({ course }) => {
  return (
    <Card>
      <img src={Image} alt={course.title} className="img-fluid" />
      <div className="status">
        <BiTime /> {course.status}
      </div>
      <h4 className="p-3">{course.title}</h4>
      <hr className="line" />
      <div className="p-3">
        <h6>
          <AiOutlineYoutube className="text-danger" /> {course.classes}+ Live
          Classes
        </h6>
        <div className="d-flex justify-content-between">
          <h6>
            <RiQuestionAnswerLine className="text-info" /> {course.questions}+
            Questions
          </h6>
          <h6>
            <FaFilePdf className="text-danger" /> {course.notes}+ Notes
          </h6>
        </div>
      </div>
    </Card>
  );
};

export default Item;
