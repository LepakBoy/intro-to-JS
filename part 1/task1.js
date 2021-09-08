const biodata = {
  nama: "fikri",
  age: 23,
  hobbies: ["main game", "membaca"],
  isMarried: false,
  schoolList: [
    {
      name: "SDIT Al-Ishmah",
      yearIn: "2004",
      yearOut: "2010",
      major: null,
    },
    {
      name: "MTS Al-Irsyad",
      yearIn: "2010",
      yearOut: "2013",
      major: null,
    },
    {
      name: "MA Al-Irsyad",
      yearIn: "2014",
      yearOut: "2016",
      major: null,
    },
  ],
  skills: [
    {
      skillName: "php",
      level: "beginner",
    },
    {
      skillName: "javascript",
      level: "beginner",
    },
    {
      skillName: "HTML & CSS",
      level: "beginner",
    },
  ],
  interestInCoding: true,
};

const { skillName } = biodata.skills[1];
console.log(skillName);
