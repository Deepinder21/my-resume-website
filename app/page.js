"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Image
        src="/Image.jpg"
        alt="Your Name"
        width={150}
        height={150}
        className={styles.profileImage}
      />
      <h1 className={styles.header}>Deepinder Singh Aulakh</h1>
      <p className={styles.description}>
        Hello! My name is Deepinder Singh Aulakh. I am an international student currently enrolled in the Software Development Diploma program at the Southern Alberta Institute of Technology (SAIT) in Calgary, Alberta. Originally from India, I moved to Canada at the age of 18 in 2023 to pursue my passion for technology and software development.
        My journey in software development began with a keen interest in programming and a desire to create innovative solutions. At SAIT, I am honing my skills in various programming languages, software engineering principles, and development tools. My goal is to become a proficient software developer capable of contributing to impactful projects and advancing the field of technology.
        Beyond academics, I enjoy exploring new technologies, participating in coding challenges, and collaborating on team projects. I am also eager to learn about different cultures and perspectives, which has been a rewarding part of my experience as an international student.
        Thank you for visiting my website. Feel free to explore my resume and contact me if you have any questions or opportunities to discuss.
      </p>
      <nav>
        <Link href="/resume" className={styles.navLink}>Resume</Link>
        <Link href="/contact" className={styles.navLink}>Contact</Link>
      </nav>
      <div>
        <a href="https://www.linkedin.com/in/deepinder-singh-aulakh-a7784825b/" className={styles.link}>LinkedIn</a>
        <a href="https://github.com/Deepinder21" className={styles.link}>GitHub</a>
      </div>
    </div>
  );
}
