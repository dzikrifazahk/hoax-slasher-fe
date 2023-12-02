import Link from "next/link";
import ArticleCard from "../article_card";

interface Article {
  imageUrl: string;
  title: string;
  author: string;
  createdAt: string;
  description: string;
}

const InterestedTopic: React.FC = () => {
  const articleData: Article[] = [
    {
      imageUrl: "/article/image-1.png",
      title:
        "4 Manfaat Rutin Minum Air Rebusan Jahe, Kunyit, dan Serai, Apa Saja?",
      author: "Rizal Setyo Nugroho",
      createdAt: "Novevember 24, 2023",
      description:
        "Jahe, kunyit, dan serai adalah rempah-rempah berkhasiat yang banyak ditemukan di Indonesia. Biasanya, rempah-rempah ini digunakan untuk memberi rasa pada masakan.",
    },
    {
      imageUrl: "/news/Image-1.png",
      title: "KPK Duga Ada Pengurusan Terselubung dalam Dugaan Suap",
      author: "Defa Nugraha",
      createdAt: "Novevember 24, 2023",
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
      <h2 className="font-bold text-lg">Find your interested topic here</h2>
      <div className="grid grid-flow-col auto-cols-max gap-8 mt-3">
        <div className="grid grid-flow-row auto-rows-max gap-2 justify-items-center">
          <Link href="" className="text-center">
            <img src="/trending-img.png" alt="Trending" />
          </Link>
          <span>Trending</span>
        </div>
        <div className="grid grid-flow-row auto-rows-max gap-2 justify-items-center">
          <Link href="">
            <img src="/x-logo.png" alt="X" />
          </Link>
          <span>Twitter</span>
        </div>
        <div className="grid grid-flow-row auto-rows-max gap-2 justify-items-center">
          <Link href="">
            <img src="/statistik.png" alt="" />
          </Link>
          <span>Statistik</span>
        </div>
      </div>

      {/* article start */}
      <div className="mt-8">
        <span>Article here</span>
        {/* {articleData.map((article, index) => (
          <div key={index}>
            
          </div>
        ))} */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <Link href="">
              <div className="mt-3">
                <ArticleCard
                  imageUrl="article/image-1.png"
                  title="4 Manfaat Rutin Minum Air Rebusan Jahe, Kunyit, dan Serai, Apa Saja?"
                  author="Defa Nugraha"
                  createdAt="November, 24, 2023"
                  description="Jahe, kunyit, dan serai adalah rempah-rempah berkhasiat yang banyak ditemukan di Indonesia. Biasanya, rempah-rempah ini digunakan untuk memberi rasa pada masakan."
                />
              </div>
            </Link>
            <Link href="">
              <div className="mt-3">
                <ArticleCard
                  imageUrl="article/image-2.png"
                  title="Muhaimin Ungkap Syarat Jadi Cawapres Anies, jika Menang Harus Dilibatkan Putuskan Apa Pun"
                  author="Rizal Setyo Nugroho"
                  createdAt="November, 24, 2023"
                  description="Muhaimin mengaku bersedia maju sebagai cawapres asalkan jika terpilih dilibatkan dalam proses pengambilan kebijakan negara."
                />
              </div>
            </Link>
            <Link href="">
              <div className="mt-3">
                <ArticleCard
                  imageUrl="article/image-3.png"
                  title="Istana Sebut Pengajuan Cuti Menteri yang Jadi Capres-Cawapres Hanya Perlu Satu Kali ke Presiden"
                  author="Rizal Setyo Nugroho"
                  createdAt="November, 24, 2023"
                  description="Koordinator Staf Khusus Presiden, Ari Dwipayana mengatakan, para menteri yang "
                />
              </div>
            </Link>
          </div>
          <div>
            <Link href="">
              <div className="mt-3">
                <ArticleCard
                  imageUrl="article/image-4.png"
                  title="Ketua TPN Ganjar-Mahfud: Saatnya Kerahkan Seluruh Kekuatan Mesin-mesin yang Sudah Dipanaskan"
                  author="Rizal Setyo Nugroho"
                  createdAt="November, 24, 2023"
                  description="Ketua Tim Pemenangan Nasional (TPN) Ganjar Pranowo-Mahfud MD, Arsjad Rasjid meminta "
                />
              </div>
            </Link>
            <Link href="">
              <div className="mt-3">
                <ArticleCard
                  imageUrl="article/image-5.png"
                  title="Alasan Gibran Memilih Ngantor Kayak Biasa di Hari Pertama Kampanye"
                  author="Rizal Setyo Nugroho"
                  createdAt="November, 24, 2023"
                  description="Gibran Rakabuming Raka memilih masuk kantor di hari pertama kampanye Pilpres 2024. Terlihat Gibran melakukan aktivitas seperti biasanya"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestedTopic;
