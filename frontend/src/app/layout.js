import "./globals.css";
import Providers from "./provider/provider";

export const metadata = {
  title: "Taskflow",
  description: "Project Management Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
