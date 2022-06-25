<template>
    <div class="w-[300px] border flex flex-col">
        <div>
            <p>
                No. <span>{{ nomor + 1 }}</span>
            </p>
        </div>
        <p>
            Nama: <button @click="goPelanggan">{{ data.nama }}</button>
        </p>
        <p>
            Alamat: <span> {{ data.alamat }}</span>
        </p>
        <p>
            Tanggal Pinjam: <span>{{ data.tanggal_pinjam }}</span>
        </p>
        <!-- tgl kembali -->
        <p>
            Tanggal Kembali: <span>{{ data.tanggal_kembali }}</span>
        </p>
        <!-- mobil -->
        <p>
            Mobi: <span>{{ data.nama_mobil }}</span>
        </p>
        <!-- plat -->
        <p>
            Plat: <span>{{ data.plat }}</span>
        </p>
        <!-- harga -->
        <p>
            Total Harga: <span>{{ data.harga }}</span>
        </p>
        <!-- status -->
        <p>{{ statusTransaksi == 0 ? "Selesai" : "Aktif" }}</p>
        <!-- no telp -->
        <p>
            No. Telp <span>{{ data.nomor_telp }}</span>
        </p>
        <button
            @click="onSelesaiClick"
            class="bg-slate-300"
            v-if="data.status == 1"
        >
            Selesai
        </button>
    </div>
</template>

<script>
export default {
    name: "CardTransaksi",
    data() {
        return {
            statusTransaksi: this.data.status,
            idPelanggan: this.data.id_pelanggan,
            idMobil: this.data.id_mobil,
            idTransaksi: this.data.id_transaksi,
        };
    },
    props: ["nomor", "data"],
    methods: {
        goPelanggan() {
            this.$router.push(`/dashboard/pelanggan/${this.idPelanggan}`);
        },
        async onSelesaiClick() {
            const response = await fetch(
                `http://localhost/rentalmobil/selesaikantransaksi.php?id=${this.idTransaksi}`
            );

            const dataResponse = await response.json();
            if (dataResponse.status === "sukses") {
                this.statusTransaksi = 0;
            } else {
                alert("Gagal menyelesaikan transaksi");
            }
        },
    },
};
</script>

<style></style>
