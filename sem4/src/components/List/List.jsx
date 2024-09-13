import PropTypes from 'prop-types'

export default function List({ lstItems = [], getColor }) {
    const renderItems = (lst) => {
        return lst.map((item, key) => <li key={key} style={{ color: getColor() }}>{item}</li>)
    }
    return <>
        <ul>
            {renderItems(lstItems)}
        </ul>
    </>
}

List.propTypes = {
    lstItems: PropTypes.array.isRequired,
    getColor: PropTypes.func.isRequired
}