const totalValue = document.querySelector("#value");
const percentOfPeople = document.querySelector("#percent");
const reactionValue = document.querySelector("#reaction");
const memoryValue = document.querySelector("#memory");
const verbalValue = document.querySelector("#verbal");
const visualValue = document.querySelector("#visual");

const valuesTypes = [reactionValue, memoryValue, verbalValue, visualValue];

const createRandomValues = () => {
  for (let i = 0; i < valuesTypes.length; i++) {
    const randomNumber = Math.floor(Math.random() * 85 + 15);

    valuesTypes[i].textContent = randomNumber;
  }

  setTotalValue();
};

const setTotalValue = () => {
  let value = 0;

  for (let i = 0; i < valuesTypes.length; i++) {
    value += parseInt(valuesTypes[i].textContent);
  }

  totalValue.textContent = parseInt(value / valuesTypes.length);

  setPercentOfPeople();
};

const setPercentOfPeople = () => {
  let value = parseInt(totalValue.textContent) - (parseInt(totalValue.textContent) / 5);

  percentOfPeople.textContent = `${value}%`;
};

createRandomValues();
