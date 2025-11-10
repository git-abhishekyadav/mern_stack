const NewsListItem = ({item}) => (
  <div className="news_item">
    <h3>{item.title}</h3>
    <p>{item.feed}</p>
  </div>
);

export default NewsListItem;
