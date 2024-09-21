import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';
import PreviewIcon from '@mui/icons-material/Preview';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import ShowProduct from '../ShowProduct/ShowProduct';
import EditProduct from '../EditProduct/EditProduct';
import { useState } from 'react';
import { removeProduct } from '../../redux/reduces/ProductReduces';


export default function LstProducts() {
    const products = useSelector((state) => state.products)
    const dispatch = useDispatch()
    const [viewProduct, setViewProduct] = useState({})
    const [showProduct, setShowProduct] = useState(false)
    const [showEditProduct, setShowEditProduct] = useState(false)

    const sendShow = (product) => {
        setViewProduct(product)
        setShowProduct(!showProduct)
    }

    const sendShowEdit = (product) => {
        setViewProduct(product)
        setShowEditProduct(!showEditProduct)
    }

    const closeShow = () => {
        setShowProduct(!showProduct)
    }
    const closeShowEdit = () => {
        setViewProduct({})
        setShowEditProduct(!showEditProduct)
    }

    return <>
        <h1>Список продуктов</h1>
        <ShowProduct open={{ showProduct, closeShow }} product={viewProduct} />
        <EditProduct open={{ showEditProduct, closeShowEdit }} product={viewProduct} setProduct={setViewProduct}/>
        <Button variant="outlined" onClick={() => sendShowEdit({})}>Добавить новый продукт</Button>
        <Grid container spacing={1} sx={{ marginTop: '20px' }}>
            {products.map(product => {
                return <Grid key={product.id} size={4}>
                    <Card className={product.available ? 'available' : 'notAvailable'}
                        sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%'}}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {product.name}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {product.desc}
                                </Typography>
                            </CardContent>
                            <div>
                                {product.available ? <><br /><Typography variant='body2' sx={{ color: 'green', textAlign: 'right' }}>
                                    Цена {product.price} р.
                                </Typography></> : <><br /><Typography variant='body2' sx={{ color: 'red', textAlign: 'right' }}>
                                    Продукт не доступен
                                </Typography></>}
                            </div>
                        </div>
                        <CardActions>
                            <IconButton onClick={() => sendShow(product)}>
                                <PreviewIcon />
                            </IconButton>
                            <IconButton onClick={() => sendShowEdit(product)}>
                                <EditIcon />
                            </IconButton>
                            <IconButton onClick={() => dispatch(removeProduct(product.id))}>
                                <DeleteIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>
            })}
        </Grid >
    </>
}