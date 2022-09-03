import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [loading, setloading] = useState(false);
  useEffect(() => {
    let subscribe = true;

    setloading(true);

    if (subscribe) {
      axios
        .get(url)
        .then((res) => {
          setData(res.data.articles);
          setloading(false);
        })
        .catch((e) => {
          console.log(e);
          setloading(false);
        });
    }

    return () => {
      subscribe = false;
    };
  }, [url]);

  return [data, loading];
};

export default useFetch;
