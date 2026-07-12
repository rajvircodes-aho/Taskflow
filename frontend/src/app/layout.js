import "./globals.css";
import Providers from "./provider/provider";
import Protected from "./components/services/protected";

export const metadata = {
  title: "Taskflow",
  description: "Project Management Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
         <Protected>
          {children}
          </Protected>
        </Providers>
      </body>
    </html>
  );
}
