/*updates later : npm run build
use npm run dev to open
vercel --prod */

import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, ArrowUpRight } from 'lucide-react';

// Formatting inside a description:
// [text](url) -> link, **text** -> bold, __text__ -> underline, *text* -> italics
const renderLinks = (text) =>
  text
    .split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*\n]+\*\*|__[^_\n]+__|\*[^*\n]+\*)/)
    .map((part, i) => {
      const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (link) {
        return (
          <a
            key={i}
            href={link[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            {link[1]}
          </a>
        );
      }
      const bold = part.match(/^\*\*([^*\n]+)\*\*$/);
      if (bold) return <strong key={i} className="font-bold text-stone-900">{bold[1]}</strong>;
      const underline = part.match(/^__([^_\n]+)__$/);
      if (underline) return <u key={i}>{underline[1]}</u>;
      const italic = part.match(/^\*([^*\n]+)\*$/);
      if (italic) return <em key={i}>{italic[1]}</em>;
      return part;
    });

const Portfolio = () => {
  // Personal info, projects, and skills
  const personalInfo = {
    name: "Huajun (Chris) Ruan",
    title: "Mathematics of Computation @ UCLA",
    bio: "Please find details of my work and projects below. I'm always committed and eager to take on new projects, and excited to learn.",
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
      description: `I got quite competitive playing catan with my friends. At each move, its often ambigous what the best move is, and I thought it would be rather awesome to have a super-human 'coach' for every move. There was surprisingly
      little existing proejcts done on Catan, and while building, I constantly see why. There are so, so many inputs to the game, and each move's impact may be hard to see until much later. 

      This project started as an AlphaZero-style AI that plays 1v1 Catan, where each move is chosen by a Monte Carlo tree search guided by a neural network with policy and value heads,
        and the bot improves by playing full games against itself, turning search visit counts and final scores into training labels for the next generation.
        
      My best version so far uses the architecture below (with hand-made features), and wins 51% of 200 games against catanatron's AlphaBeta bot, and tuning the search's exploration constant gave a +50 ELO gain.
        I'm currently testing GNN and transformer architectures, with several other design elements such as when to combine the game state (eg hand size, longest road length) with board state (eg settlement spots occupied).`,
      tech: ["Python", "PyTorch", "Reinforcement Learning", "MCTS"],
      year: "2026",
      image: "Catan loop.png",
      fullImage: true
    },
    {
      title: "AI and Data Scientist — Personalized Movie Recommendation",
      description: `Somehow, I never found Netflix or Spotify algorithms that effective. I wanted to look deeper into how these work, and whether some personalized improvements could be made. This also gives a nice, small incentive for me to keep my IMDB ratings up to date.

      A personalized movie recommendation system built on MovieLens user-rating data and movie metadata. Uses item-based collaborative filtering and cosine similarity to identify relationships between movies, predict user preferences for unseen titles, and rank personalized recommendations. The top 10 recommendations to me are given below`,
      tech: ["Collaborative Filtering", "Rating Matrix Factorization", "User–Item Rating Matrices", "Data Visualization"],
      year: "2026",
      image: "Movie recs.png",
      fullImage: true
    },
    {
      title: "Backend Developer — Fitty App",
      company: "Creative Labs",
      description: `A group project for [UCLA's Creative Labs](https://www.creativelabsucla.com/)
      
      A social outfit-tracking app where users log outfits, see friends' posts, and get AI-suggested outfits from their own closet.
        Uploaded photos are auto-tagged by multimodal LLM classification, and outfit suggestions are scored on weather, diversity, and coherence.`,
      tech: ["Backend", "Multimodal LLMs", "Mobile App"],
      year: "2026",
      image: "Fitty app.png",
      fullImage: true
    },
    {
      title: "Scooter Tracker and Visualizer App",
      description: `Many at UCLA laugh, frown, or roll their eyes at owning a scooter, while others say its simply too expensive. But every single day I'm convinced this my scooter is totally worth it, and I wanted to prove it. 
      
      This is a mobile app that records scooter rides, and visualizes trip history and usage statistics. 
      It focuses on efficient data handling, providing insights into travel patterns, cost savings, and time savings - such as cost saved compared to shared scooter services (Bird), and time saved compared to walking (and in terms of $, if you value your time).
      Includes smart tracking to detect and trim the start and end of a trip, and heatmap of route frequency and places visited to encourage exploration on near-free transportation.`,
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

  const research = [
    {
      title: "Minimax Score Combination for Diffusion Sampling Toward Several Targets",
      company: "BruinML",
      description: `Diffusion models (the technology behind many AI image generators) can blend several trained models together while generating, but how much weight each one gets is usually picked by hand or by trial and error. If you want the output to come out as close as possible to *all* 
      of the targets at once, what's the best way to choose those weights?

      We proved an exact formula for how far the generated result ends up from each target, which turns choosing the best weights into an optimization problem that can be solved efficiently. In tests, our weights reached the true optimum, while a common existing approach did worse than weights picked at 
      random.
      
      Currently under review for ALT 2027`,
      year: "2026",
      // link: "https://...",       // optional: paper or project page
      // linkLabel: "Read paper",   // optional: link text (defaults to "View live site")
      // image: "research.png",     // optional: figure from public/
      pdf: "/418_Minimax_Score_Combination_.pdf",         // optional: embeds the PDF instead of an image
    },
    {
      title: "Autoparametric Resonance in Elastic Pendulums",
      company: "S.T. Yau High School Science Award",
      description: `Hang a weight from a spring and pull it straight down. It simply bobs up and down, as expected - except for some particular lengths, it swings side to side on its own, like a pendulum, then returns to bouncing, trading energy between the two motions with no outside push.

      We derivy why from first principles, using the Lagrangian and finding the conditions for this resonance to be related to the ratio of the spring and pendulum frequencies. We used that to predict the length that makes the effect strongest, then confirmed it with video-tracked experiments, which existing studies mostly lacked.

      Awarded local 1st place, Asia honorable mention`,
      year: "2024",
      // link: "https://...",       // optional: paper or project page
      // linkLabel: "Read paper",   // optional: link text (defaults to "View live site")
      // image: "research.png",     // optional: figure from public/
      pdf: "/Phy_109_Research_Report (1) (1) (1).pdf",         // optional: embeds the PDF instead of an image
    },
  ];

  const experience = [
    {
      title: "Quantitative Research Intern",
      company: "Nine Masts Capital",
      description: `Worked on two systematic trading research projects to a statistically validated verdict on Chinese commodity futures:
        
      First, processing over 5 billion snapshots of raw data to discover intraday strategies. I moved forward with an EMA-channel breakout strategy, and performing parameter selection. With strong results, I wrote tests for the deflated sharpe ratio and walk forward analysis, discovering regime-dependent overfitting.
        
      Second, a cross-sectional intraday factor research project testing 860+ feature hypotheses across 58 Chinese commodities futures. Utilized a Romano–Wolf stepwise multiple-testing filter and yearly stability filter to combine 43 features, reaching a 1.2 Sharpe.`,
      tech: ["Python", "Quantitative Research", "Backtesting", "Statistics"],
      year: "2026",
      pdf: "/internship_research_summary.pdf"
    },
    {
      title: "Realy (Multi-table Agent)",
      company: "UCLA Statistics",
      description: `A multi-table AI reasoning agent that turns natural-language questions into real, traceable analyses across spreadsheets.
        Maintains a living graph of derived tables so every join, filter, and aggregation stays inspectable, and runs computations as real code on the data rather than guessing numbers.
        Every tool call and transformation is shown as a traceable step, with intermediate tables saved for follow-up questions.
        
        ChatGPT/Claude MCPs established, and preparing to deliver to clients related to biostatistics and pharmacy statistics. Led by UCLA professor Guang Cheng`,
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
            <a href="#experience" className="hover:text-stone-600 transition-colors">Work Experience</a>
            <a href="#work" className="hover:text-stone-600 transition-colors">Projects</a>
            <a href="#research" className="hover:text-stone-600 transition-colors">Research</a>
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

                    <div className="text-lg text-stone-600 leading-relaxed space-y-4">
                      {job.description.split(/\n\s*\n/).map((para, i) => (
                        <p key={i}>{renderLinks(para)}</p>
                      ))}
                    </div>

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

                    <div className="text-lg text-stone-600 leading-relaxed space-y-4">
                      {project.description.split(/\n\s*\n/).map((para, i) => (
                        <p key={i}>{renderLinks(para)}</p>
                      ))}
                    </div>

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

      {/* Research Section */}
      <section id="research" className="px-6 md:px-12 py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black mb-16">Research</h2>

          <div className="space-y-20">
            {research.map((item, index) => (
              <div key={index} className="border-b border-stone-200 pb-12 last:border-0">
                <div className="grid md:grid-cols-12 gap-8">
                  <div className="md:col-span-2">
                    <span className="text-sm font-mono text-stone-500">{item.year}</span>
                  </div>

                  <div className="md:col-span-10 space-y-6">
                    <div>
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="block group">
                          <h3 className="text-4xl font-black mb-2 flex items-center gap-3">
                            {item.title}
                            <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </h3>
                        </a>
                      ) : (
                        <h3 className="text-4xl font-black mb-2">{item.title}</h3>
                      )}
                      {item.company && (
                        <div className="text-xl font-bold text-stone-600">{item.company}</div>
                      )}
                    </div>

                    <div className="text-lg text-stone-600 leading-relaxed space-y-4">
                      {item.description.split(/\n\s*\n/).map((para, i) => (
                        <p key={i}>{renderLinks(para)}</p>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {item.tech?.map((tech, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 border border-stone-900 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-bold border-b-2 border-stone-900 hover:text-stone-600 hover:border-stone-600 transition-colors"
                      >
                        {item.linkLabel || "View live site"}
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}

                    {item.pdf ? (
                      <div className="border-2 border-stone-900 overflow-hidden bg-white">
                        <iframe
                          src={`${item.pdf}#toolbar=0&navpanes=0&view=FitH`}
                          title={item.title}
                          className="w-full aspect-[612/792]"
                        />
                      </div>
                    ) : item.image && (
                      <div className="border-2 border-stone-900 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-auto bg-white"
                        />
                      </div>
                    )}
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