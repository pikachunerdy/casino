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
    //getAllCasinos();
    const data = [
      {
        slug: "888",
        name: "888 Casino",
        casino_name: "William Hill",
        live: false,
        description: "888 Casino is a great website",
        created_at: "2022-11-14T13:30:24.080269Z",
        website: "https://www.888casino.com",
        image: "/image/Avatar1.png",
        banner: "/image/Avatar1.png",
        social_facebook: "",
        social_telegram: "",
        social_discord: "",
        social_medium: "",
        social_twitter: "",
        admin: [],
      },
      {
        slug: "pokerstars",
        name: "Poker Stars",
        casino_name: "William Hill",
        live: false,
        description: "Poker Stars Description",
        created_at: "2022-11-15T13:29:22.697822Z",
        website: "https://www.pokerstars.com",
        image: "/image/Avatar1.png",
        banner: "/image/Avatar1.png",
        social_facebook: "",
        social_telegram: "",
        social_discord: "",
        social_medium: "",
        social_twitter: "",
        admin: [1],
      },
    ];

    setListData(data);
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
