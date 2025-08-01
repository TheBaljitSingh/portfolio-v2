import React from 'react';

export default function About() {
  return (
    <section id="about" className="min-h-screen px-4 py-16 md:px-20 lg:px-52 text-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>

      <div className="space-y-6 text-base md:text-lg leading-relaxed">
        <p>
          Hey, I’m <strong>Baljit Singh</strong> . I'm a passionate software engineering(2025) student skilled in full-stack web development, problem solving, and building scalable, user-friendly applications.
        </p>


        <p>
          Over time, I built my technical skillset in <strong>JavaScript/TypeScript</strong>, <strong>React.js</strong>, and <strong>Node.js</strong>. I’ve actively participated in <strong>hackathons</strong> and collaborative projects that sharpened my team and problem-solving skills.
        </p>

        <p>
          I'm deeply <strong>passionate about engineering</strong> and am always exploring ways to create impactful digital experiences. Currently, I’m <strong>open to new opportunities</strong> where I can contribute, learn, and grow as a developer while building something meaningful.
        </p>

        <p className="text-center font-medium text-blue-600">
          Let’s connect and collaborate to build the future, together!
        </p>
      </div>
    </section>
  );
}
