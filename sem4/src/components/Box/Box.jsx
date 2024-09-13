import './Box.sass'
import PropTypes from 'prop-types'

export default function Box({ children }) {
    if (children) {
        return <div className="boxComponent">
            {children}
        </div>
    } else {
        return null
    }
}

Box.propTypes = {
    children: PropTypes.node
}