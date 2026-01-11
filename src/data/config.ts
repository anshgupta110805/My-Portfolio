const config = {
  title: "Ansh Gupta | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Ansh, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Ansh, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Ansh",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Ansh Gupta",
  email: "ansh.gupta@gmail.com",
  site: "https://anshgupta.site",

  // for github stars button
  githubUsername: "anshgupta110805",
  githubRepo: "My-Portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {

    linkedin: "https://www.linkedin.com/in/anshgupta0001/",
    instagram: "https://www.instagram.com/hotchaddi",
    facebook: "https://www.facebook.com/HotChaddi/",
    github: "https://github.com/anshgupta110805",
  },
};
export { config };
