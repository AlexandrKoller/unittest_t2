export default function sortHero(object) {
  return object.sort((a, b) => a.health - b.health).reverse();
}
