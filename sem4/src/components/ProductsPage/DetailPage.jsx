import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'

export default function DetailPage() {
    const { id } = useParams()
    const [character, setCharacter] = useState([])
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => res.json())
            .then(data => setCharacter(data))
            .catch(err => console.log(err))
    }, [id])
    return <>
        <NavBar />
        <h2>{character.name}</h2>
        <p><Link to={character.url}>Original page</Link></p>
    </>
}