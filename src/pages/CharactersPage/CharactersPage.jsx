import axios from "axios";
import { useEffect, useState } from "react";
import Gallery from "../../components/Gallery/Gallery";
import Pagination from "../../components/Pagination/Pagination";
import "./CharacterPage.scss";

export default function CharactersPage() {
  const [characters, setCharacters] = useState([]);
  const getCharacters = async (actualPage) => {
    const res = await axios.get("https://api.disneyapi.dev/characters?page=" + actualPage);
    console.log(res.data);
    setCharacters(res.data.data);
  };

  useEffect(() => {
    getCharacters(1);
  }, []);

  return (
    <div className="characterPage">
      <p>Paginador:</p>
      <Pagination onChangePage={getCharacters}></Pagination>
      <p>(pasa de página para mostrar más personajes)</p>
      <Gallery list={characters}></Gallery>
    </div>
  );
}
