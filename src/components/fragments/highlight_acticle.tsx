import NewsCard from "../card_news";

export default function HighlightArticleCard() {
  return (
    <div className="bg-white rounded shadow-lg p-6 relavive">
      <h1 className="font-bold text-lg">Highlight Article</h1>
      <div className="mt-10">
        <NewsCard
          imageUrl="news/Image-1.png"
          title="Ini dia bakal Capres 2024"
          author="Dzikri Faza H"
          timeAgo="5 Minutes Ago"
          highlight={true}
          createdAt="November 24, 2023"
        />
      </div>
    </div>
  );
}
