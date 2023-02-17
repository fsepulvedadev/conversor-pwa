import { AppContextProvider } from "@/context/Context";
import Tarjetas from "../assets/tarjetas.png";
import Image from "next/image";
import cafecito from "../assets/cafecito.jpg";

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html className="bg-inherit " data-theme="halloween" lang="en">
      <AppContextProvider>
        {/*
        #F2C94C
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head />
        <body className="bg-primary bg-gradient-to-t to-[#F2994A] from-[#181818] shadow-2xl min-h-screen">
          <div className="flex items-center justify-center mt-10 mb-4">
            <h1 className="mr-2 text-xl font-semibold text-center md:text-2xl text-base-100">
              ¿ Cuanto voy a pagar ?
            </h1>
            <Image
              className="w-10 h-10"
              alt="calculadora"
              src={Tarjetas}
            ></Image>
          </div>
          {children}
          <footer className="sticky bottom-0 w-full bg-base-200">
            <div className="grid grid-cols-2 grid-rows-1 p-1 md:grid-cols-3 place-items-center">
              <div className="hidden text-base-200 md:block">asd </div>

              <h1 className="w-full text-center text-white ">
                Desarrollado por <br />
                <a className="font-bold " href="https://fsepulveda.vercel.app/">
                  Francisco Sepulveda
                </a>
              </h1>
              <div className="hidden md:block">
                <p className="mr-2 text-center">Te ayudó la app ?</p>
                <a
                  className=""
                  href="https://cafecito.app/fsepulveda"
                  rel="noopener"
                  target="_blank"
                >
                  <img
                    srcset="https://cdn.cafecito.app/imgs/buttons/button_1.png 1x, https://cdn.cafecito.app/imgs/buttons/button_1_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_1_3.75x.png 3.75x"
                    src="https://cdn.cafecito.app/imgs/buttons/button_1.png"
                    alt="Invitame un café en cafecito.app"
                  />
                </a>
              </div>
              <div className="flex items-center md:hidden">
                <p className="mr-2 text-center">Te ayudó la app ?</p>
                <a
                  className="cursor-pointer"
                  href="https://cafecito.app/fsepulveda"
                  rel="noopener"
                  target="_blank"
                >
                  <Image className="w-10 rounded-2xl" src={cafecito}></Image>
                </a>
              </div>
            </div>
          </footer>
        </body>
      </AppContextProvider>
    </html>
  );
}
