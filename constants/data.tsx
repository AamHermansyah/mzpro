import { BsPeopleFill } from "react-icons/bs";
import { IoMdPricetags } from "react-icons/io";
import { GiGears } from "react-icons/gi";
import { MdFeedback, MdHighQuality } from "react-icons/md";

export type Services = {
  features: {
    id: string,
    imgUrl: string,
    title: string,
    caption: string
  }[],
  lists: string[]
}

export const services: Services = {
  features: [
    {
      id: 'service-1',
      imgUrl: 'https://drive.google.com/uc?export=view&id=1Q1GakbLs2t6p4f-ivoPtOtRlfbKRuLON',
      title: 'Wedding',
      caption: 'Kenang momen indah berdua'
    },
    {
      id: 'service-2',
      imgUrl: 'https://source.unsplash.com/900x1600/?prewedding',
      title: 'Pre-Wedding',
      caption: 'Perjuangan menuju kebahagiaan bersama'
    },
    {
      id: 'service-3',
      imgUrl: 'https://source.unsplash.com/900x1600/?product',
      title: 'Produk',
      caption: 'Ciptakan sesuatu yang menarik'
    },
    {
      id: 'service-4',
      imgUrl: 'https://source.unsplash.com/900x1600/?special momen',
      title: 'Momen Spesial',
      caption: 'Tiada hari tanpa sendirian'
    },
    {
      id: 'service-5',
      imgUrl: 'https://source.unsplash.com/900x1600/?night nature',
      title: 'Alam',
      caption: 'Alam membawa kita ketenangan'
    },
  ],
  lists: [
    'Foto Prewedding',
    'Foto Pernikahan',
    'Potret Keluarga',
    'Foto Acara & \nEvent Khusus',
    'Foto Bisnis',
    'Foto Produk',
    'Foto Alam'
  ]
};

export type Solutions = {
  paragraph: string
}

export const solutions: Solutions = {
  paragraph: 'Mz Pro, menyajikan layanan profesional dengan fasilitas terlengkap dan kualitas terbaik di kelasnya, menjadi pilihan utama bagi anda dalam acara acara penting dan kebutuhan fotografi. Dengan komitmen untuk memberikan pengalaman fotografi yang mengesankan, Mz Pro menawarkan kelebihan unik yang membedakan layanannya.',
}

export const whyChooseUs = {
  features: [
    {
      id: 'features-1',
      title: 'Harga Terbaik',
      description: 'Menawarkan kualitas tidak terkalahkan dengan harga yang bersahabat',
      icon: <IoMdPricetags fontSize={30} />
    },
    {
      id: 'features-2',
      title: 'Pengalaman',
      description: 'Dengan pengalaman bertahun-tahun dalam industri fotografi, kami memiliki keahlian dan pengetahuan untuk menghasilkan gambar-gambar yang memukau.',
      icon: <GiGears fontSize={30} />
    },
    {
      id: 'features-3',
      title: 'Profesional',
      description: 'Mengutamakan profesionalisme dalam setiap aspek pekerjaan kami, mulai dari komunikasi yang baik hingga penyampaian hasil akhir.',
      icon: <MdHighQuality fontSize={30} />
    },
    {
      id: 'features-4',
      title: 'Kualitas dan Keunggulan Teknis',
      description: 'Menggunakan peralatan fotografi terbaik dalam industri ini yang dapat menghasilkan gambar-gambar dengan ketajaman, kejernihan, dan warna yang luar biasa.',
      icon: <BsPeopleFill fontSize={30} />
    },
    {
      id: 'features-5',
      title: 'Reputasi dan Ulasan Positif',
      description: 'Ulasan positif dari klien-klien kami sebelumnya adalah bukti kesuksesan kami dalam memberikan pengalaman fotografi yang unggul.',
      icon: <MdFeedback fontSize={30} />
    },
  ]
}