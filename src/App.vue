<script setup lang="ts">

import { useTransactions } from './hooks/useTransactions';
import SummaryCards from './components/SummaryCards.vue';
import TransactionForm from './components/TransactionForm.vue';
import TransactionList from './components/TransactionList.vue';


const { 
  transactions, 
  balance, 
  income, 
  expense, 
  addTransaction, 
  deleteTransaction 
} = useTransactions();
</script>

<template>
  <div class="container">
    <SummaryCards 
      :balance="balance" 
      :income="income" 
      :expense="expense" 
    />

    <TransactionForm @add="addTransaction" />

    <TransactionList 
      :transactions="transactions" 
      @delete="deleteTransaction" 
    />
  </div>
</template>