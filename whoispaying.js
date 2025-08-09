function payIng() {
  names = ["Angela", "Ben", "Jeremy", "Micheal", "Chloe"];
  Rand = Math.floor(Math.random() * 5);
  return `${names[Rand]} is buying food`;
}
payIng();