import Image from "next/image"
import MainFooter from "../components/mainFooter/footer";
import MainHeader from "../components/mainHeader/header";
import { BasicChildren } from "../types/basicTypes";
import "./main.scss"
import mainBackground from "../images/main-background.jpg"

export default function RootLayout({children}: BasicChildren) {
    return (
      <html lang="en">
        <body>
            <Image className="main-background" src={mainBackground} alt="main background"/>

            <MainHeader/>
            <div className="main-wrapper">
                  {children}
            </div>
            <MainFooter/>
        </body>
      </html>
    )
  }