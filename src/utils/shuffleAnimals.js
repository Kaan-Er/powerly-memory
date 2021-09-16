import data from "../configs/data";

export default function shuffleAnimals() {
  const { animals } = data;
  const items = [...animals, ...animals];
  for (var i = items.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = items[i];
    items[i] = items[j];
    items[j] = temp;
  }
  return items;
}
