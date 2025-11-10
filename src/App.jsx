import { useState } from "react";
import Header from "./components/header/Header";
import { newsData } from "./utils/data";
import NewsList from "./components/NewsList";

const App = () => {
  let [news, setNews] = useState(newsData);

  const getKeywords = (ev) => {
    let keywords = ev.target.value;
    let filtered = newsData.filter((item) => item.title.includes(keywords));

    setNews(filtered);
  };

  return (
    <>
      <Header getKeywords={getKeywords} />
      <div className="container">
        <NewsList news={news} />
      </div>
    </>
  );
};

export default App;
