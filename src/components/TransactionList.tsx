import type { Transaction } from '../hooks/useTransactions';

interface Props {
    transactions: Transaction[];
    onDeleteTransaction: (id: string) => void;
}

export const TransactionList = ({ transactions, onDeleteTransaction }: Props) => {
    return {
        
    }
}