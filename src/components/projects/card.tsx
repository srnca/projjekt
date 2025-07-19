'use client';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';

type CardProps = {
    item: CardItem;
}

type CardItem = {
    title: string;
    type: string;
    cover: string;
    year: string;
    description: string;
    gallery: readonly ReactImageGalleryItem[];
}

export const Card: React.FC<CardProps> = ({item}) => {
    const [modalShow, setModalShow] = useState<boolean>(false);

    return (
        <div className="project-card">
            <div className="img" onClick={() => setModalShow(true)}>
                <img src={item.cover} alt="" className="img-cover" />
                <div className="year">
                    <span className="txt"> {item.year} </span>
                    <img src="/assets/img/project_shape.png" alt="" className="bg" />
                </div>
                <div className="arrow">
                    <i className="fal fa-long-arrow-right ico-45"></i>
                </div>
            </div>
            <div className="info">
                <h3 className="title">
                    <span> {item.title} </span>
                </h3>
            </div>
            <Modal
                show={modalShow}
                size="lg"
                onHide={() => setModalShow(false)}
                
                scrollable
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {item.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p autoFocus>{item.description}</p>
                    <ImageGallery
                        items={item.gallery} 
                        showPlayButton={false}
                        showBullets
                        showIndex
                        showThumbnails={false}
                    />
                </Modal.Body>
            </Modal>
        </div> 
    );
}