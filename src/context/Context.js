"use client";
import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [precio, setPrecio] = useState(undefined);
  const [argentinos, setArgentinos] = useState(0);
  const [peruanos, setPeruanos] = useState(0);
  const [brasileros, setBrasileros] = useState(0);
  const [chilenos, setChilenos] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [paisActual, setPaisActual] = useState("");

  useEffect(() => {
    getDataDolar();
  }, []);
  useEffect(() => {
    setChilenos(localStorage.getItem("dolarVsChileno"));
    setArgentinos(localStorage.getItem("dolarTarjeta"));
  }, []);

  useEffect(() => {
    setResultado(handleResultado(precio, paisActual));
  }, [precio]);

  const handleResultado = (precio, moneda) => {
    if (!precio) return 0;
    let valor = precio * argentinos;

    switch (moneda) {
      case "chile":
        valor = valor / chilenos;
        return valor;
      /* return valor.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 2,
        }); */
      case "peru":
        valor = valor / peruanos;
        return valor.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 2,
        });
      case "brasil":
        valor = valor / brasileros;
        return valor.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 2,
        });

      default:
        break;
    }

    console.log(valor);
  };
  const getDataDolar = async () => {
    const dataDolar = await axios.get("https://dolar-api-zeta.vercel.app/api");
    const dataChileno = await axios.get("https://mindicador.cl/api/dolar/");

    console.log(dataDolar.data);
    if (dataDolar.data[0].valor * 2 != localStorage.getItem("dolarTarjeta")) {
      localStorage.setItem("dolarTarjeta", dataDolar.data[0].valor * 2);
    }

    setArgentinos(dataDolar.data[0].valor * 2);

    if (dataDolar.data[1].valor != localStorage.getItem("dolarVsSoles")) {
      localStorage.setItem("dolarVsSoles", dataDolar.data[1].valor);
    }

    setPeruanos(dataDolar.data[1].valor);

    if (dataDolar.data[2].valor != localStorage.getItem("dolarVsReales")) {
      localStorage.setItem("dolarVsReales", dataDolar.data[2].valor);
    }

    setBrasileros(dataDolar.data[2].valor);

    if (
      dataChileno.data.serie[0].valor != localStorage.getItem("dolarVsChileno")
    ) {
      localStorage.setItem("dolarVsChileno", dataChileno.data.serie[0].valor);
    }

    setChilenos(dataChileno.data.serie[0].valor);
  };
  return (
    <AppContext.Provider
      value={{
        precio,
        resultado,
        argentinos,
        chilenos,
        handleResultado,
        setPrecio,
        setPaisActual,
        brasileros,
        peruanos,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    console.error("No context found.");
  }
  return context;
}

export default useAppContext;
