const translations = {
  en: {
    greet: "Hello",
    intro: "Welcome to our website",
  },
  fr: {
    greet: "Bonjour",
    intro: "Bienvenue sur notre site web",
  },
};

const language = "fr"; // Change to "en" for English
const greeting = "greet";
const introduction = "intro";

function localize(strings, ...keys) {
  const translation = translations[language];
  return keys.map((key) => translation[key]).join("");
}

const localizedGreeting = localize`${greeting}`;
const localizedIntroduction = localize`${introduction}`;

console.log(localizedGreeting);
console.log(localizedIntroduction);
