import styles from "../styles/news.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faClock, faUser, faComment } from "@fortawesome/free-solid-svg-icons";

interface NewsCardProps {
  imageUrl: string;
  title: string;
  author: string;
  timeAgo: string;
  highlight?: boolean;
  createdAt?: string;
  sumComment?: number;
}

const NewsCard: React.FC<NewsCardProps> = ({
  imageUrl,
  title,
  author,
  timeAgo,
  highlight = false,
  createdAt,
  sumComment = 0,
}) => {
  return (
    <div
      className={`bg-white rounded ${highlight ? "w-full" : "w-72"} mr-2 ${
        styles.newsCard
      }`}
    >
      <img
        src={imageUrl}
        alt="News"
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="p-4">
        <h3 className={`text-xl font-semibold mb-2 ${styles.title}`}>
          {title}
        </h3>
        {!highlight && (
          <div className="grid grid-cols-2">
            <span className="text-gray-500 text-sm">
              <FontAwesomeIcon
                icon={faUser}
                style={{ fontSize: 13, color: "gray" }}
              />
              <span className="p-1">{author}</span>
            </span>
            <span className="text-gray-500 text-sm text-end">
              <FontAwesomeIcon
                icon={faClock}
                style={{ fontSize: 13, color: "gray" }}
              />
              <span className="p-1">{timeAgo}</span>
            </span>
          </div>
        )}

        {highlight && (
          <div className="grid grid-cols-6">
            <div className="col-span-2">
              <span className="text-gray-500 text-sm">
                <FontAwesomeIcon
                  icon={faUser}
                  style={{ fontSize: 13, color: "gray" }}
                />
                <span className="p-1">{author}</span>
              </span>
            </div>
            <div className="col-span-3">
              <span className="text-gray-500 text-sm text-end">
                <FontAwesomeIcon
                  icon={faClock}
                  style={{ fontSize: 13, color: "gray" }}
                />
                <span className="p-1">{createdAt}</span>
              </span>
            </div>
            <span className="text-gray-500 text-sm text-end">
              <FontAwesomeIcon
                icon={faComment}
                style={{ fontSize: 13, color: "gray" }}
              />
              <span className="p-1">{sumComment}</span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
