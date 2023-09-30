const About = () => {
  const { title, description, teamMembers, location, foundedYear } = aboutInfo;

  // Crea la vista del componente About con la información proporcionada
  const view = `
    <div class="About">
      <h2>${title}</h2>
      <p>${description}</p>
      <h3>Our Team:</h3>
      <ul>
        ${teamMembers.map((member) => `<li>${member}</li>`).join('')}
      </ul>
      <p>Location: ${location}</p>
      <p>Foundation Year: ${foundedYear}</p>
    </div>
  `;

  return view;
};

export default About;

// about.js

const aboutInfo = {
  title: 'About Us',
  description: 'We are a company committed to innovation and quality.',
  teamMembers: ['Angel Palacios'],
  location: 'Rosario del Tala - Concepción del Uruguay, Argentina',
  foundedYear: 2021,
};
const aboutInfo_es = {
  title: 'Acerca de Nosotros',
  description: 'Somos una empresa comprometida con la innovación y la calidad.',
  teamMembers: ['Angel Palacios'],
  location: 'Rosario del Tala - Concepción del Uruguay, Argentina',
  foundedYear: 2021,
};
  