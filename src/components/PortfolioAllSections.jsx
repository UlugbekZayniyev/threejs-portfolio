import React from 'react';

// === Ma'lumotlar ===

const hero = {
  title: "Men haqimda",
  description: "Salom! Men Zayniyev Ulug'bekman — web dasturchiman. ReactJS, TailwindCSS va Three.js asosida chiroyli, tezkor, va mobilga mos saytlar ishlab chiqaman. Maqsadim — foydalanuvchilarni hayratlantiradigan interfeyslar yaratish.",
};

const services = [
  {
    title: "Responsiv Websaytlar",
    icon: "/assets/web.svg",
    description: "Har qanday ekran o‘lchamiga mos, chiroyli va tez ishlovchi web saytlar yarataman.",
  },
  {
    title: "3D Web Ilovalar",
    icon: "/assets/3d.svg",
    description: "Three.js orqali foydalanuvchini o‘ziga tortuvchi 3D sahifalar ishlab chiqaman.",
  },
  {
    title: "Frontend Dasturlash",
    icon: "/assets/frontend.svg",
    description: "ReactJS va TailwindCSS orqali interfeyslar yaratishda tajribam bor.",
  },
];

const projects = [
  {
    name: "Portfolio Websayt",
    description: "Mening shaxsiy portfoliyam — unda men haqimda, loyihalarim, aloqa bo‘limi va 3D animatsiyalar mavjud.",
    tags: ["React", "Tailwind", "Three.js"],
    image: "/assets/portfolio.png",
    source_code_link: "https://github.com/UlugbekZayniyev/threejs-portfolio",
  },
  {
    name: "Kosmos Sayohati",
    description: "'Start Space' tugmasi orqali 3D kosmik interfeysga o'tish funksiyasi mavjud.",
    tags: ["Three.js", "WebGL"],
    image: "/assets/space.png",
    source_code_link: "https://github.com/UlugbekZayniyev/space-animation",
  },
];

const contact = {
  title: "Aloqa",
  description: "Quyidagi forma orqali yoki ijtimoiy tarmoqlar orqali menga murojaat qilishingiz mumkin.",
  telegram: "https://t.me/ulugbek_zayniyevnyc",
  email: "zayniyevuulugbek@gmail.com",
};

// === Bo'limlar ===

const Hero = () => (
  <section id="about" className="py-20 px-6 bg-white dark:bg-gray-900">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">{hero.title}</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">{hero.description}</p>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">Xizmatlar</h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {services.map((service, index) => (
          <div key={index} className="p-6 bg-white dark:bg-gray-700 rounded shadow hover:scale-105 transition-transform">
            <img src={service.icon} alt={service.title} className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="py-16 px-6 bg-white dark:bg-gray-900">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">Loyihalar</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
            <img src={project.image} alt={project.name} className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{project.name}</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-sm text-blue-600 dark:text-blue-400">#{tag}</span>
              ))}
            </div>
            <a
              href={project.source_code_link}
              target="_blank"
              className="inline-block mt-4 text-sm text-blue-500 underline"
              rel="noopener noreferrer"
            >
              GitHub kodini ko‘rish
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-16 px-6 bg-white dark:bg-gray-900">
    <div className="max-w-xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">{contact.title}</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8">{contact.description}</p>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Ismingiz" className="p-3 rounded border dark:bg-gray-800" />
        <input type="email" placeholder="Email manzilingiz" className="p-3 rounded border dark:bg-gray-800" />
        <textarea rows="5" placeholder="Xabaringiz" className="p-3 rounded border dark:bg-gray-800" />
        <button type="submit" className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700">Yuborish</button>
      </form>
      <div className="mt-6 text-gray-600 dark:text-gray-400">
        <p>Telegram: <a href={contact.telegram} target="_blank" className="text-blue-500">@ulugbek_zayniyevnyc</a></p>
        <p>Email: <a href={`mailto:${contact.email}`} className="text-blue-500">{contact.email}</a></p>
      </div>
    </div>
  </section>
);

const PortfolioAllSections = () => (
  <main>
    <Hero />
    <Services />
    <Projects />
    <Contact />
  </main>
);

export default PortfolioAllSections;