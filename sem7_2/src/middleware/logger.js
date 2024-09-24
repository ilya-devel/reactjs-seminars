export const logger = (store) => (next) => (action) => {
    console.log('dispatch: ', action)
    console.log('before store: ', store.getState())
    const result = next(action)
    console.log('after store', store.getState())
    return result
}