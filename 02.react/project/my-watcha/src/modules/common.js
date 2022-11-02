import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import * as api from "../lib/api";
import createRequestSaga from "../lib/createRequestSaga";

// 액션 타입
const GET_SEARCH = "common/GET_SEARCH";
const GET_SEARCH_SUCCESS = "common/GET_SEARCH_SUCCESS";
const GET_SEARCH_INIT = "common/GET_SEARCH_INIT";

//액션 생성 함수
export const getSearch = createAction(GET_SEARCH, (query) => query);
export const getSearchInit = createAction(GET_SEARCH_INIT);

//saga함수
const getSearchSaga = createRequestSaga(GET_SEARCH, api.getSearch);

export function* commonSaga() {
  yield takeLatest(GET_SEARCH, getSearchSaga);
}

const initialState = {
  search: null,
};

const common = handleActions(
  {
    [GET_SEARCH_SUCCESS]: (state, action) => ({
      ...state,
      search: action.payload,
    }),
    [GET_SEARCH_INIT]: (state, action) => ({
      ...state,
      search: null,
    }),
  },
  initialState
);

export default common;
