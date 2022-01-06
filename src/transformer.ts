import { ITransformer } from './hero-interface';

/**
 * Állítsd be helyesen a TransformerHero osztályt!
 * Ez az ITransformer interfészt implementálja.
 * Neve: TransformerHero
 * Deklaráld benne az interfész által megkövetelt változókat.
 * Definiáld a konstruktort és kérj be minden változót, majd állítsd be őket.
 */
export class TransformerHero implements ITransformer {
  id: number;
  name: string;
  wings: number;
  wheels: number;
  clan: string;
  photo?: string;
  constructor(theId: number, theName: string, theWings: number, theWheels: number, theClan: string, thePhoto?: string) {
    this.id = theId;
    this.name = theName;
    this.wings = theWings;
    this.wheels = theWheels;
    this.clan = theClan
    this.photo = thePhoto
  }

}
