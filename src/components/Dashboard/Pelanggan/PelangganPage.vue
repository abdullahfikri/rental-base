<template>
    <div class="p-20">
        <button @click="goBack" class="mb-3 py-2 px-4 bg-slate-300">
            Back
        </button>
        <button
            @click="deletePelanggan"
            class="ml-2 mb-3 py-2 px-4 bg-slate-300"
        >
            Delete Pelanggan
        </button>
        <div>
            <p>Nama : {{ dataPelanggan.nama }}</p>
            <p>Kelamin : {{ dataPelanggan.kelamin }}</p>
            <p>No. KTP : {{ dataPelanggan.nik }}</p>
            <p>No. Telp : {{ dataPelanggan.nomor_telp }}</p>
            <p>Alamat : {{ dataPelanggan.alamat }}</p>

            <img :src="dataPelanggan.url_image" alt="image_person" />
        </div>
    </div>
</template>

<script>
export default {
    name: "PelangganPage",
    data() {
        return {
            idPelanggan: this.$route.params.id,
            dataPelanggan: {},
        };
    },
    methods: {
        async fetchDataPelanggan(id) {
            const response = await fetch(
                `http://localhost/rentalmobil/viewpelanggan.php?id=${id}`
            );
            const data = await response.json();
            this.dataPelanggan = data.data;
            console.log(this.dataPelanggan);
        },
        async deletePelanggan() {
            if (
                window.confirm(
                    "Apakah anda yakin ingin menghapus pelanggan ini?"
                )
            ) {
                const response = await fetch(
                    `http://localhost/rentalmobil/deletepelanggan.php?id=${this.idPelanggan}`
                );
                const dataResponse = await response.json();
                console.log(dataResponse);
                if (dataResponse.status === "sukses") {
                    this.$router.push("/dashboard/pelanggan");
                } else {
                    alert("Gagal menghapus user");
                }
            }
        },
        goBack() {
            this.$router.back();
        },
    },
    created() {
        this.fetchDataPelanggan(this.idPelanggan);
    },
};
</script>

<style></style>
