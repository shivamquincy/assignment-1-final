"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Page.module.css';
import Image from 'next/image';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function SignUpPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const router = useRouter();
  const [contactMode, setContactMode] = useState('email');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);

  const handleContactModeChange = (e) => {
    setContactMode(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleRetypePasswordVisibility = () => {
    setShowRetypePassword(!showRetypePassword);
  };

  const onSignUp = async () => {
    const username = `${firstName.trim()}${lastName.trim()}`; // Concatenate first name and last name
    const userData = {
      username: username,
      email: email,
      password: password,
    };
    try {
      const response = await axios.post("/api/users/signup", userData);
      console.log('Signup Success', response.data);
      router.push("/SignIn");

    } catch (error: any) {
      console.log("Signup Failed", error.message);
    }
  };

  return (
    <div className={styles.containersignup}>
      <div className={styles.img1}>
        <Image src="/signup1.png" alt="Description" width={800} height={800} />
      </div>
      <div className={styles.loginForm}>
        <div className={styles.text}>
          <h2>Let us know <span className={styles.exclamation}>!</span></h2>
          <a href="/SignIn" className={styles.signupLink}>Sign <span className={styles.exclamationlinky}>In</span></a>
        </div>
        <div className={styles.formcontent}>
          <form>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Set Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {showPassword ? (
                <FaEyeSlash
                  onClick={togglePasswordVisibility}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    right: '10px',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer'
                  }}
                />
              ) : (
                <FaEye
                  onClick={togglePasswordVisibility}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    right: '10px',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer'
                  }}
                />
              )}
            </div>
            <div style={{ position: 'relative' }}>
              <input
                type={showRetypePassword ? "text" : "password"}
                placeholder="Retype Password"
                value={retypePassword}
                onChange={(e) => setRetypePassword(e.target.value)}
              />
              {showRetypePassword ? (
                <FaEyeSlash
                  onClick={toggleRetypePasswordVisibility}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    right: '10px',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer'
                  }}
                />
              ) : (
                <FaEye
                  onClick={toggleRetypePasswordVisibility}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    right: '10px',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer'
                  }}
                />
              )}
            </div>
            <select
              value={contactMode}
              onChange={handleContactModeChange}
            >
              <option value="email">Email</option>
              <option value="phone">Phone</option>
            </select>
            {contactMode === 'email' ? (
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            ) : (
              <input
                type="tel"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            )}
            <button type="submit" className={styles.submitButton} onClick={onSignUp}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
