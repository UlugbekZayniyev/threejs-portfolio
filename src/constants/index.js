export const hero = {
  name: "Ulug'bek Zayniyev",
  description: "Salom! Men Zayniyev Ulug'bekman — men web dasturchiman. ReactJS, TailwindCSS va Three.js texnologiyalari asosida chiroyli va mobil telefonga mos saytlar ishlab chiqaman. Mening ishim — foydalanuvchilarni hayratlantiradigan interfeyslar yaratish.",
};

export const about = {
  title: "Men haqimda",
  description: "Men zamonaviy frontend texnologiyalaridan foydalangan holda ajoyib veb interfeyslar yarataman. Tajribam va ishtiyoqim orqali foydalanuvchilarni o‘ziga tortadigan 3D va animatsion sahifalarni ishlab chiqaman.",
};

export const projects = [
  {
    name: "Portfolio Websayt",
    description:
      "Ushbu sayt mening shaxsiy portfoliyam bo‘lib, unda men haqimda ma'lumot, ishlagan loyihalarim, aloqa uchun forma va 3D animatsiyalar mavjud.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "three.js", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: "portfolio.png",
    source_code_link: "https://github.com/UlugbekZayniyev/threejs-portfolio",
  },
  {
    name: "Kosmos Sayohati",
    description:
      "3D sayyoralar va interaktiv tugmalar bilan bezatilgan kosmik animatsiya sahifasi. 'Start Space' tugmasi orqali foydalanuvchi kosmik interfeysga o'tadi.",
    tags: [
      { name: "three.js", color: "green-text-gradient" },
      { name: "webgl", color: "blue-text-gradient" },
    ],
    image: "space.png",
    source_code_link: "https://github.com/UlugbekZayniyev/space-animation",
  },
];

export const contact = {
  title: "Aloqa",
  description: "Menga quyidagi forma orqali yoki ijtimoiy tarmoqlar orqali murojaat qilishingiz mumkin.",
  telegram: "https://t.me/ulugbek_zayniyevnyc",
  email: "zayniyevuulugbek@gmail.com",
};

export const navLinks = [
  { id: "about", title: "Men haqimda" },
  { id: "projects", title: "Loyihalar" },
  { id: "contact", title: "Aloqa" },
];