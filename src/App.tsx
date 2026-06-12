import { AppRouter } from "./routes/appRouter";
import { Header } from "../../components/header"


export default function App() {
  return (
    <section>
      <Header/>
      <AppRouter />;
    </section>
  );
}
