import { IAnimal } from "../models/IAnimal";

const LOCALSTORAGE_KEY = "animals";

export const getAnimals = (): IAnimal[] => {
  let animalsFromLocalStorage = localStorage.getItem(LOCALSTORAGE_KEY) || "[]";
  return JSON.parse(animalsFromLocalStorage);
};

export const save = (animals: IAnimal[]) => {
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(animals));
};
