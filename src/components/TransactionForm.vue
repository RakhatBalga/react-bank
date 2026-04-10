<template>
  <div class="mt-6">
    <h3 class="text-lg font-semibold border-b pb-2 mb-4">Add new transaction</h3>
    <form @submit.prevent="onSubmit">
      <div class="mb-4">
        <label for="text" class="block text-sm font-medium text-gray-700">Text</label>
        <input 
          type="text" 
          id="text" 
          v-model="text" 
          placeholder="Enter text..." 
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
        />
      </div>

      <!-- Half of the transaction form implemented! You can add the amount field and submit button below. -->
      
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const text = ref('');
// const amount = ref('');

const emit = defineEmits<{
  (e: 'add-transaction', text: string, amount: number): void
}>();

const onSubmit = () => {
  // if (!text.value || !amount.value) return;
  // emit('add-transaction', text.value, parseFloat(amount.value as string));
  // text.value = '';
  // amount.value = '';
};
</script>
