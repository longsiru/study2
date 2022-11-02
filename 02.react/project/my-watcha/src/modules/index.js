import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import common, { commonSaga } from "./common";
import movie, { movieSaga } from "./movie";
import movieDetail, { movieDetailSaga } from "./movieDetail";
import loading from "./loading";

const rootReducer = combineReducers({
  common,
  movie,
  movieDetail,
  loading,
});

export function* rootSaga() {
  // all 함수는 여러 사가를 합쳐주는 역할을 합니다.
  yield all([commonSaga(), movieSaga(), movieDetailSaga()]);
}

export default rootReducer;
