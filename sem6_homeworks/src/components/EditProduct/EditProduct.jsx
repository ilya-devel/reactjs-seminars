import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button, TextField, FormControlLabel, Card, Modal, Checkbox } from '@mui/material';
import { addProduct, updateProduct } from '../../redux/reduces/ProductReduces';

export default function EditProduct(props) {
    const { open, product, setProduct } = props
    const dispatch = useDispatch()
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        padding: '5px',
    };

    const closeWindow = () => {
        open.closeShowEdit()
    }

    const operationWithProduct = () => {
        console.log(product)
        if (product.id) {
            dispatch(updateProduct(product))
        } else {
            dispatch(addProduct(product))
        }
        closeWindow()
    }


    return <>
        <Modal
            open={open.showEditProduct}
            onClose={() => closeWindow()}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Card sx={{ ...style, width: 400, display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <TextField id="name" label="Имя товара" variant="outlined" value={product.name} onChange={(e) => setProduct((prev) => {
                    return {
                        ...prev,
                        name: e.target.value
                    }
                })} />
                <TextField id="desc" label="Описание" variant="outlined" value={product.desc} onChange={(e) => setProduct((prev) => {
                    return {
                        ...prev,
                        desc: e.target.value
                    }
                })} />
                <TextField id="price" type='number' label="Цена" variant="outlined" value={product.price} onChange={(e) => setProduct((prev) => {
                    return {
                        ...prev,
                        price: e.target.value
                    }
                })} />

                <FormControlLabel control={<Checkbox checked={product.available} onChange={(e) => setProduct((prev) => {
                    console.log(product.available)
                    return {
                        ...prev,
                        available: e.target.checked
                    }
                })} />} label="Available" />


                <Button variant='outlined' onClick={() => operationWithProduct()}>Сохранить</Button>
            </Card>
        </Modal>
    </>
}

EditProduct.propTypes = {
    open: PropTypes.object.isRequired,
    product: PropTypes.object.isRequired,
    setProduct: PropTypes.func.isRequired
}