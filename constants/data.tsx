export type Service = {
  card: {
    id: string,
    imgUrl: string,
    title: string,
    caption: string
  }[],
  paragraph: string,
  lists: string[]
}

export const services: Service = {
  card: [
    {
      id: 'service-1',
      imgUrl: 'https://source.unsplash.com/900x1600/?wedding',
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
  paragraph: 'Mz Pro, menyajikan layanan profesional dengan fasilitas terlengkap dan kualitas terbaik di kelasnya, menjadi pilihan utama bagi anda dalam acara acara penting dan kebutuhan fotografi. Dengan komitmen untuk memberikan pengalaman fotografi yang mengesankan, Mz Pro menawarkan kelebihan unik yang membedakan layanannya.',
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