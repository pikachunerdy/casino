import React, { useContext, useEffect, useState } from "react";
export const CasinoContext = React.createContext({});

export const CasinoProvider = ({ children }) => {
  const [casinoData, setCasinoData] = useState([]);
  const [listData, setListData] = useState([]);

  const getAllCasinos = async () => {
    await fetch("http://127.0.0.1:8000/casinos/", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setListData(data));
  };

  useEffect(() => {
    getAllCasinos();
  }, []);


  return (
    <CasinoContext.Provider
      value={{ casinoData, setCasinoData, listData, setListData }}
    >
      {children}
    </CasinoContext.Provider>
  );
};

export default CasinoContext;
