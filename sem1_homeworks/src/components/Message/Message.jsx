import './Message.css'

function color() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}

// eslint-disable-next-line react/prop-types
export const Message = ({ message }) => {
    if (message) {
        return <p className='my-component' style={{ color: color() }}>{message}</p>
    } else {
        return null
    }
}