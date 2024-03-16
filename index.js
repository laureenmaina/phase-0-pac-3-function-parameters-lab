function introduction(name) {
    console.log();
  return `Hi, my name is ${name}.`
   }
  introduction("Aki")

function introductionWithLanguage(name, language) {
    console.log();
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
  }
  introductionWithLanguage("Aki","Ember.js")

function introductionWithLanguageOptional(name, language="JavaScript") {
    console.log();
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
  }
  introductionWithLanguageOptional("Aki")
  


