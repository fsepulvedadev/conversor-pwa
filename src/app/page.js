"use client";
import Image from "next/image";
import Chile from "../assets/chile.png";
import Arg from "../assets/argentina.png";
import Calculadora from "../assets/calculator.png";
import Flecha from "../assets/down-arrow.png";
import { useState, useEffect } from "react";
import axios from "axios";
import Cotizaciones from "@/components/cotizaciones";
import Script from "next/script";

export default function Home() {
  const [precio, setPrecio] = useState(undefined);
  const [argentinos, setArgentinos] = useState(0);
  const [chilenos, setChilenos] = useState(0);
  const [resultado, setResultado] = useState(0);

  useEffect(() => {
    getDataDolar();
  }, []);
  useEffect(() => {
    setChilenos(localStorage.getItem("dolarVsChileno"));
    setArgentinos(localStorage.getItem("dolarTarjeta"));
  }, []);

  useEffect(() => {
    setResultado(handleResultado(precio));
  }, [precio]);

  const getDataDolar = async () => {
    const dataDolar = await axios.get("https://dolar-api-zeta.vercel.app/api");
    const dataChileno = await axios.get("https://mindicador.cl/api/dolar/");

    console.log(dataDolar);
    if (dataDolar.data.valor * 2 != localStorage.getItem("dolarTarjeta")) {
      localStorage.setItem("dolarTarjeta", dataDolar.data.valor * 2);
    }
    setArgentinos(dataDolar.data.valor * 2);

    if (
      dataChileno.data.serie[0].valor != localStorage.getItem("dolarVsChileno")
    ) {
      localStorage.setItem("dolarVsChileno", dataChileno.data.serie[0].valor);
    }

    setChilenos(dataChileno.data.serie[0].valor);
  };
  const handleResultado = (precio) => {
    if (!precio) return 0;
    let valor = precio * argentinos;
    console.log(valor);
    valor = valor / chilenos;
    return valor.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });
  };

  return (
    <main className="w-8/12 mx-auto">
      <div className="flex flex-col items-center justify-center mt-5">
        <div className="flex items-center justify-center mb-4">
          <h1 className="mr-4 text-2xl font-semibold ">Cuanto sale ?</h1>
          <Image
            className="w-10 h-10"
            alt="calculadora"
            src={Calculadora}
          ></Image>
        </div>

        <form className="flex flex-col items-center justify-center p-2 w-[100vw]">
          <div className="w-8/12 mx-auto form-control">
            <label className="text-center label">
              <div className="flex items-center justify-center w-full ">
                <span className="font-semibold label-text">Precio en</span>
                <Image className="w-10 ml-2" alt="chile" src={Chile}></Image>
              </div>
            </label>
            <label className="flex items-center justify-center w-10/12 mx-auto input-group">
              <input
                min={0}
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
                type="number"
                placeholder="$ 20.000"
                className="input input-bordered text-center text-2xl font-semibold before:content-['$']"
              />
            </label>
          </div>
          <Image src={Flecha} className="w-10 mt-4" alt="flecha" />
          <div className="form-control">
            <label className="text-center label">
              <div className="flex items-center justify-center w-full">
                <span className="font-semibold label-text">Vas a pagar</span>
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
          <Cotizaciones valorArs={argentinos} valorChileno={chilenos} />
        </form>
      </div>
    </main>
  );
}
