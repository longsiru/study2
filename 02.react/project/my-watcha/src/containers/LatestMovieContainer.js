import React from "react";
import { connect } from "react-redux";
import LatestMovie from "../components/LatestMovie";
import { getLatest } from "../modules/movie";
import useApi from "../hooks/useApi";

const LatestmovieContainer = ({ getLatest, latest, loading }) => {
  useApi(getLatest);
  // useEffect(() => {
  //   const fn = async () => {
  //     try {
  //       await getLatest();
  //     } catch (e) {
  //       console.log(e); // 에러 조회
  //     }
  //   };
  //   fn();
  // }, [getLatest]);
  return <LatestMovie latest={latest} loading={loading} />;
};

export default connect(
  ({ movie, loading }) => ({
    latest: movie.latest,
    loading: loading["movie/GET_UPCOMING"],
  }),
  {
    getLatest,
  }
)(LatestmovieContainer);
