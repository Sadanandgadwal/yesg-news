import React from "react";
import useFetch from "../../data/usefetch";
import Newslist from "../cards/Newslist";
import Heading from "../heading/heading";

const Entertainment = () => {
  const apikey = "b5efc40025d94bfcbf8f87e0dcc082bd";
  const entertainmentnewsurl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=entertainment`;

  const [data, loading] = useFetch(entertainmentnewsurl);

  return (
    <div>
      <div className="container py-4 py-xl-5 pt-xl-4">
        <Heading title={"News"} loading={loading} />
        <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
          <Newslist news={data} />
        </div>
      </div>
    </div>
  );
};

export default Entertainment;
