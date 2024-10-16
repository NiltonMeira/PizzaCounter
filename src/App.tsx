import { useState, useEffect } from "react";
import pizza from './assets/sushi.png';

export const App = () => {
  const [pizzas, setPizzas] = useState(0);
  const [first, setFirst] = useState(true);

  useEffect(() => {
    const x = localStorage.getItem("pizza");
    if (x !== null) {
      const parsedData = JSON.parse(x);
      setPizzas(parsedData.pizzas);
    }
    setFirst(false);
  }, []);

  useEffect(() => {
    if (!first) {
      localStorage.setItem("pizza", JSON.stringify({ pizzas }));
    }
  }, [pizzas, first]);

  const handlePizza = () => {
    setPizzas(pizzas + 1);
  };

  return (
    <div className="flex w-screen justify-center items-center flex-col gap-10">
      <button className="border border-white top-5 right-4 w-20 fixed" onClick={() => setPizzas(0)}>
        Reset
      </button>
      <h1>Sushi: {pizzas}</h1>
      <button onClick={handlePizza} className="mx-5">
        <img src={pizza} alt="" />
      </button>
    </div>
  );
};
