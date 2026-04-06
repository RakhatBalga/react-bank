import { Transaction } from '../hooks/useTransaction';

interface Props {
  transactions: Transaction[];
  onDelete: (id: string) => void;
}

export const TransactionList = ({ transactions, onDelete }: Props) => {
  return (
    <div className="transaction-list">
      <h3>История транзакций</h3>
      <ul className="list">
        {transactions.map((t) => (
          <li key={t.id} className={t.amount < 0 ? 'minus' : 'plus'}>
            {t.text} <span>{t.amount < 0 ? '-' : '+'}${Math.abs(t.amount)}</span>
            <button 
              onClick={() => onDelete(t.id)} 
              className="delete-btn"
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};