// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Meng Fan",
  middleName: "",
  lastName: "Wang",
  message: "Software Engineer && Computer Engineering Student",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/mengfw-02",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/meng-fan-wang-2581a3145/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/mengfw6.png"),
  imageSize: 375,
  message:
    "Hello! My name is Meng. I am a junior, dual degree student at Columbia University and Davidson College, majoring in Computer Science and Computer Engineering. I love competing in hackathons and working on side projects. Outside of tech, I also like to play the piano, act, dance, travel, and cook. ",
  resume: "https://drive.google.com/file/d/1741DiYfU2XU8-4zMaY8f8FXmYmUDM1ug/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "mengfw-02", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: [
    {
    name: "Shrüming",
    description: "As the carbon footprint skyrockets across the states, there is a pretty neat, tasty (and fun!) fix: mushrooms. Winner of 'Best ML Hack Using Carbon Footprint Data' at VTHacks X. ",
    repo: "https://github.com/niya-ma-1/vthacks2022",
    youtube: "https://www.youtube.com/embed/k9FvgGbsjzE",
    devpost: "https://devpost.com/software/shrooms-r-us",
    keywords: ["AI/ML", "Image Classification", "Carbon Footprint", "PyTorch", "React", "Google Maps API"]
    }, 
    {
      name: "College Foodie",
      description: "College Foodie is a website where users can get recommendations of meals liked by other similar users.",
      repo: "https://github.com/mengfw-02/CollegeFoodie",
      youtube: "https://www.youtube.com/embed/G0doUYycvLY",
      devpost: "https://devpost.com/software/collegefoodie",
      keywords: ["Recommender System", 'React', 'Firebase', 'Material',]
    }, 
    {
      name: "WaitFree DMV!",
      description: "Online DMV appointments made accessible, simple, and easy. 3rd Place at Bison Hacks 2022. ",
      repo: "https://github.com/olsenbudanur/BisonHacks2022",
      youtube: "https://www.youtube.com/embed/5dIJss2OCpk",
      devpost: "https://https://devpost.com/software/waitfree-dmv.com/software/codeviolet",
      keywords: ['Chromium', 'Firebase', 'Selenium', 'Twilio', 'Bash', 'React', 'Google Maps API']
    }, 
    {
      name: "B-LOT",
      description: "Ever wonder who won the lottery? B-LOT is here to publicize the lottery transaction. B-LOT is implemented with block-chain, firebase, and Nessi. Winner of 'Most Creative Use of Automation' at Pearl Hacks 2022",
      repo: "https://github.com/niya-ma-1/pearlhacks",
      youtube: "https://www.youtube.com/embed/TMr-uPn0_gQ",
      devpost: "https://devpost.com/software/b-lot",
      keywords: ['Capital One Nessi', 'Firebase', "React", "Stellar"]
    }, 
    {
      name: "CodeViolet",
      description: "Hackathon project for HackViolet 2022. Winner of 'Most Customer Focused' category.",
      repo: "https://github.com/niya-ma-1/hackviolet",
      youtube: "https://www.youtube.com/embed/aRbOfZL9ZO4",
      devpost: "https://devpost.com/software/codeviolet",
      keywords: ['Firebase', 'React Native']
    }, 
    {
      name: "Pokemon Identifier and Classifier",
      description: "This ML project is built using Convolutional Neural Networks. The identifier is able to label the name of the pokemon give an image and the classifer is able to label the type of the pokemon, such was poison or water. The model is trained on 150 Generation I Pokemons with about 20–50 images for each Pokemon. ",
      repo: "https://github.com/EliBier/Pokemon_Classifier",
      image: require("../editable-stuff/pokemon.jpeg"),
      devpost: "https://medium.com/@hajin.kim/pokemon-identifier-and-classifier-using-convolutional-neural-networks-a8ec9d646c4",
      keywords: ['Machine Learning', 'Convolutional Neural Networks', 'Classifiers'],
      cardType: true
    }, 
    {
      name: "Restaurants Unwrapped: Deep Dive Analytics on NYC Restaurant Health Inspection Data",
      description: "This ML project is built using Convolutional Neural Networks. The identifier is able to label the name of the pokemon give an image and the classifer is able to label the type of the pokemon, such was poison or water. The model is trained on 150 Generation I Pokemons with about 20–50 images for each Pokemon. ",
      repo: "https://www.kaggle.com/code/zacharysickles/unwrapped?scriptVersionId=128902982",
      image: require("../editable-stuff/rest.png"),
      devpost: "https://medium.com/@zach_sickles/restaurants-unwrapped-ad7702e83f32",
      keywords: ['Machine Learning', 'Data Analysis'],
      cardType: true
    }, 
  ]
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:[
    {
      name: "Hack@Davidson - President",
      link: "https://c-ca-davidson.wixsite.com/website",
      role: "Co-founded the first student-led hackathon at Davidson College with 90+ registrations and over $6k raised.",
    },
    {
      name: "Association for Women in Mathematics, Davidson College Chapter - President",
      link: "",
      role: "Hold monthly programs to promote equal opportunities for women and nonbinary students."
    }
  ]
    ,
  images: [
    {
      img: require("../assets/img/opening_ceremony.jpeg"), 
      label: "Hack@Davidson Opening Ceremony", 
      paragraph: "" 
    },
    { 
      img: require("../assets/img/Hack_Davidson_team.jpeg"), 
      label: "VTHacks X with CCAD Members", 
      paragraph: "" 
    },
    { 
      img: require("../assets/img/photo1.JPG"), 
      label: "VTHacks X with Hack@Davidson Members", 
      paragraph: "" 
    }
  ],
  imageSize: {
    width:"615",
    height:"500"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Technical Skills",
  hardSkills: [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  ]
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Reach me at",
  email: "mengfanwang724@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  timeline: "https://drive.google.com/file/d/1gEHXpKYg7c5B2ltt3bbJP5XzBKhSpyTZ/view?usp=sharing",
};


export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
