import {
  trainingPicture1,
  trainingPicture2,
  trainingPicture3,
  trainingPicture4,
  trainingIcon1,
  trainingIcon2,
  trainingIcon3,
  trainingIcon4,
  aboutPic3,
  aboutPic4,
  aboutPic5,
  aboutPic6,
  contactIcon1,
  contactIcon2,
  contactIcon3,
} from "./images";

const homeData = {
  title: "Why become a web developer?",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit sed vero! Doloremque voluptate quam nemo. Vitae, corporis saepe? Aperiam expedita debitis, libero autem sequi, ad soluta eaque facere adipisci molestiae unde ipsa. Facere, eligendi!",
};

const aboutData = {
  title: "A few words",
  description:
    "Aliquam ac dui vel dui vulputate consectetur. Mauris accumsan, massa non consectetur condimentum, diam arcu tristique nibh, nec egestas diam elit.",
  highlightedWord: "about us",
};

const trainingData = {
  title: "Our training",
  description:
    "Curabitur sed iaculis dolor, non congue ligula. Maecenas imperdiet ante eget hendrerit posuere. Nunc urna libero, congue porta nibh feugiat sem.",
  highlightedWord: "courses",
};

const teachersData = {
  title: "Meet our",
  description:
    "Sed auctor dui eleifend, scelerisque eros ut, pellentesque nibh. Nam lacinia suscipit accumsan. Donec sodales, neque vitae.",
  highlightedWord: "teachers",
};

const contactData = {
  title: "with us",
  description:
    "Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl suscipit ligula volutpat, a feugiat urna maximus. Cras massa nibh.",
  highlightedWord: "Contact",
};

const trainingFeatures = {
  html: {
    image: trainingPicture1,
    title: "Front-end web development",
    description:
      "Curabitur sed iaculis dolor, non congue ligula. Maecenas imperdiet ante eget hendrerit posuere. Nunc urna libero, congue porta nibh a, semper feugiat sem.",
    btn: "Learn more",
  },
  sql: {
    image: trainingPicture2,
    title: "SQL database for beginners",
    description:
      "Curabitur sed iaculis dolor, non congue ligula. Maecenas imperdiet ante eget hendrerit posuere. Nunc urna libero, congue porta nibh a, semper feugiat sem.",
    btn: "Learn more",
  },
  css: {
    image: trainingPicture3,
    title: "Build websites from scratch with CSS",
    description:
      "Curabitur sed iaculis dolor, non congue ligula. Maecenas imperdiet ante eget hendrerit posuere. Nunc urna libero, congue porta nibh a, semper feugiat sem.",
    btn: "Learn more",
  },
  js: {
    image: trainingPicture4,
    title: "JavaScript - the complete guide",
    description:
      "Curabitur sed iaculis dolor, non congue ligula. Maecenas imperdiet ante eget hendrerit posuere. Nunc urna libero, congue porta nibh a, semper feugiat sem.",
    btn: "Learn more",
  },
};

const lessonFeatures = [
  {
    image: trainingIcon1,
    title: "Curabitor sed iaculis dolor",
    description:
      "Aliquam ac dui vel dui vulputate consectetur. Mauris accumsan",
  },
  {
    image: trainingIcon2,
    title: "Ut ultricies imperdiet sodales",
    description:
      "Aliquam ac dui vel dui vulputate consectetur. Mauris accumsan",
  },
  {
    image: trainingIcon3,
    title: "Aliquam fringilla aliquam amet",
    description:
      "Aliquam ac dui vel dui vulputate consectetur. Mauris accumsan",
  },
  {
    image: trainingIcon4,
    title: "Nulla mauris accumsan",
    description:
      "Aliquam ac dui vel dui vulputate consectetur. Mauris accumsan",
  },
];

const contactFeatures = [
  {
    image: contactIcon1,
    title: "Address",
    description:
      "Level 13, 2 Elizabeth St, Melbourne, Victoria 3000, Australia",
  },
  {
    image: contactIcon2,
    title: "Phone & Fax",
    description:
      "Phone: +61 (0) 383 766 284, Fax: +61 (0) 383 766 284"
  },
  {
    image: contactIcon3,
    title: "Opening hours",
    description:
      "Monday - Saturday 06:00 AM - 10:00 PM",
  },
];

const ourTeamData = [
  {
    image: aboutPic3,
    profession: "{ PHP }",
    name: "Edwan Holland",
    description: "Maecenas mi tortor, pellentesque a aliquam ut fringilla.",
    bgName: "about-pic3",
  },
  {
    image: aboutPic4,
    profession: "{ JS }",
    name: "Hannah Jol",
    description: "Maecenas mi tortor, pellentesque a aliquam ut fringilla.",
    bgName: "about-pic4",
  },
  {
    image: aboutPic5,
    profession: "{ SQL }",
    name: "Aaron Chambers",
    description: "Maecenas mi tortor, pellentesque a aliquam ut fringilla.",
    bgName: "about-pic5",
  },
  {
    image: aboutPic6,
    profession: "{ PHP }",
    name: "Jassie Chambers",
    description: "Maecenas mi tortor, pellentesque a aliquam ut fringilla.",
    bgName: "about-pic6",
  },
];

export {
  homeData,
  trainingFeatures,
  lessonFeatures,
  aboutData,
  ourTeamData,
  trainingData,
  teachersData,
  contactData,
  contactFeatures,
};
