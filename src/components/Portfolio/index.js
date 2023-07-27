import React from "react";
import PWA from "../../assets/PWA.png";
import bookwise from "../../assets/bookwise.png";
import password from "../../assets/password.png";
import employee from "../../assets/employee.png";
import weather from "../../assets/weathers.png";
import workday from "../../assets/workday.png";

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Work</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/Saloni0412/Scheduler" target="_blank">
                {" "}
                <img
                  src={workday}
                  className="my-2"
                  style={{ width: 500 }}
                  alt="WorkDayScheduler"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Work Day Scheduler</h4>
              <p>
              A simple calendar application that allows a user to save events for each hour of the day by modifying starter code. 
              This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/Saloni0412/Weather-Forecast" target="_blank">
                {" "}
                <img
                  src={weather}
                  className="my-2"
                  style={{ width: 500, }}
                  alt="WeatherDashboard"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Weather Dashboard</h4>
              <p>
              Stay informed with intuitive weather app. Get real-time weather updates, forecasts, and accurate data at your fingertips. Plan your day with confidence, whether it's rain or shine. Simple, user-friendly, and always reliable - the perfect companion for your daily adventures.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/Saloni0412/BookWise" target="_blank">
                {" "}
                <img
                  src={bookwise}
                  className="my-2"
                  style={{ width: 500 }}
                  alt="Bookwise"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>BookWise</h4>
              <p>
              BookWise is a web application that allows users to Create a book management system that allows users to track and manage their personal library.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/Saloni0412/password-generator" target="_blank">
                {" "}
                <img
                  src={password}
                  className="my-2"
                  style={{ width: 500 }}
                  alt="Password generator"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Password Generator</h4>
              <p>
              This is a webpage to randomly generate a password for an employee to access sensitive data. The randomly generated password meets certain criteria so that it provides greater security. This app will run in the browser and will feature dynamically updated HTML and CSS powered by the JavaScript code
             </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/Saloni0412/ECommerce-BackEnd" target="_blank">
                {" "}
                <img
                  src={employee}
                  className="my-2"
                  style={{ width: 500 }}
                  alt="Ecommerce bankend"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Ecommerce BackEnd</h4>
              <p>
              Internet retail, also known as e-commerce, is the largest sector of the electronics industry, generating an estimated $29 trillion in 2019. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/Saloni0412/PWA-TextEditor" target="_blank">
                {" "}
                <img
                  src={PWA}
                  className="my-2"
                  style={{ width: 500 }}
                  alt="PWA text editor"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>PWA Text Editor</h4>
              <p>
              A progressive web app with our cutting-edge text editor. Write, edit, and collaborate seamlessly across devices, even offline. With advanced features, intuitive design, and cloud syncing capabilities, our text editor ensures productivity and creativity on the go. Embrace a fluid and efficient writing experience with our PWA-powered text editor{" "}
              </p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Portfolio;
