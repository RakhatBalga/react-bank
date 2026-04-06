import React from 'react';
import { useState } from 'react';

interface Props {
    onAdd: (text: string, amount: number) => void;
}

export const TransactionForm = ({ onAdd }: Props) => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if(text.trim() && amount !== '') {
            alert("Please enter the text and amount of money.");
            return;
        }

        onAdd(text, +amount);

        setText('');
        setAmount('');
    };
    
}