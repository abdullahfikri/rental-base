<template>
    <div class="p-20 w-fit">
        <div>
            <h1 class="font-bold text-2xl mb-2">List Mobil</h1>
            <button
                @click="toTambahMobil"
                class="py-3 px-5 bg-slate-200 rounded-lg"
            >
                Tambah Mobil
            </button>
        </div>
        <div class="flex flex-wrap gap-5 mt-5">
            <CardPage v-for="data in dataMobil" :key="data.id" :data="data" />
        </div>
    </div>
</template>

<script>
import CardPage from "./CardPage.vue";
export default {
    components: { CardPage },
    name: "MobilPage",
    data() {
        return {
            dataMobil: [],
        };
    },
    methods: {
        async getMobil() {
            const response = await fetch(
                "http://localhost/rentalmobil/viewmobil.php"
            );
            const data = await response.json();
            this.dataMobil = data.data;
            console.log(this.dataMobil);
        },
        toTambahMobil() {
            this.$router.push("/dashboard/tambahmobil");
        },
    },
    created() {
        this.getMobil();
    },
};
</script>

<style></style>
