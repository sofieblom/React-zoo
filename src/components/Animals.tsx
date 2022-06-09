import axios from "axios";
import { useEffect, useState } from "react";

export const Animals = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    if (animals.length !== 0) return;

    axios
      .get("https://animals.azurewebsites.net/api/animals")
      .then((response) => {
        setAnimals(response.data);
      });
  }, []);

  console.log(animals);

  return <>Animals components works</>;
};
