export default function sortLivesHeroes(heroes) {
    heroes.sort((prev, next) => next.health - prev.health);
    return heroes;
  }