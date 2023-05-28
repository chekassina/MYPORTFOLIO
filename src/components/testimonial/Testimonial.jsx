import React from "react";
import "./testimonials.css";
import IMG from "../../assets/mypic.jpg";
import AV1 from "../../assets/df.jpg";
import AV2 from "../../assets/bv.jpg";
import AV3 from "../../assets/bg.jpg";
import AV4 from "../../assets/gf.jpg";
import AV5 from "../../assets/n.jpg";

// import Swiper core and required modules
import { Pagination, Navigation, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


export const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      testimonial:
        "I recently had the pleasure of working with a software engineer on a project, and I must say, it was an amazing experience. From the very beginning, the engineer was professional, knowledgeable, and attentive to my needs. They listened carefully to my requirements, asked the right questions, and provided valuable insights and suggestions to improve the project.",
      avatar: IMG,
      Cname: "Client 1",
    },
    {
      id: 2,
      testimonial:
        "Throughout the project, the engineer kept me informed of their progress, and they were always responsive to my questions and concerns. They demonstrated a deep understanding of the technology and were able to troubleshoot any issues that arose quickly and efficiently..",
      avatar: AV1,
      Cname: "Client 2",
    },
    {
      id: 3,
      testimonial:
        "What impressed me the most was the engineer's ability to deliver a high-quality software solution that met all of my requirements and exceeded my expectations. The software was not only functional but also aesthetically pleasing and easy to use.",
      avatar: AV2,
      Cname: "Client 3",
    },
    {
      id: 4,
      testimonial:
        "Overall, working with this software engineer was a pleasure. They were professional, knowledgeable, and dedicated to delivering a successful project. I would highly recommend them to anyone looking for a talented and reliable software engineer.",
      avatar: AV3,
      Cname: "Client 4",
    },
    {
      id: 5,
      testimonial:
        "communication, responsiveness, and ability to deliver high-quality software solutions that meet the client's needs and expectations. The testimony would serve as an endorsement of the engineer's abilities and a recommendation for others who may be in need of their services.",
      avatar: AV5,
      Cname: "Client 5",
    },
    {
      id: 6,
      testimonial:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus est, consequatur illum ullam numquam voluptate necessitatibus sequi quidem obcaecati! Veritatis repellendus provident neque. Porro, id illum iure soluta vel alias, maiores tempora doloremque vitae neque maxime at, facilis ipsum molestiae dicta quasi harum optio atque deserunt quis amet consectetur perspiciatis.",
      avatar: AV4,
      Cname: "Client 6",
    },
  ];
  return (
    <section id="testimonial">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination, Navigation, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {testimonials.map((testi) => {
          return (
            <SwiperSlide key={testi.id} className="testimonial">
              <div className="client__avatar">
                <img src={testi.avatar} alt="client avatar" />
              </div>
              <h5 className="client__name"> {testi.Cname} </h5>
              <small className="client__review"> {testi.testimonial} </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
export default Testimonial;
