import Character from '../character';
import Team from '../team';

test('class Team add error test', () => {
  const bowman = new Character('Alex', 'Bowman');
  const team = new Team();
  team.add(bowman);
  expect(() => team.add(bowman)).toThrowError(new Error('Такой персонаж уже есть в команде'));
});

test('class Team addAll error test', () => {
  const swordsman = new Character('Alex', 'Swordsman');
  const magician = new Character('Alex', 'Magician');
  const daemon = new Character('Alex', 'Daemon');
  const team = new Team();
  team.addAll(swordsman, magician, daemon, daemon);
  expect(team.members).toEqual(new Set([swordsman, magician, daemon]));
});

test('class Team toArray test', () => {
  const swordsman = new Character('Alex', 'Swordsman');
  const magician = new Character('Alex', 'Magician');
  const daemon = new Character('Alex', 'Daemon');
  const team = new Team();
  team.addAll(swordsman, magician, daemon, daemon);
  expect(team.toArray()).toEqual([swordsman, magician, daemon]);
});
