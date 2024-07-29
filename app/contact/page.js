"use client"; // This directive marks the component as a Client Component

import { useState } from 'react';
import styles from '../../styles/Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.message) errors.message = "Message is required";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Contact</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formDiv}>
          <label className={styles.label}>Name:</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={styles.input}
          />
          {errors.name && <p className={styles.error}>{errors.name}</p>}
        </div>
        <div className={styles.formDiv}>
          <label className={styles.label}>Email:</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={styles.input}
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>
        <div className={styles.formDiv}>
          <label className={styles.label}>Message:</label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={styles.textarea}
          />
          {errors.message && <p className={styles.error}>{errors.message}</p>}
        </div>
        <button type="submit" className={styles.button}>Submit</button>
      </form>
    </div>
  );
}
