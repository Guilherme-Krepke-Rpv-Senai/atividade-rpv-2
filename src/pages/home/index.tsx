import { Header } from "../../componnent/header";
import { Footer } from "../../componnent/footer";
import { useNavigate } from "react-router-dom";

export function Home() {
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <div className='bg-gray-50 w-full min-h-[calc(100vh-74px)] flex flex-col items-center justify-start pt-12'>
                <div className='text-center mb-8'>
                    <h1 className='text-5xl font-bold text-gray-800 mb-4'>Portal de Ferramentas</h1>
                    <p className='text-lg text-gray-500'>Acesse nossas principais aplicações</p>
                </div>

                <div className='w-full flex items-center justify-center px-8 pb-12'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl'>
                        {/* TaskMaster Card */}
                        <div className='bg-white w-full h-64 flex flex-col rounded-3xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden'>
                            <div className='bg-emerald-500 w-full h-3'></div>
                            <div className='flex-1 flex flex-col items-center justify-center px-6'>
                                <div className='bg-emerald-100 text-emerald-600 w-20 h-20 flex items-center justify-center rounded-2xl mb-4 text-3xl font-bold'>
                                    📋
                                </div>
                                <h2 className='text-xl font-bold text-gray-800 mb-2'>TaskMaster</h2>
                                <p className='text-sm text-gray-600 text-center mb-6'>Gerencie suas tarefas com eficiência</p>
                                <button
                                    onClick={() => navigate('/taskmaster')}
                                    className='bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-8 rounded-lg transition-colors w-full'
                                >
                                    Acessar
                                </button>
                            </div>
                        </div>

                        {/* ConnectHub Card */}
                        <div className='bg-white w-full h-64 flex flex-col rounded-3xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden'>
                            <div className='bg-emerald-500 w-full h-3'></div>
                            <div className='flex-1 flex flex-col items-center justify-center px-6'>
                                <div className='bg-emerald-100 text-emerald-600 w-20 h-20 flex items-center justify-center rounded-2xl mb-4 text-3xl font-bold'>
                                    🔗
                                </div>
                                <h2 className='text-xl font-bold text-gray-800 mb-2'>ConnectHub</h2>
                                <p className='text-sm text-gray-600 text-center mb-6'>Conecte-se com sua comunidade</p>
                                <button
                                    onClick={() => navigate('/connecthub')}
                                    className='bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-8 rounded-lg transition-colors w-full'
                                >
                                    Acessar
                                </button>
                            </div>
                        </div>

                        {/* Third Tool Card */}
                        <div className='bg-white w-full h-64 flex flex-col rounded-3xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden'>
                            <div className='bg-emerald-500 w-full h-3'></div>
                            <div className='flex-1 flex flex-col items-center justify-center px-6'>
                                <div className='bg-emerald-100 text-emerald-600 w-20 h-20 flex items-center justify-center rounded-2xl mb-4 text-3xl font-bold'>
                                    💸
                                </div>
                                <h2 className='text-xl font-bold text-gray-800 mb-2'>MoneyFlow</h2>
                                <p className='text-sm text-gray-600 text-center mb-6'>Controle suas finanças de forma eficiente</p>
                                <button
                                    onClick={() => navigate('/moneyflow')}
                                    className='bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-8 rounded-lg transition-colors w-full'
                                >
                                    Acessar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}