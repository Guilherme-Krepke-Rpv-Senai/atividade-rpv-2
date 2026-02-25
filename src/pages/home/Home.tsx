import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="p-40">
      <h1>Portal de Ferramentas</h1>

      <div className="mt-20">
        <div className="bg-white w-full h-screen">
        <div className="bg-white w-full h-screen">
        <Link to="/taskmaster">TaskMaster</Link>
        <br />
        </div>
        <Link to="/connecthub">ConnectHub</Link>
        <br />
        <Link to="/moneyflow">MoneyFlow</Link>
        </div>
      </div>
    </div>
  );
}