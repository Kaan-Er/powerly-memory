import { Box } from "@material-ui/core";
import MediaCard from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  addFoundAnimals,
  clearFirstAnimal,
  clearFoundAnimals,
  clearSecondAnimal,
  setAnimals,
  setFirstAnimal,
  setSecondAnimal,
} from "../features/animals/animalSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useSound from "use-sound";
import correct from "../assets/sounds/correct.wav";
import incorrect from "../assets/sounds/incorrect.wav";

const Main = () => {
  const animals = useSelector((state) => state.animals.animals);
  const foundAnimals = useSelector((state) => state.animals.foundAnimals);
  const selectedFirstAnimal = useSelector(
    (state) => state.animals.selectedFirstAnimal
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (foundAnimals.length == 12) {
      notify();
      setTimeout(function () {
        dispatch(setAnimals());
        dispatch(clearFirstAnimal());
        dispatch(clearSecondAnimal());
        dispatch(clearFoundAnimals());
      }, 3000);
    }
  }, [foundAnimals]);

  const handleClick = (id, name) => {
    // first selected
    if (!selectedFirstAnimal.name) {
      dispatch(setFirstAnimal({ id, name }));
      return;
    }
    dispatch(setSecondAnimal({ id, name }));
    // found same animals
    if (selectedFirstAnimal.name === name && id !== selectedFirstAnimal.id) {
      dispatch(addFoundAnimals(name));
      dispatch(clearFirstAnimal());
      dispatch(clearSecondAnimal());
      Correct();
      return;
    }
    Incorrect();
    // not found same animals
    setTimeout(function () {
      dispatch(clearFirstAnimal());
      dispatch(clearSecondAnimal());
    }, 500);
  };

  const [Correct] = useSound(correct, { volume: 3 });
  const [Incorrect] = useSound(incorrect, { volume: 3 });

  const notify = () => {
    toast.success("🦄 Wow so easy!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="main-wrapper">
      <div className="main-section">
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          maxWidth="1020px"
          height="100%"
        >
          {animals.map((animal, index) => (
            <MediaCard
              key={index}
              id={index}
              name={animal}
              select={handleClick}
            />
          ))}
        </Box>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Main;
