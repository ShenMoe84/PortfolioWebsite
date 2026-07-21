import React, { useEffect, useRef, useState } from "react";
import ImageSlider from "../../imagesilder/ImageSlider";
import Form from "../../../components/form/Form";
import styles from '../home/Home.module.css';
import Wichita from '../../../images/WichitaSkyline.jpeg';
import Chicago from '../../../images/ChicagoSkyline.jpeg';
import ProfilePic from '../../../images/ProfilePic.jpeg';
import Input from "../../input/Input";
import {
  isValidName, isValidEmail, isValidSubj, sendEmail
} from "../../../utils/validation";
import emailjs from '@emailjs/browser';

const Home = () => {
  const images = [Wichita, Chicago];
  const profilePic = ProfilePic;

  const formRef = useRef(null);
  const textareaRef = useRef();

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

  (function () {
    emailjs.init({
      publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
    });
  })();

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

  const handleSubmit = (e) => {
    let formError = false;

    if (!isValidName(name.value)) {
      formError = true;
      setName({ ...name, error: true })
    }
    if (!isValidEmail(email.value)) {
      formError = true;
      setEmail({ ...email, error: true });
    }
    if (!isValidSubj(subj.value)) {
      formError = true;
      setSubj({ ...subj, error: true });
    }

    if (!formError) {
      sendEmail(new FormData(formRef.current));
    };
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    const charCount = document.getElementById('charCount');
    const updateCharCount = () => {
      charCount.textContent = textarea.value.length;
    };
    textarea.addEventListener('input', updateCharCount);
    return () => {
      textarea.removeEventListener('input', updateCharCount);
    };
  }, []);

  return (
    <div className={styles.background}>
      <div>
        <ImageSlider images={images} delay={10000} />
      </div>
      <div className={styles.aboutSectionContainer}>
        <h1 className={styles.aboutSection}>Hello, World!</h1>
        <img className={styles.profilePic} src={profilePic} alt="Sheena Monroe" />
        <p className={styles.aboutParagraph}>Welcome to my website - designed and coded by me! I'm a Wichita, Kansas native and recent Chicagoan. Much like this site, I'm a work in progress on a journey of improving every day.
          I embrace all things colorful, unique, and interesting. With broad categories like these, I'm never truly bored. I am a designer, analyst, software developer, innovative thinker, and maker. In conjuction with those, I find myself wanting to solve problems large and small.
          Here I hope you will find my work interesting, my words thoughtful and my ideas inspirational.
        </p>
         <p className={styles.contactParagraph}>In the spirit of collaboration, I welcome your feedback and ideas. Whether it's a question, suggestion, or just a friendly hello, please reach out to me via the contact form below or through my social media links. I look forward to connecting with you!
        </p>
      </div>
      <div>
        <Form noValidate title="Contact Form" ref={formRef} action={handleSubmit}>
          <Input
            onChange={inputHandler}
            type="text"
            name="Name"
            placeholder="What is your name?"
            error={name.error}
            errMsg={name.errMsg}
            required
          />
          <Input
            onChange={inputHandler}
            type="emaiL"
            name="Email"
            placeholder="hello@example.com"
            error={email.error}
            errMsg={email.errMsg}
            required
          />
          <Input
            onChange={inputHandler}
            type="text"
            name="Subject"
            placeholder="What is this regarding?"
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
            placeholder="What would you like to tell me? Use up to 500 characters."
            maxLength={500}
            spellCheck={true}
            onInvalid={(e) => e.preventDefault()}
            id="Message"
            ref={textareaRef}
            required
          />
          <p className={styles.charCount}>Character count: <span id="charCount">0</span></p>
          <button className={styles.submitButton} type="submit">Send Email</button>
        </Form>
      </div>
    </div>
  )
}

export default Home;