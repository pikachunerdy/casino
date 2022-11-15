import { data } from "autoprefixer";
import Link from "next/link";
import React, { useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import HomeTable from "../../components/page/Home/HomeTable";

export async function getStaticProps() {
  const response = await fetch("http://localhost:8000/casinos/");
  const data = await response.json();
 
  return {
    props: {
      casinos: data,
    },
  };
}

const CasinoList = ({ casinos }) => {
  return (
    <Layout>
      <div>
        <ul className="my-[10rem]">
          {casinos.map((casino) => (
            <li className="cursor-pointer">
              <HomeTable
                top10casinos
                slug={casino.slug}
                image={casino.image}
                casino={casino.name}
                website={casino.website}
              />
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default CasinoList;
