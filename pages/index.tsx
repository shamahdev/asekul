import type { NextPage } from "next";
import Head from "next/head";

import {
  TiHeartFullOutline,
  TiStarFullOutline,
  TiChartLine,
} from "react-icons/ti";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Asekul - Penjualan AC &amp; Jasa Cuci hingga Service AC</title>
        <meta
          name="description"
          content="Penjualan AC &amp; Jasa Cuci hingga Service AC"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative h-auto overflow-hidden">
        <img
          src="/background.png"
          className="absolute object-cover w-full h-full"
        />
        <header className="absolute top-0 left-0 right-0 z-20">
          <nav className="container max-w-2xl p-4 mx-auto">
            <div className="items-center justify-center md:flex">
              <div className="flex items-center justify-around w-full text-slate-300">
                <a>Beranda</a>
                <a>Layanan</a>
                <a>Galeri</a>
                <a>Kontak</a>
              </div>
            </div>
          </nav>
        </header>
        <div className="container relative z-10 flex items-center justify-center max-w-2xl px-4 mx-auto my-40">
          <div className="flex flex-col items-center w-full">
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-center text-white">
              Penjualan AC &amp; Jasa Cuci hingga Service AC
            </h1>
            <p className="text-lg text-white">
              Semua bisa anda percayakan pada kami!
            </p>
            <div className="flex flex-col gap-4 mt-8 text-center">
              <a
                href="services"
                className="block px-6 py-3 text-white bg-blue-600 rounded-full"
              >
                Layanan Kami
              </a>
              <a
                href="services"
                className="block px-6 py-3 text-blue-600 bg-white rounded-full"
              >
                Testimoni
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center max-w-screen-lg px-4 py-20 mx-auto text-center">
        <h2 className="mt-4 text-3xl font-extrabold leading-tight text-center text-slate-900">
          Kenapa Asekul?
        </h2>
        <p className="mt-2 text-slate-900">
          Keunggulan kami sebagai penyedia one-stop AC solution yang dapat
          dipercaya
        </p>
        <div className="flex flex-col gap-4 mt-8 text-center md:flex-row">
          <div className="flex flex-col w-full gap-4 bg-white border-[1px] border-slate-200 p-4 rounded-2xl shadow-md items-center">
            <div>
              <TiHeartFullOutline className="w-8 h-8 text-blue-900"></TiHeartFullOutline>
            </div>
            <h3 className="font-bold">100% Terpercaya</h3>
            <p className="text-slate-700">
              Jasa Kami telah banyak dipakai oleh berbagai kalangan. Mulai dari
              rumah tangga, perusahaan baik sekala kecil maupun perusahaan skala
              besar.
            </p>
          </div>
          <div className="flex flex-col w-full gap-4 bg-white border-[1px] border-slate-200 p-4 rounded-2xl shadow-md items-center">
            <div>
              <TiChartLine className="w-8 h-8 text-blue-900"></TiChartLine>
            </div>
            <h3 className="font-bold">Hemat Biaya</h3>
            <p className="text-slate-700">
              Teknis Kami tidak akan memungut biaya tambahan. biaya tambahan
              hanya ada ketika melakukan penggantian spare part ataupun isi
              freon jika benar-benar diperlukan saja.
            </p>
          </div>
          <div className="flex flex-col w-full gap-4 bg-white border-[1px] border-slate-200 p-4 rounded-2xl shadow-md items-center">
            <div>
              <TiStarFullOutline className="w-8 h-8 text-blue-900"></TiStarFullOutline>
            </div>
            <h3 className="font-bold">Tenaga Ahli Berpengalaman</h3>
            <p className="text-slate-700">
              Teknis Kami ditangani oleh Tenaga Ahli yang sudah berpengalaman,
              terampil dan bertanggung jawab
            </p>
          </div>
        </div>
      </div>
      <div className="bg-blue-900">
        <div className="flex flex-col items-center justify-center max-w-screen-lg px-4 py-20 mx-auto text-center">
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-center text-white">
            Layanan Kami
          </h2>
          <p className="mt-2 text-white">
            Cek harga layanan yang kami tawarkan untuk keburuhan AC Anda
          </p>
          <div className="flex flex-col w-full gap-4 mt-8 text-center md:flex-row">
            <div className="flex flex-col w-full bg-white border-[1px] border-slate-200 p-4 rounded-2xl shadow-md items-center">
              <h3 className="font-bold">Cuci</h3>
              <p className="text-slate-700">Mulai Dari</p>
              <p className="my-4 text-3xl font-extrabold text-blue-900">
                Rp65.000
              </p>
              <div className="flex flex-col gap-4 text-sm">
                <div>
                  <p className="text-slate-700">Cuci AC 0,5 - 1 PK</p>
                  <h3 className="font-bold">Rp65.000</h3>
                </div>
                <div>
                  <p className="text-slate-700">Cuci AC 0,5 - 1 PK</p>
                  <h3 className="font-bold">Rp65.000</h3>
                </div>
                <div>
                  <p className="text-slate-700">Cuci AC 0,5 - 1 PK</p>
                  <h3 className="font-bold">Rp65.000</h3>
                </div>
                <div>
                  <p className="text-slate-700">Cuci AC 0,5 - 1 PK</p>
                  <h3 className="font-bold">Rp65.000</h3>
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-8 text-center">
                <a
                  href="services"
                  className="block px-6 py-3 text-white bg-blue-600 rounded-full"
                >
                  Pesan Sekarang
                </a>
              </div>
            </div>
            <div className="flex flex-col w-full bg-white border-[1px] border-slate-200 p-4 rounded-2xl shadow-md items-center">
              <h3 className="font-bold">Cuci</h3>
              <p className="text-slate-700">Mulai Dari</p>
              <p className="my-4 text-3xl font-extrabold text-blue-900">
                Rp65.000
              </p>
              <div className="flex flex-col gap-4 text-sm">
                <div>
                  <p className="text-slate-700">Cuci AC 0,5 - 1 PK</p>
                  <h3 className="font-bold">Rp65.000</h3>
                </div>
                <div>
                  <p className="text-slate-700">Cuci AC 0,5 - 1 PK</p>
                  <h3 className="font-bold">Rp65.000</h3>
                </div>
                <div>
                  <p className="text-slate-700">Cuci AC 0,5 - 1 PK</p>
                  <h3 className="font-bold">Rp65.000</h3>
                </div>
                <div>
                  <p className="text-slate-700">Cuci AC 0,5 - 1 PK</p>
                  <h3 className="font-bold">Rp65.000</h3>
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-8 text-center">
                <a
                  href="services"
                  className="block px-6 py-3 text-white bg-blue-600 rounded-full"
                >
                  Pesan Sekarang
                </a>
              </div>
            </div>
            <div className="flex flex-col w-full bg-white border-[1px] border-slate-200 p-4 rounded-2xl shadow-md items-center">
              <h3 className="font-bold">Cuci</h3>
              <p className="text-slate-700">Mulai Dari</p>
              <p className="my-4 text-3xl font-extrabold text-blue-900">
                Rp65.000
              </p>
              <div className="flex flex-col gap-4 text-sm">
                <div>
                  <p className="text-slate-700">Cuci AC 0,5 - 1 PK</p>
                  <h3 className="font-bold">Rp65.000</h3>
                </div>
                <div>
                  <p className="text-slate-700">Cuci AC 0,5 - 1 PK</p>
                  <h3 className="font-bold">Rp65.000</h3>
                </div>
                <div>
                  <p className="text-slate-700">Cuci AC 0,5 - 1 PK</p>
                  <h3 className="font-bold">Rp65.000</h3>
                </div>
                <div>
                  <p className="text-slate-700">Cuci AC 0,5 - 1 PK</p>
                  <h3 className="font-bold">Rp65.000</h3>
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-8 text-center">
                <a
                  href="services"
                  className="block px-6 py-3 text-white bg-blue-600 rounded-full"
                >
                  Pesan Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center max-w-screen-lg px-4 py-20 mx-auto text-center">
        <h2 className="mt-4 text-3xl font-extrabold leading-tight text-center text-slate-900">
          Client Kami
        </h2>
        <p className="mt-2 text-slate-900">
          Kami telah memberikan senyuman kepada lebih dari 100+ pelanggan kami
          dari berbagai daerah
        </p>
        <div className="flex flex-col gap-4 my-8 text-center md:flex-row">
          <div className="flex flex-col w-full gap-4 bg-white border-[1px] border-slate-200 p-4 rounded-2xl shadow-md items-center">
            <img src="/asekul-logo.jpeg" className="object-contain h-16 w-72" />
          </div>
          <div className="flex flex-col w-full gap-4 bg-white border-[1px] border-slate-200 p-4 rounded-2xl shadow-md items-center">
            <img src="/asekul-logo.jpeg" className="object-contain h-16 w-72" />
          </div>
          <div className="flex flex-col w-full gap-4 bg-white border-[1px] border-slate-200 p-4 rounded-2xl shadow-md items-center">
            <img src="/asekul-logo.jpeg" className="object-contain h-16 w-72" />
          </div>
          <div className="flex flex-col w-full gap-4 bg-white border-[1px] border-slate-200 p-4 rounded-2xl shadow-md items-center">
            <img src="/asekul-logo.jpeg" className="object-contain h-16 w-72" />
          </div>
          <div className="flex flex-col w-full gap-4 bg-white border-[1px] border-slate-200 p-4 rounded-2xl shadow-md items-center">
            <img src="/asekul-logo.jpeg" className="object-contain h-16 w-72" />
          </div>
          <div className="flex flex-col w-full gap-4 bg-white border-[1px] border-slate-200 p-4 rounded-2xl shadow-md items-center">
            <img src="/asekul-logo.jpeg" className="object-contain h-16 w-72" />
          </div>
        </div>
        <a
          href="services"
          className="block px-6 py-3 text-white bg-blue-600 rounded-full"
        >
          Hubungi Kami
        </a>
      </div>
      <div className="flex flex-col items-center justify-center max-w-screen-lg px-4 py-20 mx-auto text-center">
        <h2 className="mt-4 text-3xl font-extrabold leading-tight text-center text-slate-900">
          Testimonial
        </h2>
        <div className="flex flex-col items-center w-full gap-4 my-8">
          <img src="/asekul-logo.jpeg" className="object-contain h-16 w-72" />
        </div>
        <p className="mt-2 text-slate-900">
          “Pemasangan AC dari Asekul benar-benar professional, mulai dari
          harganya yang transparan dan terjangnkau. Pekerjaannya pun dikerjakan
          dengan cepat dan tepat”
        </p>
        <a
          href="services"
          className="block px-6 py-3 mt-8 text-white bg-blue-600 rounded-full"
        >
          Semua Testimoni
        </a>
      </div>
      <div className="flex flex-col items-center justify-center max-w-screen-lg px-4 py-20 mx-auto text-center">
        <h2 className="mt-4 text-3xl font-extrabold leading-tight text-center text-slate-900">
          Kontak Kami
        </h2>
        <b className="mt-2 text-slate-900">Jangan Ambil Resiko!</b>
        <p className=" text-slate-900">
          Pastikan Unit AC anda dibersihkan secara rutin minimal 3 atau 4 bulan
          sekali. Hubungi segera ASEKUL Layanan jasa service AC yang sudah
          berpengalaman dan profesional.
        </p>
        <div className="flex gap-4 mt-8 ">
          <div className="flex flex-col w-full max-w-sm bg-white border-[1px] border-slate-200 p-4 rounded-2xl shadow-md items-center">
            <h3 className="font-bold">Kontak Kami</h3>
            <div className="flex flex-col w-full gap-4 mt-4 text-sm">
              <input
                type="text"
                className="p-3 bg-slate-200 text-slate-900 rounded-2xl"
                placeholder="Nama Anda"
              />
              <input
                type="email"
                className="p-3 bg-slate-200 text-slate-900 rounded-2xl"
                placeholder="Email Anda"
              />
              <textarea
                className="p-3 bg-slate-200 text-slate-900 rounded-2xl"
                placeholder="Pesan"
              ></textarea>
            </div>
            <div className="flex flex-col gap-4 mt-8 text-center">
              <a
                href="services"
                className="block px-6 py-3 text-white bg-blue-600 rounded-full"
              >
                Kirim
              </a>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex flex-col gap-4 mt-8 text-center md:flex-row">
              <div className="flex flex-col items-center w-full gap-4">
                <div>
                  <TiHeartFullOutline className="w-8 h-8 text-blue-900"></TiHeartFullOutline>
                </div>
                <p className="text-sm text-slate-700">
                  Jl. Kelapa Gading Selatan BLok AK 1, No.20 Pakulonan,
                  Tangerang – Banten.
                </p>
              </div>
              <div className="flex flex-col items-center w-full gap-4">
                <div>
                  <TiChartLine className="w-8 h-8 text-blue-900"></TiChartLine>
                </div>
                <p className="text-sm text-slate-700">0811 9512 686</p>
              </div>
              <div className="flex flex-col items-center w-full gap-4">
                <div>
                  <TiStarFullOutline className="w-8 h-8 text-blue-900"></TiStarFullOutline>
                </div>
                <p className="text-sm text-slate-700">cs@asekul.com</p>
              </div>
            </div>
            {/* iframe map */}
            <div className="my-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13340.486348539613!2d106.62850876849616!3d-6.2439984871598355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fd88298e6403%3A0x1368d5a06dedf955!2sPT.ASEKUL%20%2F%20Asa%20Karya%20Sentral%20Elektro%20Jasa%20Servis%20AC%20Dan%20Toko%20AC!5e0!3m2!1sid!2sid!4v1647225788742!5m2!1sid!2sid"
                width="600"
                height="320"
                allowFullScreen={false}
                loading="lazy"
              ></iframe>
            </div>
            <div className="flex gap-4">
              <TiHeartFullOutline className="w-8 h-8 text-blue-900"></TiHeartFullOutline>
              <TiHeartFullOutline className="w-8 h-8 text-blue-900"></TiHeartFullOutline>
              <TiHeartFullOutline className="w-8 h-8 text-blue-900"></TiHeartFullOutline>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
