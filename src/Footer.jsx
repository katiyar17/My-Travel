import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 

export default function Footer() {
  return (
    <footer className="bg-body-tertiary text-center">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <FontAwesomeIcon icon={['fab', 'facebook-f']} className="btn text-white btn-floating m-1" style={{ backgroundColor: '#3b5998' }} />
          <FontAwesomeIcon icon={['fab', 'twitter']} className="btn text-white btn-floating m-1" style={{ backgroundColor: '#55acee' }} />
          <FontAwesomeIcon icon={['fab', 'google']} className="btn text-white btn-floating m-1" style={{ backgroundColor: '#dd4b39' }} />
          <FontAwesomeIcon icon={['fab', 'instagram']} className="btn text-white btn-floating m-1" style={{ backgroundColor: '#ac2bac' }} />
          <FontAwesomeIcon icon={['fab', 'linkedin-in']} className="btn text-white btn-floating m-1" style={{ backgroundColor: '#0082ca' }} />
          <FontAwesomeIcon icon={['fab', 'github']} className="btn text-white btn-floating m-1" style={{ backgroundColor: '#333333' }} />
        </section>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2020 Copyright:
        <a className="text-body" href="https://mdbootstrap.com/">MDBootstrap.com</a>
      </div>
    </footer>
  );
}
