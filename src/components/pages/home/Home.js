import React, { useRef, useState } from "react";
import ImageSlider from "../../imagesilder/ImageSlider";
import Form from "../../../components/form/Form";
import styles from '../home/Home.module.css';
import Wichita from '../../../images/WichitaSkyline.jpeg';
import Chicago from '../../../images/ChicagoSkyline.jpeg';
import ProfilePic from '../../../images/ProfilePic.jpeg';
import Input from "../../input/Input";
import {
  isValidName, isValidEmail, isValidMessage
} from "../../../utils/validation";
import emailjs from '@emailjs/browser';

const Home = () => {
  const form = useRef();
  const [name, setName] = useState({
    value: '',
    error: false,
    errMsg: 'Please enter a name longer than 3 characters'
  });
  const [email, setEmail] = useState({
    value: '',
    error: false,
    errMsg: 'Please enter a valid email address'
  })
  const [msg, setMsg] = useState({
    value: '',
    error: false,
    errMsg: 'Please enter a message up to 500 characters long'
  })

  emailjs.init({
    publicKey: "vJwH1FIRe2rxBw7A4"
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_08ah4tr", "template_76yispp", form.current, "vJwH1FIRe2rxBw7A4").then(
      () => {
        alert("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        alert("Failed to send message, please try again.", error.text)
      }
    )
  }

  const images = [Wichita, Chicago]
  const profilePic = ProfilePic

  return (
    <div className={styles.background}>
      <div>
        <ImageSlider images={images} delay={10000} />
      </div>
      <div className={styles.aboutSectionContainer}>
        <h1 className={styles.aboutSection}>Hello, World!</h1>
        <img className={styles.profilePic} src={profilePic} alt="Sheena Monroe" />
        <p className={styles.aboutParagraph}>Welcome to my website - coded and designed by me! I'm a Wichita, Kansas native and
          Chicagoan. Much like this site, I'm a work in progress on a journey of improving a little every day.
          I embrace all things colorful, unique, and interesting. Fortunately, many things fall into those categories, so I'm never truly bored.
          Amongst other things, I am a designer, software developer, innovative thinker, and maker. In conjuction with those, I find myself wanting to solve problems large and small.
          Here I hope you will find my work interesting, my words thoughtful and my ideas inspirational.</p>
      </div>
      <div>
        <Form title="Contact Form" id="contact-form" ref={form} onSubmit={sendEmail}>
          <Input type="text" name="Name" value="What is your name?" required />
          <Input type="emaiL" name="Email" value="me@example.com" required />
          <Input type="text" name="Subject" value="What is this regarding?" required />
          <p className={styles.textAreaLabel}>Message</p>
          <br />
          <textarea className={styles.textArea} name="Message" placeholder="What do you want me to know?" maxLength={500} spellCheck={true} required />
          <input className={styles.submit} type="submit" value="Send"></input>
        </Form>

      </div>
    </div>
  )
}

export default Home;