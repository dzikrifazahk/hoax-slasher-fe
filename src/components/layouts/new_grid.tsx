import HighlightArticleCard from "../fragments/highlight_acticle";
import LatestNewsCard from "../fragments/latest_news";

const NewsGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-10 relavive">
      <div className="col-span-2">
        <LatestNewsCard />
      </div>
      <div>
        <HighlightArticleCard />
      </div>
    </div>
  );
};

export default NewsGrid;
