<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits<{
  (e: 'addTransaction', text: string, amount: number): void
}>();

const text = ref('');
const amount = ref<number | null>(null);

const onSubmit = () => {
  if (!text.value || amount.value === null) {
    alert('Please add a text and amount');
    return;
  }

  emit('addTransaction', text.value, amount.value);

  text.value = '';
  amount.value = null;
};
</script>