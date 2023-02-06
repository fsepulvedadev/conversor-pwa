"use client";
import Image from "next/image";
import Chile from "../assets/chile.png";
import Arg from "../assets/argentina.png";
import Calculadora from "../assets/calculator.png";
import Flecha from "../assets/down-arrow.png";
import { useState, useEffect } from "react";
import axios from "axios";
import { xml2json } from "xml-js";
import Cotizaciones from "@/components/cotizaciones";

export default function Home() {
  const [precio, setPrecio] = useState(undefined);
  const [argentinos, setArgentinos] = useState(0);
  const [chilenos, setChilenos] = useState(0);
  const [resultado, setResultado] = useState(0);

  useEffect(() => {
    getDataDolar();
  }, []);

  useEffect(() => {
    setResultado(handleResultado(precio));
  }, [precio]);

  const getDataDolar = async () => {
    const dataDolar = await axios.get("http://localhost:4000/api");
    const dataChileno = await axios.get("https://mindicador.cl/api/dolar/");

    console.log(dataDolar);
    setArgentinos(dataDolar.data.valor * 2);

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
        <div className="flex justify-center items-center mb-4">
          <h1 className=" font-semibold text-2xl mr-4">Cuanto sale ?</h1>
          <Image
            className="w-10 h-10"
            alt="calculadora"
            src={Calculadora}
          ></Image>
        </div>

        <form className="flex flex-col items-center justify-center p-2 w-[100vw]">
          <div className="form-control w-8/12 mx-auto">
            <label className="label text-center">
              <div className="flex items-center justify-center w-full ">
                <span className="label-text font-semibold">Precio en</span>
                <Image className="w-10 ml-2" alt="chile" src={Chile}></Image>
              </div>
            </label>
            <label className="input-group flex justify-center items-center w-10/12 mx-auto">
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
            <label className="label text-center">
              <div className="flex items-center justify-center w-full">
                <span className="label-text font-semibold">Vas a pagar</span>
                <Image className="w-10 ml-2" alt="arg" src={Arg}></Image>
              </div>
            </label>
            <div className="w-full justify-center items-center text-center border rounded p-4 border-primary text-primary">
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
