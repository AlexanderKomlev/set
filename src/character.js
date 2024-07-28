export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя персонажа должно быть от 2 до 10 символов');
    }
    if (!this.types.includes(type)) {
      throw new Error('Тип персонажа должен быть одним из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
    }

    this.name = name;
    this.type = type;

    this.health = 100;
    this.level = 1;

    this.attack = undefined;
    this.defence = undefined;
  }
}

Character.prototype.types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
