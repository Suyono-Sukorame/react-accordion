import React, { useState } from "react";
import "./App.css";
import AccordionItem from "./Accordion";

function App() {
  const faqData = [
    { id: 1, title: "01. Apakah produk ini memiliki jaminan?", content: "Ya, produk kami memiliki jaminan selama 1 tahun untuk produk kami" },
    { id: 2, title: "02. Berapa lama waktu pengiriman rata-rata?", content: "Waktu pengiriman rata-rata adalah 3-5 hari kerja, tergantung lokasi pengiriman" },
    { id: 3, title: "03. Bagaimana cara mengembalikan barang yang rusak?", content: "Jika barang anda rusak, hubungi pelanggan kami untuk panduan mengenai proses pengembalian dan penggantian." },
    // Tambahkan item FAQ baru di sini
    { id: 4, title: "04. Pertanyaan Baru", content: "Jawaban untuk pertanyaan baru..." },
    { id: 5, title: "05. Pertanyaan Lainnya", content: "Jawaban untuk pertanyaan lainnya..." },
  ];

  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  return (
    <div className="app">
      <h1>FAQ Accordion</h1>
      {faqData.map((faq) => (
        <AccordionItem key={faq.id} id={faq.id} title={faq.title} content={faq.content} openItem={openItem} handleItemClick={handleItemClick} />
      ))}
    </div>
  );
}

export default App;
