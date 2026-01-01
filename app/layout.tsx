import type { Metadata } from "next";
import { Sarabun, Kanit } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/components/structured-data";

const sarabun = Sarabun({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "thai"],
  variable: "--font-sarabun",
  display: "swap",
});

const kanit = Kanit({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "thai"],
  variable: "--font-kanit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Allianz Ayudhya - 태국 최고의 건강 및 암 보험 | ประกันสุขภาพและมะเร็งที่ดีที่สุด",
    template: "%s | Allianz Ayudhya"
  },
  description: "Allianz Ayudhya - 태국 최고의 건강 및 암 보험 제공. 400여 개 협력 병원 네트워크와 글로벌 수준의 의료 보장. ประกันสุขภาพและมะเร็งที่ดีที่สุด พร้อมเครือข่ายโรงพยาบาล 400 แห่ง และความคุ้มครองทางการแพทย์ระดับโลก",
  keywords: [
    "Allianz Ayudhya",
    "건강보험",
    "암보험",
    "태국 보험",
    "ประกันสุขภาพ",
    "ประกันมะเร็ง",
    "ประกันภัยไทย",
    "health insurance Thailand",
    "cancer insurance Thailand",
    "My Health Plus Plus"
  ],
  authors: [{ name: "Allianz Ayudhya" }],
  creator: "Allianz Ayudhya",
  publisher: "Allianz Ayudhya",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://www.allianz-ayudhya.co.th"),
  alternates: {
    canonical: "/",
    languages: {
      "th-TH": "/th",
      "en-US": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    alternateLocale: ["en_US", "ko_KR"],
    url: "/",
    title: "ด้วย Allianz Ayudhya สุขภาพของคุณจะปลอดภัยเสมอ | Allianz Ayudhya와 함께라면 귀하의 건강은 항상 안전합니다",
    description: "Allianz Ayudhya ประกันสุขภาพและประกันมะเร็งที่ดีที่สุด พร้อมเครือข่ายโรงพยาบาล 400 แห่ง และความคุ้มครองทางการแพทย์ระดับโลก - 태국 최고의 건강 및 암 보험 제공. 400여 개 협력 병원 네트워크와 글로벌 수준의 의료 보장",
    siteName: "Allianz Ayudhya",
    images: [
      {
        url: "/og-image-square.jpg",
        width: 1200,
        height: 1200,
        alt: "Allianz Ayudhya 로고 및 신뢰감 있는 가족 이미지 - ด้วย Allianz Ayudhya สุขภาพของคุณจะปลอดภัยเสมอ",
        type: "image/jpeg",
      },
      {
        url: "/og-image-allianz-ayudhya.jpg",
        width: 1200,
        height: 630,
        alt: "Allianz Ayudhya - 태국 최고의 건강 및 암 보험 | ประกันสุขภาพและมะเร็งที่ดีที่สุด",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ด้วย Allianz Ayudhya สุขภาพของคุณจะปลอดภัยเสมอ | Allianz Ayudhya와 함께라면 귀하의 건강은 항상 안전합니다",
    description: "Allianz Ayudhya ประกันสุขภาพและประกันมะเร็งที่ดีที่สุด พร้อมเครือข่ายโรงพยาบาล 400 แห่ง - 400여 개 협력 병원 네트워크와 글로벌 수준의 의료 보장",
    images: [
      {
        url: "/og-image-allianz-ayudhya.jpg",
        width: 1200,
        height: 630,
        alt: "Allianz Ayudhya - 태국 최고의 건강 및 암 보험",
      },
    ],
    site: "@AllianzAyudhya",
    creator: "@AllianzAyudhya",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Google Search Console 등 검증 코드를 여기에 추가
    // google: "your-google-verification-code",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover" as const,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th-TH">
      <body className={`${sarabun.variable} ${kanit.variable}`}>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}

