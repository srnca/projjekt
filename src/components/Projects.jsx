'use client';
import React, { useState } from 'react';
import data from '@/data/projects';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavPill } from './projects/nav-pill';
import { Card } from './projects/card';
import "react-image-gallery/styles/css/image-gallery.css";



function Projects() {

  const [filter, setFilter] = useState('');

  const swiperOptions = {
    modules: [Pagination, Navigation, Autoplay],
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    speed: 1000,
    pagination: {
      el: '#swiper-pagination',
      clickable: true,
    },
    navigation: false,
    mousewheel: false,
    keyboard: true,
    autoplay: {
      delay: 7000,
    },
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      700: {
        slidesPerView: 2,
      },

      1000: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <section className="tc-projects-style2">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h2 className="fsz-45 fw-500">
              Naše
              <span className="sub-font fst-italic color-orange1 fw-400">
              &nbsp;projekty
              </span>
            </h2>
          </div>
        </div>
        <div className="tabs-links mt-40">
          <ul className="nav nav-pills" id="pills-tab" role="tablist">
            <NavPill heading='Všetko' filter='' setFilter={setFilter} active />
            <NavPill heading='3D vizualizácie' filter='house' setFilter={setFilter} />
            <NavPill heading='Návrh exteriéru' filter='exterior' setFilter={setFilter} />
          </ul>
        </div>
      </div>
      <div className="tab-content" id="pills-tabContent">
        <div className="projects-slider-content mt-50">
          <div className="projects-slider">
            <Swiper {...swiperOptions}>
              {data
                .filter((item) => filter === '' || item.type === filter)
                .map((item, index) => (
                  <SwiperSlide key={index}>
                    <Card item={item} />
                  </SwiperSlide>
              ))}
            </Swiper>
            <div className="controls">            
            <div className="container">
                <div id="swiper-pagination" className="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
