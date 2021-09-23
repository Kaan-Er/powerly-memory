import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import question from "../assets/img/animals/question.png";
import { useSelector } from "react-redux";

export default function MediaCard({ name, id, select }) {
  const image = require(`../assets/img/animals/${name}.png`);
  const foundAnimals = useSelector((state) => state.animals.foundAnimals);
  var isFound = foundAnimals.includes(name);
  const selectedFirstAnimal = useSelector(
    (state) => state.animals.selectedFirstAnimal
  );
  const selectedSecondAnimal = useSelector(
    (state) => state.animals.selectedSecondAnimal
  );

  return (
    <Card
      className="animal-card"
      onClick={() => {
        if (!selectedSecondAnimal.name && !isFound) {
          select(id, name);
        }
      }}
    >
      <CardActionArea>
        <CardMedia
          className="animal-card-media"
          image={
            isFound ||
            selectedFirstAnimal.id === id ||
            selectedSecondAnimal.id === id
              ? image.default
              : question
          }
          title="Don't Forget :)"
        />
      </CardActionArea>
    </Card>
  );
}
