import React from "react";

const cotizaciones = ({ valorExt, valorArs, monedaExt }) => {
  valorExt = +valorExt;
  return (
    <div
      className={` stats bg-[#F2994A] text-primary-content my-6  top-0 left-5 flex`}
    >
      <div className=" p-2 md:min-w-[160px] w-full">
        <div className="font-semibold text-center text-secondary-accent stat-title">
          Dolar a {monedaExt}
        </div>
        <div className="text-2xl stat-value md:text-4xl">
          $ {valorExt.toFixed(2)}
        </div>
      </div>

      <div className=" p-2 md:min-w-[160px] w-full">
        <div className="font-semibold text-center text-secondary-accent stat-title">
          Dolar Qatar
        </div>
        <div className="text-2xl stat-value md:text-4xl">$ {valorArs}</div>
      </div>
    </div>
  );
};

export default cotizaciones;
