import React from 'react';
import { AccordionItem } from './process/accordion-item';
import { ImageItem } from './process/image-item';

function Process() {
  return (
    <section className="tc-process-style2">
      <div className="container">
        <h2 className="fsz-45 fw-500 mb-80 text-center">
          Naše&nbsp;
          <span className="sub-font fst-italic color-orange1 fw-400">
            služby
          </span>
        </h2>
        <div className="content">
          <div className="row">
            <div className="col-lg-5">
              <div className="accordion-side wow fadeInUp slow">
                <div className="accordion" id="accordionProcess">
                  <AccordionItem
                    num={1}
                    heading='Projektová činnosť'
                    content='After surveying and obtaining the necessary
                          information, we will create a preliminary design
                          including technical drawings, 3D images of the
                          interior and provide a 3D VR experience to help
                          customers get a visual view of their project.'
                  />
                  <AccordionItem
                    num={2}
                    heading='3D vizualizácie'
                    content='After surveying and obtaining the necessary
                          information, we will create a preliminary design
                          including technical drawings, 3D images of the
                          interior and provide a 3D VR experience to help
                          customers get a visual view of their project.'
                  />
                  <AccordionItem
                    num={3}
                    heading='Návrh interiéru'
                    content='After surveying and obtaining the necessary
                          information, we will create a preliminary design
                          including technical drawings, 3D images of the
                          interior and provide a 3D VR experience to help
                          customers get a visual view of their project.'
                  />
                  <AccordionItem
                    num={4}
                    heading='Stavebné rozpočty'
                    content='After surveying and obtaining the necessary
                          information, we will create a preliminary design
                          including technical drawings, 3D images of the
                          interior and provide a 3D VR experience to help
                          customers get a visual view of their project.'
                  />
                  <AccordionItem
                    num={5}
                    heading='Stavebný dozor'
                    content='After surveying and obtaining the necessary
                          information, we will create a preliminary design
                          including technical drawings, 3D images of the
                          interior and provide a 3D VR experience to help
                          customers get a visual view of their project.'
                  />
                  <AccordionItem
                    num={6}
                    heading='Realizácia stavieb'
                    content='After surveying and obtaining the necessary
                          information, we will create a preliminary design
                          including technical drawings, 3D images of the
                          interior and provide a 3D VR experience to help
                          customers get a visual view of their project.'
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="imgs">
                <ImageItem heading='3D vizualizácie' source='/assets/img/process/proc1.jpg' dataLag='0.2'/>
                <ImageItem heading='Interiéry' source='/assets/img/process/proc2.jpg' dataLag='0.4'/>
                <ImageItem heading='Realizácie' source='/assets/img/process/proc3.jpg' dataLag='0.3'/>
                <ImageItem heading='Projektovanie' source='/assets/img/process/proc4.jpg' dataLag='0.5'/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/img/prc_bg.png"
        alt=""
        className="bg"
        data-speed="1.2"
      />
    </section>
  );
}

export default Process;
