import NewsListItem from "./NewsListItem";

const NewsList = (props) => {
  const news = props.news.map((item) => (
    <NewsListItem item={item} key={item.id} />
  ));

  return <>{news}</>;
};

export default NewsList;
