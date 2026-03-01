import { useState } from 'react';
import { Footer } from "../../componnent/footer";
import { Header } from "../../componnent/header";

interface Contact {
    id: string;
    name: string;
    email: string;
    phone: string;
}

export function ConnectHub() {
    const [contacts, setContacts] = useState<Contact[]>(() => {
        const saved = localStorage.getItem('contacts');
        return saved ? JSON.parse(saved) : [];
    });

    const [form, setForm] = useState({ name: '', email: '', phone: '' });
    const [error, setError] = useState('');

    const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePhone = (phone: string) => /^\d+$/.test(phone);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');

        if (!form.name.trim()) {
            setError('Nome é obrigatório');
            return;
        }
        if (!validateEmail(form.email)) {
            setError('E-mail inválido');
            return;
        }
        if (!validatePhone(form.phone)) {
            setError('Telefone deve conter apenas números');
            return;
        }

        const newContact: Contact = {
            id: Date.now().toString(),
            ...form,
        };

        const updated = [...contacts, newContact];
        setContacts(updated);
        localStorage.setItem('contacts', JSON.stringify(updated));
        setForm({ name: '', email: '', phone: '' });
    };

    const deleteContact = (id: string) => {
        const updated = contacts.filter(c => c.id !== id);
        setContacts(updated);
        localStorage.setItem('contacts', JSON.stringify(updated));
    };

    return (
        <>
            <Header />
            <div className='bg-gray-100 w-full min-h-[calc(100vh-106px)] py-8 flex flex-col items-center justify-center'>
                <div className='flex flex-col items-center justify-center w-full max-w-2xl mb-8 px-4'>
                    <h1 className='text-5xl font-bold mb-2'>ConnectHub</h1>
                    <p className='text-gray-500 mb-6'>Gerencie seus contatos com facilidade</p>
                </div>
                <div className='w-2xl bg-white rounded-3xl shadow-lg overflow-hidden'>
                    <div className='bg-green-700 w-full h-3'></div>
                    <div className='p-8'>
                        <form onSubmit={handleSubmit} className='space-y-4 mb-8'>
                            {error && <div className='bg-red-100 text-red-700 p-3 rounded-lg'>{error}</div>}

                            <input
                                type='text'
                                placeholder='Nome Completo'
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                className='w-full px-4 py-2 border border-gray-300 rounded-lg hover:ring-2 hover:ring-emerald-500'
                            />

                            <input
                                type='email'
                                placeholder='E-mail'
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                className='w-full px-4 py-2 border border-gray-300 rounded-lg hover:ring-2 hover:ring-emerald-500'
                            />

                            <input
                                type='text'
                                placeholder='Telefone'
                                value={form.phone}
                                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                className='w-full px-4 py-2 border border-gray-300 rounded-lg hover:ring-2 hover:ring-emerald-500'
                            />

                            <button
                                type='submit'
                                className='w-full bg-emerald-700 text-white py-2 rounded-lg hover:bg-emerald-800 transition'
                            >
                                Adicionar Contato
                            </button>
                        </form>

                        <div className='space-y-2'>
                            {contacts.length === 0 ? (
                                <p className='text-gray-400 text-center py-4'>Nenhum contato cadastrado</p>
                            ) : (
                                contacts.map(contact => (
                                    <div key={contact.id} className='flex justify-between items-center bg-gray-50 p-4 rounded-lg'>
                                        <div>
                                            <p className='font-semibold'>{contact.name}</p>
                                            <p className='text-sm text-gray-500'>{contact.email}</p>
                                            <p className='text-sm text-gray-500'>{contact.phone}</p>
                                        </div>
                                        <button
                                            onClick={() => deleteContact(contact.id)}
                                            className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition'
                                        >
                                            Deletar
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}