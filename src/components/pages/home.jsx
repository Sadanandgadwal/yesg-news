import React, { useEffect, useState } from "react";
import Newslist from "../cards/Newslist";
import Heading from "../heading/heading";
import useFetch from "../../data/usefetch";

const Home = () => {
  const apikey = "b5efc40025d94bfcbf8f87e0dcc082bd";
  const apiurl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}`;

  const [data, loading] = useFetch(apiurl);

  return (
    <>
      <div className="container py-4 py-xl-5 pt-xl-4">
        <Heading title={"News"} loading={loading} />
        <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
          <Newslist news={data} />
        </div>
      </div>
    </>
  );
};

export default Home;
