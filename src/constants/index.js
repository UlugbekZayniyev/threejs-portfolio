export const hero = {
  name: "Ulug'bek Zayniyev",
  description: "Salom! Men Zayniyev Ulug'bekman — web dasturchiman. ReactJS, TailwindCSS va Three.js texnologiyalari asosida chiroyli, zamonaviy va mobil qurilmalarga mos saytlar ishlab chiqaman. Mening ishim — foydalanuvchilarni hayratlantiradigan interfeyslar yaratish.",
};

export const about = {
  title: "Men haqimda",
  description: "Men frontend sohasida tajribali dasturchiman. React, Tailwind, Three.js orqali animatsion va interaktiv sahifalar yarataman. Mijozlarimga foydalanuvchilarga qulay, tezkor va jozibali web interfeyslar taqdim etaman. Har bir loyiha — men uchun san’at asari!",
};

export const services = [
  {
    title: "Frontend Web Dasturchi",
    icon: "/assets/frontend.svg",
    description: "ReactJS va TailwindCSS asosida chiroyli va responsiv saytlar ishlab chiqaman.",
  },
  {
    title: "3D Web Animatsiyalar",
    icon: "/assets/threejs.svg",
    description: "Three.js yordamida 3D animatsiyalar bilan boyitilgan sahifalar yarataman.",
  },
  {
    title: "Telegram Bot + Email Form",
    icon: "/assets/bot.svg",
    description: "Aloqa formasi orqali xabarlar Telegram yoki email orqali yuboriladi.",
  },
];

export const projects = [
  {
    name: "Portfolio Websayt",
    description:
      "Bu mening shaxsiy portfolio saytim. Unda men haqimda ma’lumot, loyihalarim, kontakt sahifasi va 3D animatsiyalar mavjud.",
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
      "3D sayyoralar va interaktiv tugmalar bilan bezatilgan sahifa. 'Start Space' tugmasi orqali foydalanuvchi kosmik interfeysga o'tadi.",
    tags: [
      { name: "three.js", color: "green-text-gradient" },
      { name: "webgl", color: "blue-text-gradient" },
    ],
    image: "space.png",
    source_code_link: "https://github.com/UlugbekZayniyev/space-animation",
  },
];

export const testimonials = [
  {
    name: "Jasur Murodov",
    title: "Startap asoschisi",
    feedback: "Ulug'bek sayt yaratishda bizga juda katta yordam berdi. Dizayn, tezlik va funksiya jihatdan juda mukammal chiqdi.",
    image: "/assets/client1.jpg",
  },
  {
    name: "Laylo Karimova",
    title: "UI/UX Dizayner",
    feedback: "Dizaynimni aynan qanday bo‘lsa shunday qilib frontendga o‘tkazdi. Juda professional ishladi.",
    image: "/assets/client2.jpg",
  },
];

export const blogs = [
  {
    title: "ReactJS asoslari",
    summary: "React komponentlar, props va state haqida sodda tushunchalar",
    image: "/assets/blog1.jpg",
    date: "2025-07-14",
    link: "/blog/react-asoslari",
  },
  {
    title: "Three.js bilan 3D sahifalar",
    summary: "Saytingizni interaktiv qilish uchun Three.js qanday ishlaydi",
    image: "/assets/blog2.jpg",
    date: "2025-07-13",
    link: "/blog/threejs-dars",
  },
];

export const contact = {
  title: "Aloqa",
  description: "Quyidagi forma orqali menga xabar yuborishingiz mumkin. Yoki Telegram va email orqali bog‘laning.",
  telegram: "https://t.me/ulugbek_zayniyevnyc",
  email: "zayniyevuulugbek@gmail.com",
};

export const navLinks = [
  { id: "about", title: "Men haqimda" },
  { id: "services", title: "Xizmatlar" },
  { id: "projects", title: "Loyihalar" },
  { id: "testimonials", title: "Fikrlar" },
  { id: "blog", title: "Blog" },
  { id: "contact", title: "Aloqa" },
];