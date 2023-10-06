import "./globals.css";
import { rubik } from "./fonts";

export const metadata = {
  title: "Trafico",
  description: "Your awesome traffic permit consultant.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
