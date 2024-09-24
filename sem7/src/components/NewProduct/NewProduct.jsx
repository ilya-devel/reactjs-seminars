import { TextField, Button } from "@mui/material"
import './NewProduct.sass'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addProduct } from "../../reduce/ProductReduce"

export default function NewProduct() {
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [price, setPrice] = useState(0)

    const dispatch = useDispatch()

    const addNewProduct = () => {
        if (name !== '' && desc !== '' && +price > 0) {
            dispatch(addProduct({
                name: name,
                desc: desc,
                price: price
            }))
            setName('')
            setDesc('')
            setPrice(0)
        }
    }

    return <div className="newProduct">
        <TextField label="Имя продукта" variant="outlined" value={name} onChange={e => setName(e.target.value)} />
        <TextField label="Описание продукта" variant="outlined" value={desc} onChange={e => setDesc(e.target.value)} />
        <TextField label="Цена продукта" variant="outlined" value={price} onChange={e => setPrice(e.target.value)} />
        <Button variant="outlined" onClick={addNewProduct}>Добавить</Button>
    </div>
}