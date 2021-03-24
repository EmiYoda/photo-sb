import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Modal from "react-modal";
// import axios from "axios";

function About() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="about">
      <div className="left">
        <div className="left__icons">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="left__icon icon-email"
            onClick={toggleModal}
          />

          <Modal
            isOpen={isOpen}
            onRequestClose={toggleModal}
            contentLabel={"My dialof"}
            className="about__modal"
            overlayClassName="about__modal-overlay"
            closeTimeoutMS={500}
          >
            <div className="about__modal-content">
              <h1>Send us an Email</h1>
              {/*//TODO use nodemailer in backend to send email from here*/}
              <button onClick={toggleModal}>Close modal</button>
            </div>
          </Modal>

          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faInstagram}
              className="left__icon icon-instagram"
              href="https://instagram.com"
            />
          </a>

          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faTwitter}
              className="left__icon icon-twitter"
            />
          </a>
        </div>
      </div>

      <div className="right">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
        deleniti maiores vero sit velit impedit, ullam distinctio laboriosam,
        iure commodi fugit necessitatibus tenetur eligendi praesentium quisquam
        sint, qui sed similique! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Nobis, culpa quod, reprehenderit earum adipisci
        exercitationem reiciendis consequuntur impedit voluptatibus blanditiis,
        architecto quis repellendus itaque. Maxime doloribus blanditiis non
        quasi ipsam! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Repudiandae deleniti maiores vero sit velit impedit, ullam distinctio
        laboriosam, iure commodi fugit necessitatibus tenetur eligendi
        praesentium quisquam sint, qui sed similique! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Nobis, culpa quod, reprehenderit earum
        adipisci exercitationem reiciendis consequuntur impedit voluptatibus
        blanditiis, architecto quis repellendus itaque. Maxime doloribus
        blanditiis non quasi ipsam! Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Repudiandae deleniti maiores vero sit velit impedit,
        ullam distinctio laboriosam, iure commodi fugit necessitatibus tenetur
        eligendi praesentium quisquam sint, qui sed similique! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Nobis, culpa quod, reprehenderit
        earum adipisci exercitationem reiciendis consequuntur impedit
        voluptatibus blanditiis, architecto quis repellendus itaque. Maxime
        doloribus blanditiis non quasi ipsam! Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Repudiandae deleniti maiores vero sit
      </div>
    </div>
  );
}

export default About;
