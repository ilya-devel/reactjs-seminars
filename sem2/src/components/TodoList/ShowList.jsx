const ShowList = ({ lst }) => {
    return lst.map((task, index) => <div key={index}>{task}</div>)
}

export default ShowList