import { Circuits, Drivers, DriversChampionship, Grid, Results, Session, TeamsChampionship } from "../../types/types";
import { getData } from "../endpoint";

export async function getChampionshipDrivers(sesionKey: Number):Promise<DriversChampionship[]> {
  const data = await getData(`championship_drivers?sesion_key=${sesionKey}`);
  return data;
}

export async function getChampionshipTeams(sesionKey: Number) :Promise<TeamsChampionship[]> {
  const data = await getData(`championship_teams?sesion_key=${sesionKey}`);
  return data;
}

export async function getDrivers(sesionKey: Number):Promise<Drivers[]> {
  const data = await getData(`drivers?sesion_key=${sesionKey}`);
  return data;
}

export async function getCircuits():Promise<Circuits[]> {
  const data = await getData(`meetings?year=2026`);
  return data;
}

export async function getSesion(countryName: String, sessionName: String):Promise<Session[]> {
  const data = await getData(
    `sessions?country_name=${countryName}&session_name=${sessionName}&year=2026`
  );
  return data;
}

export async function getResults(sesionKey: Number):Promise<Results[]> {
  const data = await getData(
    `session_result?sesion_key=${sesionKey}`
  );
  return data;
}

export async function getAllSessions(countryName:String){
  const dataSessions = await getData(
        `sessions?location=${countryName}&year=2026`
       )
  return dataSessions
}

export async function getGridKey( countryName:String, gridS:String ){
  const gridKey = await getData(`sessions?country_name=${countryName}&session_name=${gridS}&year=2026`) 
  return gridKey
}

export async function getGrid(gridKey:Number):Promise<Grid[]> {
  const dataGrid = await getData(`https://api.openf1.org/v1/starting_grid?session_key=${gridKey}`) 
  return dataGrid
}