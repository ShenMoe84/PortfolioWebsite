import React, { useRef, useState } from "react";
import ImageSlider from "../../imagesilder/ImageSlider";
import Form from "../../../components/form/Form";
import styles from '../home/Home.module.css';
import Wichita from '../../../images/WichitaSkyline.jpeg';
import Chicago from '../../../images/ChicagoSkyline.jpeg';
import ProfilePic from '../../../images/ProfilePic.jpeg';
import Input from "../../input/Input";
import {
  isValidName, isValidEmail, isValidSubj, isValidMessage
} from "../../../utils/validation";
import emailjs from '@emailjs/browser';

const Home = () => {
  const images = [Wichita, Chicago];
  const profilePic = ProfilePic;

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
  });
  const [subj, setSubj] = useState({
    value: '',
    error: false,
    errMsg: 'Please enter a subject'
  });
  const [msg, setMsg] = useState({
    value: '',
    error: false,
    errMsg: 'Please enter a message up to 500 characters long'
  });

  const inputHandler = (e) => {
    switch (e.target.name) {
      case 'Name':
        setName({ ...name, value: e.target.value, error: false });
        break;
      case 'Email':
        setEmail({ ...email, value: e.target.value, error: false });
        break;
      case 'Subject':
        setSubj({ ...subj, value: e.target.value, error: false });
        break;
      case 'Message':
        setMsg({ ...msg, value: e.target.value, error: false });
        break;
      default:
        break;
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formError = false;

    if (!isValidName(name.value)) {
      formError = true;
      setName({ ...name, error: true });
    }
    if (!isValidEmail(email.value)) {
      formError = true;
      setEmail({ ...email, error: true });
    }
    if (!isValidSubj(subj.value)) {
      formError = true;
      setSubj({ ...subj, error: true });
    }
    if (!isValidMessage(msg.value)) {
      formError = true;
      setMsg({ ...msg, error: true });
    }

    if (!formError) {
      emailjs.sendForm("service_08ah4tr", "template_76yispp", form.current, "vJwH1FIRe2rxBw7A4").then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message, please try again.", error.text)
        }
      );
    };
  };

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
        <Form title="Contact Form" id="contact-form" ref={form} noValidate onSubmit={handleSubmit}>
          <Input
            onChange={inputHandler}
            type="text" name="Name"
            value="What is your name?"
            error={name.error}
            errMsg={name.errMsg}
            required
          />
          <Input
            onChange={inputHandler}
            type="emaiL"
            name="Email"
            value="me@example.com"
            error={email.error}
            errMsg={email.errMsg}
            required
          />
          <Input
            onChange={inputHandler}
            type="text"
            name="Subject" v
            value="What is this regarding?"
            error={subj.error}
            errMsg={subj.errMsg}
            required
          />
          <p className={styles.textAreaLabel}>Message</p>
          <br />
          <textarea
            onChange={inputHandler}
            className={styles.textArea}
            name="Message"
            placeholder="What do you want me to know?"
            maxLength={500}
            spellCheck={true}
            error={msg.error}
            errMsg={msg.errMsg}
          />
          <input className={styles.submit} type="submit" value="Send"></input>
        </Form>

      </div>
    </div>
  )
}

export default Home;