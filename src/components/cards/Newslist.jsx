import React from "react";
import Card from "./Card";

const Newslist = ({ news }) => {
  return (
    news &&
    news.map((article) => (
      <Card
        key={article.title}
        headings={article.title}
        imgUrl={article.urlToImage}
        description={article.description}
        content={article.content}
        url={article.url}
      />
    ))
  );
};

export default Newslist;
