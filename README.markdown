# Safeer Ahmed's Cyberpunk Portfolio

![Portfolio Preview](https://github.com/safeerahmed8/safu/blob/25fe13e260739c8412e5a0509087918e6a9fc6a1/design.png)

## Overview

This is the official repository for **Safeer Ahmed's Portfolio**, a cyberpunk-themed, responsive web application showcasing my skills, projects, education, and professional journey as a B.Tech CSE student and networking enthusiast. Built with modern web technologies, this portfolio is designed to provide an immersive, hacker-inspired experience with a focus on accessibility, performance, and visual aesthetics.

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Features

- **Cyberpunk Aesthetic**: Neon colors, matrix rain background, and glitch effects for a futuristic, hacker-themed experience.
- **Responsive Design**: Optimized for desktops, tablets, and mobile devices with smooth animations and layouts.
- **Interactive Elements**:
  - Dynamic typing effect for the hero section and bio.
  - Animated skill bars and counters for engaging user interaction.
  - Testimonials slider with automatic transitions.
- **Accessibility**:
  - ARIA labels and keyboard navigation support.
  - Skip-to-content link for screen readers.
- **Sections**:
  - Hero: Introduction with social links and call-to-action buttons.
  - About: Overview of skills and quick stats.
  - Education: Timeline of academic achievements.
  - Experience: Professional work history.
  - Skills: Categorized technical and soft skills with progress bars.
  - Projects: Grid of projects with links to GitHub and demos.
  - Certificates: Showcase of certifications with downloadable links.
  - Awards: List of accolades with details.
  - Testimonials: Feedback from colleagues and mentors.
  - Team: Collaborators and contact information.
  - Contact: Form with validation and embedded Google Maps.
  - Blog: Articles on networking, Linux, and portfolio development.
- **Matrix Rain Background**: A canvas-based animation for a dynamic, immersive effect.
- **Contact Form**: Client-side validation with mailto integration for seamless communication.

---

## Technologies Used

- **HTML5**: Semantic structure for accessibility and SEO.
- **CSS3**: Custom styles with Flexbox, Grid, and animations for a cyberpunk look.
- **JavaScript**: Dynamic features like typing effects, counters, and form validation.
- **Font Awesome**: Icons for navigation and social links.
- **Google Fonts**: JetBrains Mono for a monospaced, hacker-style typography.
- **Canvas API**: Matrix rain background effect.
- **External APIs**:
  - Google Maps Embed for location display.
  - Placeholder images from via.placeholder.com and icons8.com for prototyping.

---

## Setup and Installation

To run this portfolio locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/safeerahmed8/safeerahmed8.github.io.git
   cd safeerahmed8.github.io
   ```

2. **Open the Project**:
   - No additional dependencies are required since this is a static site.
   - Open `index.html` in a web browser:
     ```bash
     open index.html
     ```
     Or use a local server for better testing (e.g., with Python):
     ```bash
     python -m http.server 8000
     ```
     Then navigate to `http://localhost:8000`.

3. **Optional: Live Server**:
   - For development, use a tool like VS Code's Live Server extension for real-time previews.

---

## Usage

- **Navigation**: Use the fixed navbar to jump to sections (Home, About, Education, etc.).
- **Interactive Features**:
  - Watch the matrix rain effect in the background.
  - Observe the typing animation in the hero and about sections.
  - Hover over project cards, certificates, and awards for glitch and scale effects.
  - Fill out the contact form to open your default email client with pre-filled details.
- **Responsive Testing**:
  - Resize the browser or use mobile devices to test responsiveness.
  - The navbar collapses into a hamburger menu on screens smaller than 700px.

---

## Project Structure

```
safeerahmed8.github.io/
├── index.html          # Main HTML file
├── safu.jpg           # Hero section image (replace with actual headshot)
├── styles/            # (Optional) CSS files if modularized
├── scripts/           # (Optional) JS files if modularized
└── README.md          # This file
```

- **index.html**: Contains all HTML, inline CSS, and JavaScript for simplicity and portability.
- **safu.jpg**: Placeholder for the hero section headshot (update with a real image).
- **styles/** and **scripts/**: Optional folders for separating CSS and JS in larger projects.

---

## Customization

To personalize this portfolio:

1. **Update Content**:
   - Replace placeholder images (`https://via.placeholder.com`) with real project or certificate images.
   - Update links in the socials, projects, and certificates sections with your GitHub, LinkedIn, etc.
   - Edit the bio text in the `bioText` JavaScript variable.
   - Modify education, experience, and project details in the respective sections.

2. **Styling**:
   - Adjust neon colors (`#00FF00`, `#8B00FF`, `#00B7EB`) in the CSS to match your theme.
   - Customize the matrix rain effect by tweaking the `drawMatrix` function (e.g., speed, characters).

3. **Add Features**:
   - Integrate a backend for the contact form (e.g., Node.js or PHP) instead of mailto.
   - Add more sections or animations as needed.

4. **Deployment**:
   - Host on GitHub Pages by pushing to the `gh-pages` branch.
   - Update the `og:url` meta tag with your live URL.

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Make changes and commit:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to your fork:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a Pull Request with a detailed description of your changes.

Please ensure your code follows the existing style and maintains accessibility standards.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

For questions or collaboration, reach out to me:
- **GitHub**: [github.com/safeerahmed8](https://github.com/safeerahmed8)

- **Location**: , India

---

Thank you for exploring my portfolio! 🚀
