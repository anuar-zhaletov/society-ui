export class Human {
  id: number;
  age: number;
  education: number;
  morality: number;
  name: String;
  personality: String;
  power: number;
  sex: String;
  constructor(payload: any) {
    this.id = payload.id;
    this.age = payload.age;
    this.education = payload.education;
    this.morality = payload.morality;
    this.name = payload.name;
    this.personality = payload.personality;
    this.power = payload.power;
    this.sex = payload.sex;
  }
}
