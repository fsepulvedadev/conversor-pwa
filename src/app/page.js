"use client";
import Image from "next/image";
import Chile from "../assets/chile.svg";
import BrasilImg from "../assets/brasil.svg";
import Peru from "../assets/peru.svg";
import Tarjetas from "../assets/tarjetas.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-10/12 min-h-screen mx-auto ">
      <div className="flex flex-col items-center justify-center">
        <div className="w-10/12 min-h-full mb-4 hero bg-base-200 rounded-box">
          <div className="text-center hero-content">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Hola!</h1>
              <p className="py-2 text-sm md:py-6">
                Clickea en la bandera segun la moneda que quieras convertir.
              </p>

              <div className="grid mt-2 mb-6 md:grid-cols-3 place-items-center">
                <Link href={"/chile"}>
                  <Image
                    className="w-20 mt-2 rounded md:mt-0"
                    src={Chile}
                  ></Image>
                </Link>
                <Link href={"/brasil"}>
                  <Image
                    className="w-20 mt-2 rounded md:mt-0"
                    src={BrasilImg}
                  ></Image>
                </Link>
                <Link href={"/peru"}>
                  <Image
                    className="w-20 mt-2 rounded md:mt-0"
                    src={Peru}
                  ></Image>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
