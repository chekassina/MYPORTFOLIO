import React from 'react'
import './services.css'
import ListServices from './listServices'


export const Services = () => {
  return (
    <section id="services">
      <h5>What i offer</h5>
      <p>1. Custom software development: Developing software solutions tailored to meet the specific needs of clients
 Web application development: Developing web-based applications that can be accessed from anywhere with an internet connection.
 Mobile application development: Developing mobile apps for Android, iOS, or other platforms.
Software testing: Conducting thorough testing of software to ensure high quality and functionality.
 Software maintenance and support: Providing ongoing maintenance and support for software to ensure it remains up-to-date and functional.
 Software consulting: Providing expert advice and guidance on software development projects.


      </p>
      <div className="container services__container">
        
        <ListServices />
      </div>
    </section>
  );
}
export default Services;