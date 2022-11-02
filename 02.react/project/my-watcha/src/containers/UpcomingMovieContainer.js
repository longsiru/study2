import React from "react";
import { connect } from "react-redux";
import UpComingMovie from "../components/UpComingMovie";
import { getUpcoming } from "../modules/movie";
import useApi from "../hooks/useApi";

const UpcomingMovieContainer = ({ getUpcoming, upcoming, loading }) => {
  useApi(getUpcoming);
  // useEffect(() => {
  //   const fn = async () => {
  //     try {
  //       await getUpcoming();
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   fn();
  // }, [getUpcoming]);
  return <UpComingMovie upcoming={upcoming} loading={loading} />;
};

export default connect(
  ({ movie, loading }) => ({
    upcoming: movie.upcoming,
    loading: loading["movie/GET_LATEST"],
  }),
  {
    getUpcoming,
  }
)(UpcomingMovieContainer);
