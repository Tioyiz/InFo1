import { Link } from "react-router";
import { getCircuits, getSesion } from "../../api/services/fetchdata";
import { useFetch } from "../../hooks/useFetch";
import { useState } from "react";

export function Home() {
  useFetch();

  return (
    <>
      <p>home</p>
    </>
  );
}
