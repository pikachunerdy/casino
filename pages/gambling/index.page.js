import { data } from "autoprefixer";
import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout/Layout";


export async function getStaticProps() {
  const response = await fetch("http://localhost:8000/casinos/");
  const data = await response.json();

  console.log("data casino list => ", data);

  return {
    props: {
      casinos: data,
    },
  };
}

const CasinoList = ({ casinos }) => {
  return (
    // <Layout>
        <div>
      <h1>Top casinos List test</h1>

      <ul>
        {casinos.map((casino) => {
              return (
            <>
              <Link href={`/gambling/${casino.slug}`}>
                <li key={casino.slug} className="cursor-pointer">{casino.name}</li>
              </Link>
         


              
            </>
          );
        })}
      </ul>
      </div>
    // </Layout>
  );
};

export default CasinoList;

