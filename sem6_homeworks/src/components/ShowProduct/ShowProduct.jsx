import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function ShowProduct(props) {
    const { open, product } = props
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        padding: '5px'
    };

    return <>
        <Modal
            open={open.showProduct}
            onClose={() => open.closeShow()}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Card sx={{ ...style, maxWidth: 345 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {product.desc}
                    </Typography>
                    {product.available ? <><br /><Typography variant='body2' sx={{ color: 'green', textAlign: 'right' }}>
                        Цена {product.price} р.
                    </Typography></> : <><br /><Typography variant='body2' sx={{ color: 'red', textAlign: 'right' }}>
                        Продукт не доступен
                    </Typography></>}
                </CardContent>
            </Card>
        </Modal>
    </>
}

ShowProduct.propTypes = {
    open: PropTypes.object.isRequired,
    product: PropTypes.object.isRequired
}