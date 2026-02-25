import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="flex justify-between items-center p-5 border-b">
      
      {/* Logo */}
      <h1 className="font-bold text-xl">
        PetHealth Lite
      </h1>

      {/* Navegação */}
      <nav className="flex gap-6">
        <Link to="/" className="hover:text-green-600">
          Home
        </Link>

        <Link to="/taskmaster" className="hover:text-green-600">
          TaskMaster
        </Link>

        <Link to="/connecthub" className="hover:text-green-600">
          ConnectHub
        </Link>

        <Link to="/moneyflow" className="hover:text-green-600">
          MoneyFlow
        </Link>
      </nav>

    </header>
  );
}