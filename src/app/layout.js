import { AppContextProvider } from "@/context/Context";
import Tarjetas from "../assets/tarjetas.png";
import Image from "next/image";

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
        <body className="bg-primary bg-gradient-to-t to-[#F2994A] from-[#181818] shadow-2xl">
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
          <footer className="absolute bottom-0 w-full bg-base-200">
            <h1 className="w-full text-center text-white ">
              Desarrollado por{" "}
              <a className="font-bold" href="https://fsepulveda.vercel.app/">
                Francisco Sepulveda
              </a>
            </h1>
          </footer>
        </body>
      </AppContextProvider>
    </html>
  );
}
