import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import SimilarMovie from "../components/SimilarMovie";
import { getSimilar } from "../modules/movieDetail";
import useApi from "../hooks/useApi";

const SimilarMovieContainer = ({ getSimilar, similar, loading }) => {
  const { id } = useParams();
  useApi(getSimilar, id);
  // useEffect(() => {
  //   const fn = async () => {
  //     try {
  //       await getSimilar(id);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   fn();
  // }, [getSimilar, id]);
  return <SimilarMovie similar={similar} loading={loading} />;
};

export default connect(
  ({ movieDetail, loading }) => ({
    similar: movieDetail.similar,
    loading: loading["movieDetail/GET_SIMILAR"],
  }),
  {
    getSimilar,
  }
)(SimilarMovieContainer);
