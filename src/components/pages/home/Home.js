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
    errMsg: 'Enter a name longer than 3 characters'
  });
  const [email, setEmail] = useState({
    value: '',
    error: false,
    errMsg: 'Enter a valid email address'
  });
  const [subj, setSubj] = useState({
    value: '',
    error: false,
    errMsg: 'Enter a subject'
  });
  const [msg, setMsg] = useState({
    value: '',
    error: false,
    errMsg: 'Enter a message up to 500 characters long'
  });

  const inputHandler = (e) => {
    e.preventDefault();

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

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY).then(
        () => {
          console.log('Success:')
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log('Error:', error.text)
          alert("Failed to send message, please try again.", error.text)
        }
      );
  }

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
      console.log("made it!")
      sendEmail();
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
        <p className={styles.aboutParagraph}>Welcome to my website - coded and designed by me! I'm a Wichita, Kansas native and now
          Chicagoan. Much like this site, I'm a work in progress on a journey of improving a little every day.
          I embrace all things colorful, unique, and interesting. Fortunately, many things fall into those categories, so I'm never truly bored.
          Amongst other things, I am a designer, software developer, innovative thinker, and maker. In conjuction with those, I find myself wanting to solve problems large and small.
          Here I hope you will find my work interesting, my words thoughtful and my ideas inspirational.</p>
      </div>
      <div>
        <Form title="Contact Form" ref={form} onSubmit={handleSubmit}>
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
            value="hello@example.com"
            error={email.error}
            errMsg={email.errMsg}
            required
          />
          <Input
            onChange={inputHandler}
            type="text"
            name="Subject"
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
            placeholder="What would you like to tell me?"
            maxLength={500}
            spellCheck={true}
            onInvalid={(e) => e.preventDefault()}
            required
          />
          <input className={styles.submit} type="submit" value="Send" />
        </Form>

      </div>
    </div>
  )
}

export default Home;