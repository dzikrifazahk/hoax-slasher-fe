import styles from "../styles/news.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faClock, faUser, faComment } from "@fortawesome/free-solid-svg-icons";

interface ArticleCardProps {
  imageUrl: string;
  title: string;
  author: string;
  createdAt: string;
  sumComment?: number;
  description: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  imageUrl,
  title,
  author,
  createdAt,
  sumComment = 0,
  description,
}) => {
  return (
    <div className="max-w-md mx-auto overflow-hidden">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className=" w-40 h-40 object-cover md:w-40"
            src={imageUrl}
            alt=""
          />
        </div>
        <div className="ml-4">
          <div className="text-md font-semibold">{title}</div>
          <div className="block mt-1 text-sm leading-tight">
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
          </div>
          <p className="mt-2 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
