import  "bootstrap/dist/css/bootstrap.min.css"
import "./globals.css";
import Hedaer from "./components/header/page";
import Footer from "./components/footer/page";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Hedaer />
        {children}
        <Footer />
      </body>
    </html>
  );
}
