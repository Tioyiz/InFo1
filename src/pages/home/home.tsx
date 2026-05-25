import { Link } from "react-router";
import { getCircuits, getSesion } from "../../api/services/fetchdata";
import { useFetch } from "../../hooks/useFetch";
import {Loader}  from "../../components/loader.tsx"
import { useState } from "react";
import "../home.css"

export function Home() {
 const {
    circuits,
    session,
    result,
    drivers,
    teamChamp,
    driversChamp,
    countryName, 
    sesssionName, 
    loading
  } = useFetch();

  return (
    <main>
     {
       loading &&  <Loader/> 
     }
     
     
    </main>
  )
}
