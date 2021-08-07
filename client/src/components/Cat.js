import { useState, useEffect } from "react";
const Cat = ({ animalId }) => {
  const [animal, setAnimal] = useState("");
  useEffect(() => {
    if (!animal) {
      fetch("/animals/" + animalId)
        .then((res) => res.json())
        .then((animalObj) => {
          setAnimal(animalObj);
        });
    }
  }, [animal, animalId]);

  return (
    <div>
      {animal ? (
        <div className="title-wrapper">
        <div className="title">
          <h1>{animal[0].name}</h1>
          {/* <div>
            <p>{animal[0].description}</p>
          </div> */}
        </div>
        </div>
      ) : (
        <p></p>
      )}
      <div className="photoGal">
      {animal ? (
        animal[0].photos.map((photo, index) => (
          <div className="photo-wrap" key={index}>
            <img className="photo"  src={photo} alt={photo} />
          </div>
        ))
      ) : (
        <p></p>
      )}
      </div>
    </div>
  );
};
export default Cat;
