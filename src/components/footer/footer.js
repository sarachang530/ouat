import React from 'react';
import { SignupForm } from './signupForm'
import './footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h4>Sign up for our Newsletter</h4>
        <SignupForm />
      </div>
      <div className="socials-container">
        <p className="socials">&copy; 2021 &mdash; Sparta Plaesant - <a href="/instagram">Instagram</a> - <a href="/facebook">Facebook</a> - <a href="/twitter">Twitter</a></p>
      </div>
    </footer>
  )
}