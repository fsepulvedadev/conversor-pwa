"use client";
import Image from "next/image";
import Link from "next/link";
import Calculadora from "../../assets/calculator.png";
import ChileImg from "../../assets/chile.svg";

import Arg from "../../assets/argentina.png";
import Flecha from "../../assets/down-arrow.png";
import back from "../../assets/back.svg";
import { useState, useEffect } from "react";
import Cotizaciones from "../../components/cotizaciones";
import { useAppContext } from "@/context/Context";

const Chile = () => {
  const {
    precio,
    resultado,
    argentinos,
    chilenos,
    handleResultado,
    setPrecio,
    setPaisActual,
  } = useAppContext();

  useEffect(() => {
    setPaisActual("chile");
  }, []);

  return (
    <>
      <Link href={"/"}>
        <button className="fixed z-50 btn btn-square glass top-2 left-2 drop-shadow-xl">
          <Image className="w-6" src={back} />
        </button>
      </Link>
      <main className="w-10/12 min-h-screen mx-auto mb-10">
        <div className="flex flex-col items-center justify-center py-4 mt-5 bg-base-200 rounded-box">
          <div className="w-11/12 card md:w-96 glass">
            <div className="card-body">
              <form className="flex flex-col items-center justify-center p-2">
                <div className="md:mx-auto md:w-8/12 form-control">
                  <label className="text-center label">
                    <div className="flex items-center justify-center w-full ">
                      <span className="font-semibold label-text">
                        Precio en
                      </span>
                      <Image
                        className="w-10 ml-2"
                        alt="chile"
                        src={ChileImg}
                      ></Image>
                    </div>
                  </label>
                  <label className="flex items-center justify-center mx-auto md:w-10/12 input-group">
                    <input
                      min={0}
                      value={precio}
                      onChange={(e) => setPrecio(e.target.value)}
                      type="number"
                      placeholder="$"
                      className="input input-bordered text-left text-2xl font-semibold before:content-['$'] w-full md:w-96"
                    />
                  </label>
                </div>
                <Image src={Flecha} className="w-10 mt-4" alt="flecha" />
                <div className="form-control">
                  <label className="text-center label">
                    <div className="flex items-center justify-center w-full">
                      <span className="font-semibold label-text">
                        Vas a pagar
                      </span>
                      <Image className="w-10 ml-2" alt="arg" src={Arg}></Image>
                    </div>
                  </label>
                  <div className="items-center justify-center w-full p-4 text-center border rounded border-primary text-primary">
                    <p className="text-3xl font-semibold">
                      {resultado.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                        minimumFractionDigits: 2,
                      })}
                    </p>
                  </div>
                </div>
              </form>
              <Cotizaciones
                monedaExt={"Chilenos"}
                valorArs={argentinos}
                valorExt={chilenos}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Chile;
