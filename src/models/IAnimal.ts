export interface IAnimal {
  id: number;
  name: string;
  shortDescription: string;
  imageUrl: string;
}

export interface IExtendAnimal {
  name: string;
  shortDescription: string;
  imageUrl: string;
  isFed: boolean;
  lastFed: string;
  longDescription: string;
}
