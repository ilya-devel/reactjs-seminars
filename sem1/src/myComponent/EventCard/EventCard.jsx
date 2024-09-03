import './style.css'

export const EventCard = (props) => {
    return <div className='card'>
        <p>Title: <span>{ props.title }</span></p>
        <p>Date: <span>{ props.date }</span></p>
        <p>Place: <span>{ props.place }</span></p>
    </div>
}