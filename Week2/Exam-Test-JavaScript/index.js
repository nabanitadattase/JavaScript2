// you're involved in organzing a conference and here are information you about all participants

const participants = [
  {
    name: 'Igor Petterson',
    profession: 'Designer',
    company: 'Awesome Stuff AB',
    foodPreference: 'vegetarian',
    registerToTalks: ['talk1', 'talk4', 'talk5'],
  },
  {
    name: 'Richard Lane',
    profession: 'Developer',
    company: 'Super Stuff AB',
    foodPreference: 'meat',
    registerToTalks: ['talk3', 'talk4', 'talk2'],
  },
  {
    name: 'Andrea Mason',
    profession: 'Designer',
    company: 'Super Stuff AB',
    foodPreference: 'meat',
    registerToTalks: ['talk3', 'talk4', 'talk6'],
  },
  {
    name: 'Alexander Hunter',
    profession: 'Developer',
    company: 'Amazing Stuff AB',
    foodPreference: 'vegetarian',
    registerToTalks: ['talk1', 'talk3', 'talk5'],
  },
  {
    name: 'Sofie Dixon',
    profession: 'Developer',
    company: 'Amazing Stuff AB',
    foodPreference: 'vegetarian',
    registerToTalks: ['talk2', 'talk4', 'talk5'],
  },
  {
    name: 'Paul Shaw',
    profession: 'Architect',
    company: 'Awesome Stuff AB',
    foodPreference: 'vegan',
    registerToTalks: ['talk2', 'talk5', 'talk3'],
  },
];

/**
 * make sure, every participant has a (HTML) name tag like this:
 *    ----------------------------------------
 *    |                                        |
 *    |            NAME                        |
 *    |            PROFESSION                  |
 *    |            COMPANY                     |
 *    |                                        |
 *    ----------------------------------------
 **/

const nameTagsElement = document.getElementById('nameTags');
participants.forEach(participant => {
  const nameTagElement = document.createElement('div');
  nameTagElement.setAttribute('class', 'nameTag');
  createAndAppendPara(nameTagElement, participant.name);
  createAndAppendPara(nameTagElement, participant.profession);
  createAndAppendPara(nameTagElement, participant.company);
  nameTagsElement.appendChild(nameTagElement);
});

function createAndAppendPara(tagNameElement, text) {
  const pElement = document.createElement('p');
  pElement.innerText = text;
  tagNameElement.appendChild(pElement);
}

// create html, that shows an overview over food preferences:
const foodPreferencesElement = document.getElementById('foodPreferences');

const vegetarianElement = createFoodPreferenceElement('Vegetarian: ', 'vegetarian');
foodPreferencesElement.appendChild(vegetarianElement);
const veganElement = createFoodPreferenceElement('Vegan: ', 'vegan');
foodPreferencesElement.appendChild(veganElement);
const meatElement = createFoodPreferenceElement('Meat: ', 'meat');
foodPreferencesElement.appendChild(meatElement);

function createFoodPreferenceElement(title, searchWord) {
  const foodPreferenceElement = document.createElement('p');
  foodPreferenceElement.innerText = title;
  const numberOfDishes = document.createElement('span');
  numberOfDishes.innerText = countDishes(searchWord);
  foodPreferenceElement.appendChild(numberOfDishes);
  return foodPreferenceElement;
}

function countDishes(foodPreference) {
  let numberOfDishes = 0;
  participants.forEach(participant => {
    if (participant.foodPreference === foodPreference) {
      numberOfDishes++;
    }
  });
  return numberOfDishes;
}

//list registered names for each talk
const talksElement = document.getElementById('talks');

const talk1Element = createTalkElement('Talk 1: ', 'talk1');
talksElement.appendChild(talk1Element);
const talk2Element = createTalkElement('Talk 2: ', 'talk2');
talksElement.appendChild(talk2Element);
const talk3Element = createTalkElement('Talk 3: ', 'talk3');
talksElement.appendChild(talk3Element);
const talk4Element = createTalkElement('Talk 4: ', 'talk4');
talksElement.appendChild(talk4Element);
const talk5Element = createTalkElement('Talk 5: ', 'talk5');
talksElement.appendChild(talk5Element);
const talk6Element = createTalkElement('Talk 6: ', 'talk6');
talksElement.appendChild(talk6Element);

function createTalkElement(title, searchWord) {
  const talkElement = document.createElement('div');
  talkElement.innerText = title;
  const listElement = document.createElement('ul');
  talkElement.appendChild(listElement);
  participants.forEach(participant => {
    if (participant.registerToTalks.indexOf(searchWord) >= 0) {
      const liElement = document.createElement('li');
      liElement.innerText = participant.name;
      listElement.appendChild(liElement);
    }
  });
  return talkElement;
}
