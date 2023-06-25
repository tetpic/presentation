import MainFooter from "../components/mainFooter/footer";
import MainHeader from "../components/mainHeader/header";
import { BasicChildren } from "../types/basicTypes";
import "./main.scss"

export default function RootLayout({children}: BasicChildren) {
    return (
      <html lang="en">
        <body>

            <MainHeader/>
            <div className="main-wrapper">
                  {children}
            </div>
            <MainFooter/>
        </body>
      </html>
    )
  }