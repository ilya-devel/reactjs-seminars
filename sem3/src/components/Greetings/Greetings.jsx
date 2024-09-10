import PropTypes from 'prop-types'

export const Greetings = ({ name, age }) => {
    return <>
        <h3>Hello {name}, age = {age}</h3>
    </>
}

Greetings.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
}


