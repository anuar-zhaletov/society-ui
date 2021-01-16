export class Demographic {
  totalPopulation: number;
  manPercentage: number;
  womanPercentage: number;
  numberOfChildren: number;
  numberOfAdult: number;
  happinessPercentage: number;
  politicalSystem: string;
  born: number;
  died: number;
  killed: number;
  educationLevelPercentage: number;
  educationSystem: number;
  moralityPercentage: number;
  totalPower: number;
  constructor(payload: any) {
    this.totalPopulation = payload.totalPopulation;
    this.manPercentage = payload.manPercentage;
    this.womanPercentage = payload.womanPercentage;
    this.numberOfChildren = payload.numberOfChildren;
    this.numberOfAdult = payload.numberOfAdult;
    this.happinessPercentage = payload.happinessPercentage;
    this.politicalSystem = payload.politicalSystem;
    this.born = payload.born;
    this.died = payload.died;
    this.killed = payload.killed;
    this.educationLevelPercentage = payload.educationLevelPercentage;
    this.educationSystem = payload.educationSystem;
    this.moralityPercentage = payload.moralityPercentage;
    this.totalPower = payload.totalPower;
  }
}
