import { useState, useEffect } from 'react';
import { Header } from '../../componnent/header';
import { Footer } from '../../componnent/footer';

interface Task {
    id: string;
    title: string;
    category: 'Trabalho' | 'Pessoal' | 'Urgente';
    description?: string;
    completed: boolean;
    customCategories?: string[];
    createdAt: string;
}

export function TaskMaster() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [title, setTitle] = useState('Trabalho');
    const [category, setCategory] = useState('Trabalho');
    const [error, setError] = useState('');

    useEffect(() => {
        const savedTasks = localStorage.getItem('taskmaster_tasks');
        if (savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('taskmaster_tasks', JSON.stringify(tasks));
    }, [tasks]);


    const handleAddTask = () => {
        setError('');

        if (title.trim().length < 5) {
            setError('Título deve ter no mínimo 5 caracteres');
            return;
        }

        if (!category.trim()) {
            setError('Categoria é obrigatória');
            return;
        }

        const newTask: Task = {
            id: Date.now().toString(),
            title: title.trim(),
            category: category as any,
            completed: false,
            createdAt: new Date().toLocaleDateString('pt-BR'),
        };

        setTasks([...tasks, newTask]);
        setTitle('');
        setCategory('Trabalho');
    };

    const handleRemoveTask = (id: string) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'Trabalho':
                return 'bg-blue-50 text-blue-700 border border-blue-200';
            case 'Pessoal':
                return 'bg-green-50 text-green-700 border border-green-200';
            case 'Urgente':
                return 'bg-red-50 text-red-700 border border-red-200';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleAddTask();
        }
    };

    return (
        <>
            <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
                <Header />

                <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
                    <div className='flex flex-col items-center justify-center w-full max-w-2xl mb-8 mx-auto'>
                <h1 className="text-5xl font-bold text-gray-900 mb-2">TaskMaster</h1>
                <p className="text-lg text-gray-500">Organize suas tarefas de forma eficiente</p>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        <div className="mb-8">
                        </div>

                        {/* Form */}
                        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Título *
                                    </label>
                                    <input
                                        type="text"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                        placeholder="Digite o título da tarefa..."
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg hover:border-emerald-500 outline-none transition"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Categoria
                                    </label>
                                    <select
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value as any)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                                    >
                                        <option>Trabalho</option>
                                        <option>Pessoal</option>
                                        <option>Urgente</option>
                                    </select>
                                </div>

                                {error && <p className="text-red-600 text-sm font-medium">{error}</p>}

                                <button
                                    onClick={handleAddTask}
                                    className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold py-3 px-4 rounded-lg transition shadow-md"
                                >
                                    Adicionar Tarefa
                                </button>
                            </div>
                        </div>

                        {/* Tasks List */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Tarefas ({tasks.length})
                            </h2>
                            <div className="space-y-3">
                                {tasks.length === 0 ? (
                                    <div className="bg-white rounded-xl shadow p-8 text-center border border-gray-200">
                                        <p className="text-gray-500 text-lg">Nenhuma tarefa adicionada</p>
                                    </div>
                                ) : (
                                    tasks.map((task) => (
                                        <div
                                            key={task.id}
                                            className="bg-white rounded-xl shadow p-5 flex items-center justify-between hover:shadow-md transition border border-gray-200"
                                        >
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-gray-900 text-lg">{task.title}</h3>
                                                <div className="flex items-center gap-3 mt-2">
                                                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getCategoryColor(task.category)}`}>
                                                        {task.category}
                                                    </span>
                                                    <span className="text-xs text-gray-500">{task.createdAt}</span>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => handleRemoveTask(task.id)}
                                                className="ml-4 bg-red-50 hover:bg-red-100 text-red-600 font-semibold py-2 px-4 rounded-lg transition border border-red-200"
                                            >
                                                Remover
                                            </button>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}