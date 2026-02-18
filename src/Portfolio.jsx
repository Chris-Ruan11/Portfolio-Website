/*updates later : npm run build
use npm run dev to open
vercel --prod */

import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, ArrowUpRight } from 'lucide-react';

const Portfolio = () => {
  // Personal info, projects, and skills
  const personalInfo = {
    name: "Huajun (Chris) Ruan",
    title: "Mathematics @ UCLA",
    bio: "I love coding solutions, startups, and anything that looks cool",
    email: "chjruan@ucla.edu",
    github: "https://github.com/Chris-Ruan11",
    linkedin: "https://linkedin.com/in/ChrisRuan",
    profileImage: "/profile.jpg"
  };

  const projects = [
    {
      title: "Stock Predictor and Tracker",
      description: `A website to keep track of investments and predict stock prices using machine learning.
     The stock price predictor uses historical data to train a Random Forest, XGBoost, and SMA model. 
     The investment tracker allows users to log their stock purchases, monitor performance, visualize gains/losses, and see the models' predictions.`,
      tech: ["Python", "Next.js", "Machine Learning"],
      link: "https://stock-prediction-and-portfolio-trac-nu.vercel.app/",
      year: "2026",
      image: "Stock site.png"
    },
    {
      title: "Scooter Tracker and Visualizer App",
      description: `A mobile app that records scooter rides, and visualizes trip history and usage statistics. 
      Focuses on efficient data handling, providing insights into travel patterns, cost savings, and time savings.
      Includes smart tracking to detect and trim the start and end of a trip, and heatmap of route frequency and places visited.`,
      tech: ["React Native", "Location Tracking", "Data Visualization"],
      link: "https://github.com/Chris-Ruan11/Scooter-Travel-Tracker-and-Visualizer/blob/main/README.md",
      year: "2026",
      image: "Scooter image.png"
    },
    {
      title: "AI Company Sourcing Classifier & Web Automation",
      description: `Designed a program to assist lead generation, improving efficiency by 400%. 
        The NLP and machine-learning system scrapes and cleans websites, transforms text into numerical features using TF-IDF vectorization, and trains a supervised Logistic Regression model to predict relevance to determine industry fit. 
        Additionally, the program automatically extracts revenue data based on search criteria using Selenium web automation.`, // Noise removal by stripping html tags for footers, symbols, normalizing text, standardize length;
      tech: ["Python", "NLP", "Data Science"],
      year: "2026",
      image: "Image for AI Company Sourcing Classifier & Web Automation.jpg"
    },
    {
      title: "Fourier Epicycles Simulation",
      description: "Interactive tracing of 2D paths using Fourier series. Implements discrete Fourier transform to decompose user-drawn shapes into rotating epicycles.",
      tech: ["JavaScript", "p5.js", "Mathematical Modeling"],
      link: "https://fourier-visualizer-beryl.vercel.app/",
      year: "2026",
      image: "Fourier visualizer.png"
    }

  ];

  const skills = [
    "JavaScript/TypeScript", "React & Next.js", "Node.js",
    "UI/UX", "Three.js & WebGL", "Python",
    "Creative Coding", "API Development", "Responsive Design"
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-950">

      {/* Navigation */}
      <nav className="sticky top-0 z-40 px-6 py-6 md:px-12 bg-stone-50 border-b border-stone-200">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="font-bold text-xl">{personalInfo.name}</div>
          <div className="flex gap-6">
            <a href="#work" className="hover:text-stone-600 transition-colors">Work</a>
            <a href="#about" className="hover:text-stone-600 transition-colors">About</a>
            <a href="#contact" className="hover:text-stone-600 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Main Top Hero Section - name, description, image*/}
      <section id="hero" className="px-6 md:px-12 py-24 bg-green-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[2fr_1fr] gap-12">
            {/* LEFT COLUMN */}
            <div>
              <h1 className="text-6xl md:text-8xl font-black mb-8">
                {personalInfo.name}
              </h1>
              <h2 className="text-3xl font-bold mb-8 border-l-4 border-stone-900 pl-6">
                {personalInfo.title}
              </h2>
              <p className="text-xl text-stone-600 leading-relaxed">
                {personalInfo.bio}
              </p>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-6">
              <div className="w-60 h-65 border-2 border-stone-900 overflow-hidden mb-8"> {/* Profile Photo */}
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full bg-stone-200 flex items-center justify-center text-4xl font-black text-stone-400">
                        ${personalInfo.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    `;
                  }}
                />
              </div>
              <div className="flex gap-4">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border-2 border-stone-900 hover:bg-stone-900 hover:text-stone-50 transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border-2 border-stone-900 hover:bg-stone-900 hover:text-stone-50 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-3 border-2 border-stone-900 hover:bg-stone-900 hover:text-stone-50 transition-all"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="px-6 md:px-12 py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black mb-16">Selected Work</h2>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <div key={index} className="border-b border-stone-200 pb-12 last:border-0">
                <div className="grid md:grid-cols-12 gap-8">
                  <div className="md:col-span-2">
                    <span className="text-sm font-mono text-stone-500">{project.year}</span>
                  </div>

                  <div className="md:col-span-10 space-y-6">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <h3 className="text-4xl font-black mb-4 flex items-center gap-3">
                        {project.title}
                        <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                    </a>

                    <p className="text-lg text-stone-600 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 border border-stone-900 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Image */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block border-2 border-stone-900 overflow-hidden"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full aspect-video object-cover hover:opacity-90 transition-opacity"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = `
                            <div class="w-full aspect-video flex items-center justify-center bg-stone-100"> // 16:9
                              <div class="text-center p-8">
                                <div class="text-4xl font-black text-stone-400 mb-2">${index + 1}</div>
                                <div class="text-lg font-bold text-stone-500">${project.title}</div>
                              </div>
                            </div>
                          `;
                        }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & About Section */}
      <section id="about" className="px-6 md:px-12 py-24 bg-stone-900 text-stone-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black mb-16">Skills & Expertise</h2>

          <div className="grid md:grid-cols-3 gap-4 mb-16">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-6 border-2 border-stone-50"
              >
                <span className="text-lg font-bold">{skill}</span>
              </div>
            ))}
          </div>

          <div className="max-w-3xl">
            <h3 className="text-3xl font-bold mb-6 border-l-4 border-stone-50 pl-6">
              About Me
            </h3>
            <div className="text-lg text-stone-300 leading-relaxed space-y-4">
              <p>
                I'm a developer who loves creating unique digital experiences. My work sits at the
                intersection of design and technology, always pushing to make the web more interesting.
              </p>
              <p>
                When I'm not coding, you'll find me cooking something delicious to eat over a good math YouTube video,
                running, exploring, or playing a new game.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 md:px-12 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black mb-16">Get In Touch</h2>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-2xl font-bold mb-6 leading-relaxed">
                Let's collaborate
              </p>
              <p className="text-lg text-stone-600">
                I'm always interested in new opportunities and interesting projects.
                Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="block p-6 border-2 border-stone-900 hover:bg-stone-900 hover:text-stone-50 transition-all group"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm font-mono text-stone-500 group-hover:text-stone-300 mb-1">
                      Email
                    </div>
                    <div className="text-lg font-bold">
                      {personalInfo.email}
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5" />
                </div>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 border-2 border-stone-900 hover:bg-stone-900 hover:text-stone-50 transition-all group"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm font-mono text-stone-500 group-hover:text-stone-300 mb-1">
                      LinkedIn
                    </div>
                    <div className="text-lg font-bold">
                      Let's connect
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5" />
                </div>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 border-2 border-stone-900 hover:bg-stone-900 hover:text-stone-50 transition-all group"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm font-mono text-stone-500 group-hover:text-stone-300 mb-1">
                      GitHub
                    </div>
                    <div className="text-lg font-bold">
                      My code
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-8 border-t border-stone-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-stone-500">
            © 2024 {personalInfo.name}. All rights reserved.
          </div>
          <div className="text-sm text-stone-500">
            Built with React
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;