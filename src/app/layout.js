import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import localFont from "next/font/local";


const font1 = localFont({
  src: [
    {
      path: "../assets/fonts/Hind-SemiBold.ttf",
    },
  ],
  variable: "--font_1",
});

const font2 = localFont({
  src: [
    {
      path: "../assets/fonts/Lexend-Bold.ttf",
    },
  ],
  variable: "--font_2",
});
const font3 = localFont({
  src: [
    {
      path: "../assets/fonts/Roboto-Medium.ttf",
    },
  ],
  variable: "--font_3",
});
export const metadata = {
  title: "Custom software production",
  description: "Discover our custom software production services, offering tailored software solutions designed to meet your unique business needs and drive growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font1.variable} ${font2.variable} ${font3.variable} `}>
        <Navbar/>
            {children}
        </body>
    </html>
  );
}
