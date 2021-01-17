export class Demographic {
  totalPopulation: number;
  manPercentage: number;
  womanPercentage: number;
  numberOfChildren: number;
  numberOfAdult: number;
  happinessPercentage: number;
  born: number;
  died: number;
  killed: number;
  educationLevelPercentage: number;
  educationSystem: number;
  moralityPercentage: number;
  totalPower: number;
  moralitySystem: number
  constructor(payload: any) {
    this.totalPopulation = payload.totalPopulation;
    this.manPercentage = payload.manPercentage;
    this.womanPercentage = payload.womanPercentage;
    this.numberOfChildren = payload.numberOfChildren;
    this.numberOfAdult = payload.numberOfAdult;
    this.happinessPercentage = payload.happinessPercentage;
    this.born = payload.born;
    this.died = payload.died;
    this.killed = payload.killed;
    this.educationLevelPercentage = payload.educationLevelPercentage;
    this.educationSystem = payload.educationSystem;
    this.moralitySystem = payload.moralitySystem;
    this.moralityPercentage = payload.moralityPercentage;
    this.totalPower = payload.totalPower;
  }
}
