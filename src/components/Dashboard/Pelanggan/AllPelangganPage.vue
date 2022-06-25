<template>
    <div class="p-20 w-fit">
        <h1 class="mb-4">Daftar pelanggan</h1>

        <div class="flex flex-wrap gap-2">
            <CardPelanggan
                v-for="(dataPelanggan, index) in data"
                :key="dataPelanggan.id_transaksi"
                :nomor="index"
                :data="dataPelanggan"
            />
        </div>
    </div>
</template>

<script>
// import AllPelangganRowVue from "./AllPelangganRow.vue";
import CardPelanggan from "./CardPelanggan.vue";
export default {
    components: { CardPelanggan },
    name: "AllPelanggan",
    data() {
        return {
            data: [],
        };
    },
    methods: {
        async fetchDataViewPelanggan() {
            const response = await fetch(
                "http://localhost/rentalmobil/viewallpelanggan.php"
            );

            const dataResponse = await response.json();
            this.data = dataResponse.data;
            console.log(this.data);
        },
    },
    created() {
        this.fetchDataViewPelanggan();
    },
};
</script>

<style></style>
