import React from "react";

function CV() {
  return (
    <div className="cv">
      <header>
        <h1>Taajoedeen Daniels</h1>
        <p>Web Developer</p>
      </header>
      <section className="contact">
        <h2>Contact Information</h2>
        <p>Address: 3 Sandown Drive, Ottery, Cape Town, 7800</p>
        <p>Phone: 0826066109</p>
        <p>Email: your.email@example.com</p>
        <p>Date of Birth: 06 June 2003, Cape Town</p>
        <p>Nationality: Coloured</p>
        <p>Driving License: Code 8</p>
      </section>
      <section className="languages">
        <h2>Languages</h2>
        <p>English (★★★★★)</p>
        <p>Afrikaans (★★★★☆)</p>
      </section>
      <section className="skills">
        <h2>Skills</h2>
        <p>Critical thinking and problem solving (★★★★★)</p>
        <p>Creativity (★★★★★)</p>
        <p>Conflict Resolution (★★★★★)</p>
        <p>Leadership Skills (★★★★★)</p>
        <p>Microsoft Excel (★★★★★)</p>
        <p>Microsoft Office Word (★★★★★)</p>
        {/* Add more skills */}
      </section>
      <section className="work-experience">
        <h2>Work Experience</h2>
        <p>Manager at Taj frozen products, Cape Town</p>
        <p>January 2020 – December 2022</p>
        <p>References: Rashied Daniels - 0826066109</p>
        <p>
          As a manager, I significantly improved the company's performance by
          implementing strategic initiatives and fostering a culture of
          innovation and collaboration. I streamlined processes and optimized
          workflow, resulting in increased efficiency and reduced operational
          costs.
        </p>
        {/* Add more details about your work experience */}
      </section>
      <section className="education">
        <h2>Education</h2>
        <p>Oracle Academy, Cape Town GEC</p>
        <p>January 2018 – December 2018</p>
        <p>WCED, Cape Town Matric-Bachelor's Pass</p>
        <p>January 2023 – August 2023</p>
        <p>
          Hyperion Dev - Full stack web development and software engineering
        </p>
        <p>July 2023 - January 2024</p>
      </section>
      <section className="hobbies">
        <h2>Hobbies</h2>
        <p>Gym, Cape Town, June 2020 – August 2023</p>
        <p>Rugby, Cape Town, January 2017 – July 2023</p>
      </section>
    </div>
  );
}

export default CV;
