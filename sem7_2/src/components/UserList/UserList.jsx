import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../../reduce/UserReduce"

export default function UserList() {
    const { users, loading, error } = useSelector(state => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers(3))
        // dispatch(fetchUsers())
    }, [dispatch])

    const showUsers = () => {
        if (users.length > 0) {
            return users.map(user => <p key={user.id}>{user.name}</p>) || <p>{users}</p>
        } else {
            return <p>{users.name}</p>
        }
    }
    return <>
        <h3>Users</h3>
        {loading && <p>Загрузка...</p>}
        {error && <p>Ошибка: {error}</p>}
        {showUsers()}
    </>
}