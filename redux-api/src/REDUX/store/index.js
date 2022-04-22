import { configureStore } from '@reduxjs/toolkit'

//REDUCERS

import users from '../slices/users/index'

export default configureStore({
    reducer: {
        users
    }
})