import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsersRequest } from "../../reduce/UserReduce"

export default function UserList() {
    const { users, loading, error } = useSelector(state => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsersRequest())
    }, [dispatch])
    return <>
        <h3>Users</h3>
        {loading && <p>Загрузка...</p>}
        {error && <p>Ошибка: {error}</p>}
        {users.map(user => <p key={user.id}>{user.name}</p>)}
    </>
}