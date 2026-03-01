import { NavLink } from "react-router-dom";

export function Header(){
    return(
        <>
            <div className="bg-gradient-to-r from-emerald-400 to-emerald-900 w-full h-[50px] flex items-center justify-between gap-8">
                    <NavLink to={'/'}>
                    {/* quis fazer aqui um contorno para o nome do portal ficar mais bonito, mas não consegui fazer o contorno, então deixei só a sombra mesmo, ficou legal também */}
                        <h2 className="text-white ml-8 font-bold font-[Monaco] text-2xl duration-300 border-transparent hover:text-black-600 cursor-pointer hover:shadow-[0_0_20px_4px_rgba(241,245,249,0.5)] ">
                        Portal de Ferramentas RPV
                    </h2>
                    </NavLink>
                    <div className="flex gap-8 mr-8">
                        {/* pra esse hover aqui usei um video que vi no youtube. */}
                        <NavLink className='text-xs text-white bg-emerald-400 text-emerald-900 rounded-lg px-2 flex items-center justify-center py-1 transition-all duration-300 hover:border-blue-600 cursor-pointer hover:shadow-[0_0_20px_4px_rgba(241,245,249,0.5)]' to={'/'}> Home</NavLink>
                        <NavLink className='text-xs text-white bg-emerald-400 text-emerald-900 rounded-lg px-2 flex items-center justify-center py-1 transition-all duration-300 hover:border-blue-600 cursor-pointer hover:shadow-[0_0_20px_4px_rgba(241,245,249,0.5)]' to={'/TaskMaster'}>TaskMaster</NavLink>
                        <NavLink className='text-xs text-white bg-emerald-400 text-emerald-900 rounded-lg px-2 flex items-center justify-center py-1 transition-all duration-300 hover:border-blue-600 cursor-pointer hover:shadow-[0_0_20px_4px_rgba(241,245,249,0.5)]' to={'/ConnectHub'}>ConnectHub</NavLink>
                        <NavLink className='text-xs text-white bg-emerald-400 text-emerald-900 rounded-lg px-2 flex items-center justify-center py-1 transition-all duration-300 hover:border-blue-600 cursor-pointer hover:shadow-[0_0_20px_4px_rgba(241,245,249,0.5)]' to={'/MoneyFlow'}>MoneyFlow</NavLink>
                    </div>
                </div>
        </>
    )
}