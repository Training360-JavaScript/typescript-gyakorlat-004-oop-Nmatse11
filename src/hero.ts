import { IHuman } from './hero-interface';

/**
 * Állítsd be helyesen a HumanHero osztályt!
 * Ez az IHuman interfészt implementálja.
 * Neve: HumanHero
 * Deklaráld benne az interfész által megkövetelt változókat.
 * Definiáld a konstruktort és kérj be minden változót, majd állítsd be őket.
 */
export class HumanHero implements IHuman {
  id: number;
  name: string;
  sex: string;
  age: number;
  health: number;
  photo?: string;
  constructor(theId: number, theName: string, theSex: string, theAge: number, theHealt: number, thePhoto?: string) {
    this.id = theId;
    this.name = theName;
    this.sex = theSex;
    this.age = theAge;
    this.health = theHealt
    this.photo = thePhoto
  }

}
