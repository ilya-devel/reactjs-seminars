import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import NavBar from "../NavBar/NavBar"

export default function ListPage() {
    const [characters, setCharacters] = useState([])
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(res => res.json())
            .then(data => setCharacters(data.results))
            .catch(err => console.log(err))
    }, [])

    const showCharacter = () => {
        return characters.map(character => <li key={character.id}><Link to={`/character/${character.id}`}>{character.name}</Link></li>)
    }

    return <>
        <NavBar />
        <ul>
            {showCharacter()}
        </ul>
    </>
}