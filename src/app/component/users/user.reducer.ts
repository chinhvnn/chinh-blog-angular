import { createReducer, on } from '@ngrx/store'
import { UserAction } from './user.action'

export const initialState = {
  isLoading: true,
  users: [],
  user: {},
}

export const userReducer = createReducer(
  initialState,
  on(UserAction.GetUserSuccess, (state: any, action) => {
    return { ...state, isLoading: false, user: action.payload.data } as any
  }),
  on(UserAction.GetUserFail, (state: any, action) => {
    return { ...state, user: {} } as any
  }),
)
