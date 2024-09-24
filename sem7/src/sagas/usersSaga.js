import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchUsersFailure, fetchUsersRequest, fetchUsersSuccess } from '../reduce/UserReduce';

async function fetchUsersApi() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!response.ok) {
        throw new Error('Something do wrong')
    } else {
        return await response.json()
    }
}

function* fetchUsers() {
    try {
        const users = yield call(fetchUsersApi)
        yield put(fetchUsersSuccess(users))
    } catch (error) {
        yield put(fetchUsersFailure(error))
    }
}

function* usersSaga() {
    yield takeEvery(fetchUsersRequest.type, fetchUsers);
}

export default usersSaga