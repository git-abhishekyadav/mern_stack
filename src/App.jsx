import { useState } from "react";
import Header from "./components/header/Header";
import { newsData } from "./utils/data";
import NewsList from "./components/NewsList";

const App = () => {
    let [news, setNews] = useState(newsData);
    return (
         <>
        <Header />
        <div className="container">
            <NewsList news={news} />
        </div>
    </>
    )
}
   


export default App;