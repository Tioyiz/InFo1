import { Header } from "./components/header";
import { AppRouter } from "./routes/appRouter";



export default function App() {
  return (
    <section>
      <Header/>
      <AppRouter />;
    </section>
  );
}
