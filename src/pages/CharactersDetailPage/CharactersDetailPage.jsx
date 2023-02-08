import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/Card/Card";

export default function CharactersDetailPage() {
  const { id } = useParams();

  const [character, setCharacter] = useState({name: "Pepe"});

  const getCharacter = async () => {
    const res = await axios.get("https://api.disneyapi.dev/characters/" + id);

    console.log(res);

    setCharacter(res.data);
  };

  useEffect(() => {
    getCharacter();
  }, []);

  return (
      <Card data={character}></Card>
  );
}
