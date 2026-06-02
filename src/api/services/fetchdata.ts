import { getData } from "../endpoint";

export async function getChampionshipDrivers(sesionKey: Number) {
  const data = await getData(`championship_drivers?sesion_key=${sesionKey}`);
  return data;
}

export async function getChampionshipTeams(sesionKey: Number) {
  const data = await getData(`championship_teams?sesion_key=${sesionKey}`);
  return data;
}

export async function getDrivers(sesionKey: Number) {
  const data = await getData(`drivers?sesion_key=${sesionKey}`);
  return data;
}

export async function getCircuits() {
  const data = await getData(`meetings?year=2026`);
  return data;
}

export async function getSesion(countryName: String, sessionName: String) {
  const data = await getData(
    `sessions?country_name=${countryName}&session_name=${sessionName}&year=2026`
  );
  return data;
}

export async function getResults(sesionKey: Number) {
  const data = await getData(
    `session_result?sesion_key=${sesionKey}&position%3c=22`
  );
  return data;
}

export function getAllSessions(countryName:String){
  const dataSessions = await getData(
        `${BASE_URL}/sessions?country_name=${countryName}&year=2026`
       )
  return dataSessions
}

export function getGrid(sesionKey:Number) {
  const dataGrid = await getData(`https://api.openf1.org/v1/starting_grid?session_key=${sesionKey}&position%3C=23`) 
  return dataGrid
}