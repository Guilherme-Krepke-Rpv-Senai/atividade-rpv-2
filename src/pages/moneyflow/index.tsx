import { useState } from 'react';
import { Footer } from "../../componnent/footer";
import { Header } from "../../componnent/header";

interface Transaction {
    id: number;
    description: string;
    value: number;
    type: 'income' | 'expense';
}

export function MoneyFlow() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const total = transactions.reduce((sum, t) =>
        sum + (t.type === 'income' ? t.value : -t.value), 0
    );

    const handleAddTransaction = (type: 'income' | 'expense') => {
        setError('');
        const numValue = parseFloat(value);

        if (!description.trim()) {
            setError('Descrição é obrigatória');
            return;
        }

        if (isNaN(numValue) || numValue <= 0) {
            setError('Valor deve ser maior que zero');
            return;
        }

        setTransactions([...transactions, {
            id: Date.now(),
            description,
            value: numValue,
            type
        }]);

        setDescription('');
        setValue('');
    };

    const handleDelete = (id: number) => {
        setTransactions(transactions.filter(t => t.id !== id));
    };

    return (
        <>
            <Header />
            <div className='bg-gray-100 w-full min-h-[calc(100vh-74px)] flex flex-col items-center justify-start py-8'>
                <div className='flex flex-col items-center justify-center w-full max-w-2xl mb-8 px-4'>
                    <h1 className='text-5xl font-bold mb-2'>MoneyFlow</h1>
                    <p className='text-gray-500 mb-6'>Controle de Gastos e Receitas</p>
                </div>
                <div className='bg-white w-[42rem] flex flex-col rounded-3xl shadow-lg shadow-gray-300 overflow-hidden'>
                    <div className='bg-emerald-700 w-full h-3'></div>
                    <div className='p-8'>
                        <div className='bg-blue-50 p-4 rounded-lg mb-6'>
                            <p className='text-gray-600 text-sm'>Saldo Total</p>
                            <h2 className={`text-3xl font-bold ${total >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                                R$ {total.toFixed(2)}
                            </h2>
                        </div>
                        <div className='space-y-4 mb-6'>
                            <input
                                type='text'
                                placeholder='Descrição da transação'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500'
                            />
                            <input
                                type='number'
                                placeholder='Valor'
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500'
                            />
                            {error && <p className='text-red-500 text-sm'>{error}</p>}

                            <div className='flex gap-3'>
                                <button
                                    onClick={() => handleAddTransaction('income')}
                                    className='flex-1 bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700'
                                >
                                    ➕ Entrada
                                </button>
                                <button
                                    onClick={() => handleAddTransaction('expense')}
                                    className='flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700'
                                >
                                    ➖ Saída
                                </button>
                            </div>
                        </div>

                        <div className='space-y-2 max-h-96 overflow-y-auto'>
                            {transactions.map((t) => (
                                <div key={t.id} className='flex justify-between items-center p-3 bg-gray-50 rounded-lg'>
                                    <div className='flex-1'>
                                        <p className='font-medium'>{t.description}</p>
                                        <p className={t.type === 'income' ? 'text-emerald-600' : 'text-red-600'}>
                                            {t.type === 'income' ? '+' : '-'} R$ {t.value.toFixed(2)}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => handleDelete(t.id)}
                                        className='text-red-500 hover:text-red-700 ml-4'
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}