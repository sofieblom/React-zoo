import { createContext } from "react";
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

export const AnimalContext = createContext(animal);
