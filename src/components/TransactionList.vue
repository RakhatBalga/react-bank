<script lang="ts" setup>

import type { Transaction } from '../hooks/useTransactions';

interface Props {
    transactions: Transaction[];
}

defineProps<Props>();

</script>