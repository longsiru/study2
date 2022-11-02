import React from "react";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import Slider from "./card/SliderSwiper";
import Card from "./card/Card";

const Base = styled.div`
  margin-bottom: 42px;
`;

const Title = styled.h4`
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  padding: 12px 0 14px;
`;

const NowPlayingMovie = ({ nowPlaying, loading }) => {
  const getYear = (release_date) => release_date.split("-")[0] || "";

  return (
    <Base>
      <Title>현재 상영중</Title>
      {loading ? (
        <div>Loading...</div>
      ) : (
        nowPlaying && (
          <Slider>
            {nowPlaying.results.map((movie) => (
              <SwiperSlide key={movie.id}>
                <Card
                  key={movie.id}
                  linkUrl={`/movie/${movie.id}`}
                  title={movie.title}
                  posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}/${movie.poster_path}`}
                  voteAverage={movie.vote_average}
                  year={getYear(movie.release_date)}
                />
              </SwiperSlide>
            ))}
          </Slider>
        )
      )}
    </Base>
  );
};

export default NowPlayingMovie;
