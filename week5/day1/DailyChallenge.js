let libform = document.querySelector("#libform");
let shuffle = document.querySelector("#shuffle");

let noun = document.getElementById("noun");
let adjective = document.getElementById("adjective");
let person = document.getElementById("person");
let verb = document.getElementById("verb");
let place = document.getElementById("place");

let story = document.getElementById("story");

libform.addEventListener("submit", (e) => {
  e.preventDefault(); //prevent refreshing of page
  let nounValue = noun.value;
  let adjectiveValue = adjective.value;
  let personValue = person.value;
  let verbValue = verb.value;
  let placeValue = place.value;

  if (nounValue && adjectiveValue && personValue && verbValue && placeValue) {
    let generatedStory = `${adjectiveValue} ${personValue} went to ${placeValue} to do a ${verbValue} because of ${nounValue}`;
    story.innerText = generatedStory;
  } else {
    alert("no input should be empty");
  }
});

shuffle.addEventListener("click", (e) => {
  let nounValue = noun.value;
  let adjectiveValue = adjective.value;
  let personValue = person.value;
  let verbValue = verb.value;
  let placeValue = place.value;
  let numbers = [1, 2, 3];

  let stories = [
    `${nounValue} don't like to ${verbValue} because of ${adjectiveValue} ${personValue} but lives in ${placeValue}`,
    `${placeValue} has a lot of ${adjectiveValue} ${personValue} as they like ${verbValue}ing like a ${nounValue}`,
    `${placeValue} has a lot of ${personValue}'s that likes to ${verbValue} ${adjectiveValue} like my sister ${nounValue}`,
  ];
  let ran = Math.round(Math.random() * 3);
  story.innerText = stories[ran];
});
