import { AppRouter } from "./routes/appRouter";
import { Link } from "react-router";
import "./styles.css";

export default function App() {
  return (
    <>
      <nav>
        <Link to={"/"}>home</Link>
        <Link to={"/schedule"}>schedule</Link>
        <Link to={"/teams"}>teams</Link>
      </nav>
      <AppRouter />;
    </>
  );
}
