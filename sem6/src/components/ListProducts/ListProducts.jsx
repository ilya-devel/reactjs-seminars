import { useDispatch, useSelector } from "react-redux"
import StarIcon from '@mui/icons-material/Star';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from "@mui/material"
import './ListProducts.sass'
import { removeProduct } from "../../reduce/ProductReduce";



export default function ListProduct() {
    const { products } = useSelector(state => state)
    const dispatch = useDispatch()


    return <div className="lstProducts">
        <h4>Список продуктов</h4>
        <div className="lstProducts">
            {
                products.map(product => <div className="product" key={product.id}>
                    <div className="name">{product.name}</div>
                    <div className="buttons">
                        <IconButton aria-label='toggle favorite' onClick={() => dispatch()}>
                            <StarIcon />
                        </IconButton>
                        <IconButton aria-label='remove product' onClick={() => dispatch(removeProduct(product.id))}>
                            <DeleteIcon />
                        </IconButton>
                    </div>
                </div>)
            }
        </div>
    </div>
}