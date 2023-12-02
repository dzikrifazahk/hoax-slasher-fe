import Link from "next/link";
import ArticleCard from "../article_card";
import EventCard from "../event_card";

interface Article {
  imageUrl: string;
  title: string;
  author: string;
  date: string;
  description: string;
}

const EventList: React.FC = () => {
  const eventData: Article[] = [
    {
      imageUrl: "/article/image-1.png",
      title:
        "4 Manfaat Rutin Minum Air Rebusan Jahe, Kunyit, dan Serai, Apa Saja?",
      author: "Rizal Setyo Nugroho",
      date: "Novevember 24, 2023",
      description:
        "Jahe, kunyit, dan serai adalah rempah-rempah berkhasiat yang banyak ditemukan di Indonesia. Biasanya, rempah-rempah ini digunakan untuk memberi rasa pada masakan.",
    },
    {
      imageUrl: "/news/Image-1.png",
      title: "KPK Duga Ada Pengurusan Terselubung dalam Dugaan Suap",
      author: "Defa Nugraha",
      date: "Novevember 24, 2023",
      description:
        "Jahe, kunyit, dan serai adalah rempah-rempah berkhasiat yang banyak ditemukan di Indonesia. Biasanya, rempah-rempah ini digunakan untuk memberi rasa pada masakan.",
    },
  ];

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="font-bold text-lg">Event</h2>

      {/* event */}
      <div className="mt-3 ml-4">
        <span>event workshop (3)</span>
        {/* {eventData.map((article, index) => (
          <div key={index}>
            
          </div>
        ))} */}
        <div className="mx-auto">
          <div>
            <Link href="">
              <div className="mt-3">
                <EventCard
                  imageUrl="/event/image-1.png"
                  title="Membangun Partai dari nol"
                  date="24/11/2023 16:40"
                  description="Bagaimana cara untuk membangun sebuah partai dengan planing 10 tahun kedepan bakal jadi partai sukses"
                />
              </div>
            </Link>
            <Link href="">
              <div className="mt-3">
                <EventCard
                  imageUrl="/event/image-2.png"
                  title="Demokrasi Digital: Peran Teknologi dalam Proses Politik Modern"
                  date="24/11/2023 14:40"
                  description="Melibatkan peserta dalam diskusi tentang peran teknologi dalam membentuk dan mengubah proses politik"
                />
              </div>
            </Link>
            <Link href="">
              <div className="mt-3">
                <EventCard
                  imageUrl="/event/image-3.png"
                  title="Diplomasi Politik: Strategi dan Tren Global"
                  date="24/11/2023 10:40"
                  description="Bagaimana cara untuk membangun sebuah partai dengan planing 10 tahun kedepan bakal jadi partai sukses"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventList;
