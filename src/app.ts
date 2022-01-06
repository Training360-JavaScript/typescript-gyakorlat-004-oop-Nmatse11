// Importáld be a HumanHero és TransformerHero osztályokat.
import { HumanHero } from './hero';
import { TransformerHero } from './transformer';

/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: any[] = [
  {
    id: 1,
    name: "John Doe",
    sex: "male",
    age: 34,
    health: 80,
  },
  {
    id: 2,
    name: "Jane Doe",
    sex: "female",
    age: 33,
    health: 85,
  },
  {
    id: 3,
    name: "Jack Doe",
    sex: "male",
    age: 10,
    health: 100,
  }
];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
export const transformers: any[] = [
  {
    id: 1,
    name: "Car1",
    wings: 0,
    wheels: 4,
    clan: "cars",
  },
  {
    id: 2,
    name: "Car2",
    wings: 0,
    wheels: 4,
    clan: "cars",
  },
  {
    id: 3,
    name: "Car3",
    wings: 0,
    wheels: 4,
    clan: "cars",
  }
];
