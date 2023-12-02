import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faClock } from "@fortawesome/free-solid-svg-icons";

interface EventCardProps {
  imageUrl: string;
  title: string;
  date: string;
  description: string;
}

const EventCard: React.FC<EventCardProps> = ({
  imageUrl,
  title,
  date,
  description,
}) => {
  return (
    <div className="max-w-md mx-auto overflow-hidden">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img className="w-40 h-30" src={imageUrl} alt="" />
        </div>
        <div className="ml-4">
          <div className="text-md font-semibold">{title}</div>
          <p className="text-sm">{description}</p>
          <div className="block mt-1 text-sm leading-tight">
            <span className="text-gray-500 text-sm text-end">
              <FontAwesomeIcon
                icon={faClock}
                style={{ fontSize: 13, color: "gray" }}
              />
              <span className="p-1">date {date}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
