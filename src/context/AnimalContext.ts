import axios from "axios";
import { create } from "domain";
import { createContext, useContext } from "react";
import { IAnimal } from "../models/IAnimal";

export const animal: IAnimal = {
  id: 0,
  name: "",
  imageUrl: "",
  shortDescription: "",
  isFed: false,
  lastFed: "",
  longDescription: "",
  yearOfBirth: 0,
};

// const getAnimals = async () => {
//   const result = await fetch("https://animals.azurewebsites.net/api/animals");
//   const animals = await result.json();
//   return animals;
// };

// const animalList: IAnimal[] = getAnimals();

// interface IAnimalContext {
//   animals: IAnimal[];
//   setAnimals(): void;
// }

// export const AnimalContext = createContext<IAnimalContext>({
//   animals: animalList,
//   setAnimals: () => {},
// });

// export const UseAnimalContext = useContext(AnimalContext);

export const AnimalContext = createContext(animal);
