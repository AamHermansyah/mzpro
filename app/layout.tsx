import './globals.css'
import { Poppins } from 'next/font/google'

const monserrat = Poppins({ subsets: ['latin'], weight: ['200', '400', '500', '600', '800'] });

export const metadata = {
  title: 'MZ PRO - Professional Photographer',
  description: 'MZ PRO is a professional photographer specializing in various photography genres. Hire MZ PRO for your events, portraits, weddings, and more.',
  keywords: ['MZ PRO', 'professional photographer', 'photography', 'events', 'portraits', 'weddings'],
  author: 'MZ PRO',
  datePublished: '2023-06-03',
  dateModified: '2023-06-03',
  // image: '/path/to/cover-image.jpg',
  // url: 'https://www.example.com',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={monserrat.className}>{children}</body>
    </html>
  )
}
