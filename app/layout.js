import "./globals.css";

export const metadata = {
  title: "8000 Miles to I Do",
  description: "A celebration of love, family and the miles that brought us here.",
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
