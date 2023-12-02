"use client";
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewsCard from "../card_news";
import Link from "next/link";

interface News {
  imageUrl: string;
  title: string;
  author: string;
  timeAgo: string;
}

const LatestNewsCarousel: React.FC = () => {
  const newsData: News[] = [
    // Daftar berita Anda
    {
      imageUrl: "/news/Image-1.png",
      title: "KPK Duga Ada Pengurusan Terselubung dalam Dugaan Suap",
      author: "Defa Nugraha",
      timeAgo: "5 Minutes Ago",
    },
    {
      imageUrl: "/news/Image-1.png",
      title: "KPK Duga Ada Pengurusan Terselubung dalam Dugaan Suap",
      author: "Defa Nugraha",
      timeAgo: "5 Minutes Ago",
    },
    // Tambahkan berita lainnya ...
  ];

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-white rounded shadow-lg p-6 relative">
      <div className="absolute top-0 left-0 p-5 text-2xl font-bold rounded-tr rounded-bl">
        Latest News
      </div>
      <div className="absolute top-0 right-0 text-blue-800 p-2 rounded-tl rounded-br">
        <Link href="">View All</Link>
      </div>
      <Slider {...settings}>
        {/* {newsData.map((news, index) => (
          <div key={index} className=" mt-10">
            <div className="grid grid-flow-col auto-cols-max">
              <div>
                <NewsCard
                  imageUrl={news.imageUrl}
                  title={news.title}
                  author={news.author}
                  timeAgo={news.timeAgo}
                />
              </div>
            </div>
          </div>
        ))} */}
        <div className="mt-10">
          <div className="grid grid-flow-col auto-cols-max">
            <div>
              <NewsCard
                imageUrl="news/Image-1.png"
                title="KPK Duga Ada Pengurusan Terselubung dalam Dugaan Suap"
                author="Dzikri Faza H"
                timeAgo="5 Minutes Ago"
              />
            </div>
            <div>
              <NewsCard
                imageUrl="news/Image-2.png"
                title="TKN Gelar Rakornas di Jakarta Besok, Prabowo-Gibran Hadir"
                author="Defa Nugraha"
                timeAgo="5 Minutes Ago"
              />
            </div>
            <div>
              <NewsCard
                imageUrl="news/Image-3.png"
                title="Muhaimin Ungkap Syarat Jadi Cawapres Anies, jika Menang Harus Dilibatkan"
                author="Rizal Setyo Nugroho"
                timeAgo="5 Minutes Ago"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="grid grid-flow-col auto-cols-max">
            <div>
              <NewsCard
                imageUrl="news/Image-4.png"
                title="Mahfud Tak Masalah Tidak Ada Debat Khusus bagi Cawapres"
                author="Defa Nugraha"
                timeAgo="5 Minutes Ago"
              />
            </div>
            <div>
              <NewsCard
                imageUrl="news/Image-5.png"
                title="KPU Ungkap Alasan Debat Cawapres Didampingi Capres, Beda dari Pilpres 2019"
                author="Defa Nugraha"
                timeAgo="5 Minutes Ago"
              />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default LatestNewsCarousel;
