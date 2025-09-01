import MainFooter from "../components/mainFooter/footer";
import MainHeader from "../components/mainHeader/header";
import { Providers } from "../redux/provider";

import "./main.scss"



export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
      <html lang="en">
        <body>  
          <Providers>  
            {/* <MainHeader/> */}
                <div className="main-wrapper">
                  {children}
                </div>
            {/* <MainFooter/> */}
          </Providers>
        </body>
      </html>
    )
  }