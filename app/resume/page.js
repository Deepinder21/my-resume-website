"use client"; // This directive marks the component as a Client Component

import styles from '../../styles/Resume.module.css';

export default function Resume() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Resume</h1>
      <section className={styles.section}>
        <h2 className={styles.subHeader}>Education</h2>
        <p className={styles.paragraph}>Software Development Diploma, Southern Alberta Institute of Technology (SAIT) 
        Currently enrolled in full time program, aiming to learn the fundamentals of technology while focusing on software development.</p>
        <p className={styles.paragraph}>High School Diploma, Delhi Public School, Punjab, India (2020 – 2022)
        Completed high school education with Science and Mathematics as major, achieved 94% grade mark.</p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.subHeader}>Work Experience</h2>
        <p className={styles.paragraph}>Web App: Created a web application for project using which you can search top 50 songs in any city according to weather and also you can search top 50 songs based on different types of moods.</p>
        <p className={styles.paragraph}>Ace Accountant: Created a Mobile Application in which you directly add picture of your receipt. API used will abstract required information and add it to your monthly budget.</p>
        <p className={styles.paragraph}>Budget Buddy: Created a Mobile Application in which you can create different trips and add your expenses to it.</p>
        <p className={styles.paragraph}>Pet Pal: Created a Mobile App which will have different business owner’s information and you can book appointments for your desired pet needs.</p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.subHeader}>Skills</h2>
        <p className={styles.paragraph}>	Python </p>
        <p className={styles.paragraph}>    C# </p>
        <p className={styles.paragraph}>  HTML, Css</p>
        <p className={styles.paragraph}>  Java</p>
        <p className={styles.paragraph}>  React Native</p>
      </section>
    </div>
  );
}
