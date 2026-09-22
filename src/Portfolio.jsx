/*updates later : npm run build
use npm run dev to open
vercel --prod */

import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, ArrowUpRight } from 'lucide-react';

const Portfolio = () => {
  // Personal info, projects, and skills
  const personalInfo = {
    name: "Huajun (Chris) Ruan",
    title: "Mathematics of Computation @ UCLA",
    bio: "Please find details of my work and projects below. I am a student who is passionate about finance and mathematics, and super eager to learn.",
    email: "chjruan@ucla.edu",
    github: "https://github.com/Chris-Ruan11",
    linkedin: "https://linkedin.com/in/ChrisRuan",
    profileImage: "/profile.jpg"
  };

  const projects = [
    // {
    //   title: "Stock Predictor and Tracker",
    //   description: `A website to keep track of investments and predict stock prices using a Random Forest, XGBoost, and SMA model trained on hisotrical data. 
    //  The investment tracker allows users to log their stock purchases, monitor performance, visualize gains/losses, and see news sentiment`,
    //   tech: ["Python", "Next.js", "Machine Learning"],
    //   link: "https://stock-prediction-and-portfolio-trac-nu.vercel.app/",
    //   year: "2026",
    //   image: "Stock site.png"
    // },
    {
      title: "Catan Bot",
      description: `An AlphaZero-style AI that plays 1v1 Catan to 15 victory points. Each move is chosen by a Monte Carlo tree search guided by a neural network with policy and value heads,
        and the bot improves by playing full games against itself, turning search visit counts and final scores into training labels for the next generation.
        The current champion wins 51% of 200 games against catanatron's AlphaBeta bot, and tuning the search's exploration constant gave a +50 ELO gain.`,
      tech: ["Python", "PyTorch", "Reinforcement Learning", "MCTS"],
      year: "2026",
      image: "Catan loop.png",
      fullImage: true
    },
    {
      title: "Backend Developer — Fitty App",
      company: "Creative Labs",
      description: `A social outfit-tracking app where users log outfits, see friends' posts, and get AI-suggested outfits from their own closet.
        Uploaded photos are auto-tagged by multimodal LLM classification, and outfit suggestions are scored on weather, diversity, and coherence.`,
      tech: ["Backend", "Multimodal LLMs", "Mobile App"],
      year: "2026",
      image: "Fitty app.png",
      fullImage: true
    },
    {
      title: "Scooter Tracker and Visualizer App",
      description: `A mobile app that records scooter rides, and visualizes trip history and usage statistics. 
      Focuses on efficient data handling, providing insights into travel patterns, cost savings, and time savings.
      Includes smart tracking to detect and trim the start and end of a trip, and heatmap of route frequency and places visited.`,
      tech: ["React Native", "Location Tracking", "Data Visualization"],
      link: "https://github.com/Chris-Ruan11/Scooter-Travel-Tracker-and-Visualizer/blob/main/README.md",
      linkLabel: "View on GitHub",
      year: "2026",
      image: "Scooter image.png"
    },
    // {
    //   title: "Fourier Epicycles Simulation",
    //   description: "Interactive tracing of 2D paths using Fourier series. Implements discrete Fourier transform to decompose user-drawn shapes into rotating epicycles.",
    //   tech: ["JavaScript", "p5.js", "Mathematical Modeling"],
    //   link: "https://fourier-visualizer-beryl.vercel.app/",
    //   year: "2026",
    //   image: "Fourier visualizer.png"
    // }

  ];

  const experience = [
    {
      title: "Quantitative Research Intern",
      company: "Nine Masts Capital",
      description: `Took two systematic trading research projects through to a statistically validated verdict:
        an EMA-channel breakout day-trading strategy on SHFE rebar futures with an investigation into overfitting and backtest validation,
        and a cross-sectional intraday factor research project testing 860+ feature hypotheses across 58 Chinese commodities futures.`,
      tech: ["Python", "Quantitative Research", "Backtesting", "Statistics"],
      year: "2026",
      pdf: "/internship_research_summary.pdf"
    },
    {
      title: "Realy (Multi-table Agent)",
      company: "UCLA Statistics",
      description: `A multi-table AI reasoning agent that turns natural-language questions into real, traceable analyses across spreadsheets.
        Maintains a living graph of derived tables so every join, filter, and aggregation stays inspectable, and runs computations as real code on the data rather than guessing numbers.
        Every tool call and transformation is shown as a traceable step, with intermediate tables saved for follow-up questions.`,
      tech: ["AI Agents", "LLMs", "Data Analysis"],
      year: "2026",
      link: "https://table-reasoning.vercel.app/",
      image: "Realy home.png"
    },
    {
      title: "AI Company Sourcing Classifier & Web Automation",
      company: "Caprae Capital",
      description: `Designed a program to assist lead generation, improving efficiency by 400%.
        The NLP and machine-learning system scrapes and cleans websites, transforms text into numerical features using TF-IDF vectorization, and trains a supervised Logistic Regression model to predict relevance to determine industry fit.
        Additionally, the program automatically extracts revenue data based on search criteria using Selenium web automation.`, // Noise removal by stripping html tags for footers, symbols, normalizing text, standardize length;
      tech: ["Python", "NLP", "Data Science"],
      year: "2026",
      image: "Image for AI Company Sourcing Classifier & Web Automation.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-950">

      {/* Navigation */}
      <nav className="sticky top-0 z-40 px-6 py-6 md:px-12 bg-stone-50 border-b border-stone-200">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="font-bold text-xl">{personalInfo.name}</div>
          <div className="flex gap-6">
            <a href="#experience" className="hover:text-stone-600 transition-colors">Experience</a>
            <a href="#work" className="hover:text-stone-600 transition-colors">Projects</a>
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

      {/* Work Experience Section */}
      <section id="experience" className="px-6 md:px-12 py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black mb-16">Work Experience</h2>

          <div className="space-y-20">
            {experience.map((job, index) => (
              <div key={index} className="border-b border-stone-200 pb-12 last:border-0">
                <div className="grid md:grid-cols-12 gap-8">
                  <div className="md:col-span-2">
                    <span className="text-sm font-mono text-stone-500">{job.year}</span>
                  </div>

                  <div className="md:col-span-10 space-y-6">
                    <div>
                      {job.link ? (
                        <a href={job.link} target="_blank" rel="noopener noreferrer" className="block group">
                          <h3 className="text-4xl font-black mb-2 flex items-center gap-3">
                            {job.title}
                            <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </h3>
                        </a>
                      ) : (
                        <h3 className="text-4xl font-black mb-2">{job.title}</h3>
                      )}
                      {job.company && (
                        <div className="text-xl font-bold text-stone-600">{job.company}</div>
                      )}
                    </div>

                    <p className="text-lg text-stone-600 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {job.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 border border-stone-900 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {job.link && (
                      <a
                        href={job.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-bold border-b-2 border-stone-900 hover:text-stone-600 hover:border-stone-600 transition-colors"
                      >
                        {job.linkLabel || "View live site"}
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}

                    {/* Embedded research summary (PDF) or image */}
                    {job.pdf ? (
                      <div className="border-2 border-stone-900 overflow-hidden bg-white">
                        <iframe
                          src={`${job.pdf}#toolbar=0&navpanes=0&view=FitH`}
                          title={`${job.company} research summary`}
                          className="w-full aspect-[612/792]"
                        />
                      </div>
                    ) : (
                      <a
                        href={job.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block border-2 border-stone-900 overflow-hidden"
                      >
                        <img
                          src={job.image}
                          alt={job.title}
                          className={`w-full ${job.fullImage ? "h-auto bg-white" : "aspect-video object-cover"} hover:opacity-90 transition-opacity`}
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="px-6 md:px-12 py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black mb-16">Projects</h2>

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
                    {project.company && (
                      <div className="text-xl font-bold text-stone-600 -mt-4">{project.company}</div>
                    )}

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

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-bold border-b-2 border-stone-900 hover:text-stone-600 hover:border-stone-600 transition-colors"
                      >
                        {project.linkLabel || "View live site"}
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}

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
                        className={`w-full ${project.fullImage ? "h-auto bg-white" : "aspect-video object-cover"} hover:opacity-90 transition-opacity`}
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

      {/* About Section */}
      <section id="about" className="px-6 md:px-12 py-24 bg-stone-900 text-stone-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black mb-16">About Me</h2>

          <div className="max-w-3xl">
            <div className="text-lg text-stone-300 leading-relaxed space-y-4">
              <p>
                I grew up in Hong Kong, always enjoying STEM subjects and engaging in project-based work. I found a passion for quantitative finance through my recent internship at Nine Masts Capital - I love exploring new ideas, and am always looking for ways to tackle interesting problems.
              </p>
              <p>
                Additionally, I love snowboarding, poker, and cooking. At UCLA, you'll find me as a tour guide, gardening club lead, calisthenics club memeber, and at Bruin Asset Management. 
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 md:px-12 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black mb-16">Contact Me</h2>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-lg text-stone-600">
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
    </div>
  );
};

export default Portfolio;