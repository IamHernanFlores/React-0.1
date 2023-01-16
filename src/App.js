import Form from "./form";
import "./styles.css";

const movies = [
  {
    name: "Spyder man",
    available: 5
  },
  {
    name: "Batman",
    available: 2
  }
];

export default function App() {
  return (
    <div>
      <h2> Peliculas </h2>
      {movies.map((movie) => (
        <Form movie={movie} />
      ))}
    </div>
  );
}
