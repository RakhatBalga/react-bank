export interface Transaction {
    id: string, 
    amount: number, 
    text: string,
}

export const useTransactions = () => {
    const transactions = ref<Transaction[]>([]);

    const addTransaction = (Transaction: Transaction) => {
        transactions.value.push(Transaction);
    }

    const deleteTransaction = (id: string) => {
        transactions.value = transactions.value.filter((t) => t.id !== id);
    }

    const balance = computed(() => {
        return transactions.value.reduce((acc, t) => acc + t.amount, 0);
    })

    const income = computed(() => {
        return transactions.value.filter((t) => t.amount > 0).reduce((acc, t) => acc + t.amount, 0);
    })

    const expense = computed(() => {
        return transactions.value.filter((t) => t.amount < 0).reduce((acc, t) => acc + t.amount, 0);
    })

    return {
        transactions,
        addTransaction,
        deleteTransaction,
        balance,
        income,
        expense,
    }
}