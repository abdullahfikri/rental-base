<template>
    <div class="p-20 w-fit">
        <h1 class="mb-7">Daftar pelanggan</h1>
        <div class="flex flex-wrap">
            <CardTransaksi
                v-for="(data, index) in dataFetchPelanggan"
                :key="data.id_transaksi"
                :nomor="index"
                :data="data"
            />
        </div>
    </div>
</template>

<script>
import CardTransaksi from "./CardTransaksi.vue";
export default {
    components: {
        CardTransaksi,
    },
    name: "PelangganPage",
    data() {
        return {
            dataFetchPelanggan: {},
        };
    },
    methods: {
        async onFetchData() {
            try {
                const response = await fetch(
                    "http://localhost/rentalmobil/viewtransaksi.php"
                );

                const data = await response.json();
                this.dataFetchPelanggan = data.data;

                console.log(this.dataFetchPelanggan);
            } catch (err) {
                console.log(err.message);
            }
        },
    },
    created() {
        this.onFetchData();
    },
};
</script>

<style></style>
