import React from "react";

const cotizaciones = ({ valorChileno, valorArs }) => {
  return (
    <div
      className={` stats bg-primary text-primary-content my-6 xl:absolute top-0 left-5`}
    >
      <div className="stat min-w-[160px]">
        <div className="stat-title font-semibold text-white text-center">
          Dolar a Chileno
        </div>
        <div className="stat-value text-2xl md:text-4xl">$ {valorChileno}</div>
      </div>

      <div className="stat min-w-[160px]">
        <div className="stat-title font-semibold text-white text-center">
          Dolar Tarjeta
        </div>
        <div className="stat-value text-2xl md:text-4xl">$ {valorArs}</div>
      </div>
    </div>
  );
};

export default cotizaciones;
