<script lang="ts" setup>

interface Props {
    balance: number;
    income: number;
    expense: number;
};

defineProps<Props>();

</script>

<template>
    <div class="flex flex-col gap-6 w-full max-w-md mx-auto mb-8">

        <div class="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-white shadow-xl shadow-purple-500/30 transform transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/40 duration-300">
            <h4 class="text-indigo-100 text-sm font-semibold uppercase tracking-widest mb-1 opacity-90">Your balance</h4>
            <h4 id="balance" class="text-5xl font-extrabold tracking-tight">${{ balance.toFixed(2) }}</h4>
        </div>


        <div class="grid grid-cols-2 gap-5">

            <div class="bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-emerald-100 shadow-lg shadow-emerald-500/10 transform transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/20 duration-300">
                <div class="flex items-center gap-3 mb-3">
                    <div class="p-2.5 bg-emerald-100/50 rounded-full">
                        <svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                    </div>
                    <h4 class="text-slate-500 text-xs font-bold uppercase tracking-widest">Income</h4>
                </div>
                <h4 id="money-plus" class="text-2xl font-black text-emerald-600">${{ income.toFixed(2) }}</h4>
            </div>


            <div class="bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-rose-100 shadow-lg shadow-rose-500/10 transform transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-500/20 duration-300">
                <div class="flex items-center gap-3 mb-3">
                    <div class="p-2.5 bg-rose-100/50 rounded-full">
                        <svg class="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"></path></svg>
                    </div>
                    <h4 class="text-slate-500 text-xs font-bold uppercase tracking-widest">Expense</h4>
                </div>
                <h4 id="money-minus" class="text-2xl font-black text-rose-600">${{ Math.abs(expense).toFixed(2) }}</h4>
            </div>
        </div>
    </div>
</template>