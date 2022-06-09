export interface IAnimal {
  id: number;
  name: string;
  shortDescription: string;
  imageUrl: string;
}

export interface IExtendAnimal {
  animal: IAnimal;
  isFed: boolean;
  lastFed: string;
  longDescription: string;
}
