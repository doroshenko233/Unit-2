import sortLivesHeroes from '../sortLivesHeroes';

test('Функция должна сортировать массив героев по убыванию здоровья', () => {
  const inputArray = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const outputArray = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(sortLivesHeroes(inputArray)).toEqual(outputArray);
});