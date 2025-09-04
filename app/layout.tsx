import ClientPWAProvider from "../components/pwaProvider/pwaProvider";
import { Providers } from "../redux/provider";

import "./main.scss"



export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
      <html lang="en">
        <body data-theme="dark">  
          <ClientPWAProvider>
            <Providers>  
              <div className="main-wrapper">
                {children}
              </div>
            </Providers>
          </ClientPWAProvider>
        </body>
      </html>
    )
  }