import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import { store } from "@/store/page";
import "bootstrap/dist/css/bootstrap.min.css"
import { Providers } from "./providers/page";
export default function RootLayout({ children }) {
  console.log(store.getState())
  return (
    <html lang="en">
      <body>

        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
