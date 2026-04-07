import { ref, computed, watch } from 'vue';

export interface Transaction {
    id: string;
    text: string;
    amount: number;
}

export const useTransactions = () => {
    const transactions = ref<Transaction[]>(
        JSON.parse(localStorage.getItem('transactions') || '[]')
    );

    watch(transactions, (newVal) => {
        localStorage.setItem('transactions', JSON.stringify(newVal));
    }, { deep: true });

    const addTransaction = (text: string, amount: number) => {
        const newTransaction: Transaction = {
            id: Date.now().toString(),
            text,
            amount
        };
        transactions.value.push(newTransaction);
    };

    const deleteTransaction = (id: string) => {
        transactions.value = transactions.value.filter((t) => t.id !== id);
    };

    const balance = computed(() => {
        return transactions.value.reduce((acc, t) => acc + t.amount, 0);
    });

    const income = computed(() => {
        return transactions.value
            .filter((t) => t.amount > 0)
            .reduce((acc, t) => acc + t.amount, 0);
    });

    const expense = computed(() => {
        return Math.abs(
            transactions.value
                .filter((t) => t.amount < 0)
                .reduce((acc, t) => acc + t.amount, 0)
        );
    });

    return {
        transactions,
        addTransaction,
        deleteTransaction,
        balance,
        income,
        expense,
    };
};