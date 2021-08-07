import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [animals, setAnimal] = useState("");

  useEffect(() => {
    console.log("in use effect")
    if (!animals) {
      console.log("in if statement")
      fetch("/animals/all")
        .then((res) => res.json())
        .then((animalColl) => {
          console.log("in fetch")
          setAnimal(animalColl);
        });
    }
  }, [animals]);
  console.log(animals);
  return (
    <div>
      <h1 className="title">Critters of our life</h1>
      <div className="animal-links">
        {animals ? (
          animals.map((animal, index) => (
            <div key={index} className="animal-list-item-wrap">
              <Link to={"/animals/" + animal.id} className="animal-list-item">
                <h3>{animal.name}</h3>
                <div className="animal-img-item-wrap">
                  <img src={animal.photos[0]} alt={animal.name} />
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default Home;
