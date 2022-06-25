<template>
    <div class="w-[350px]">
        <div>
            <p>
                No. <span>{{ nomor + 1 }}</span>
            </p>
        </div>
        <div>
            <p>
                Nama: <span>{{ data.nama }}</span>
            </p>
        </div>
        <!-- NIK -->
        <div>
            <p>
                No. KTP: <span>{{ data.nik }}</span>
            </p>
        </div>
        <!-- NIK -->
        <div>
            <p>
                No. Telp: <span>{{ data.nomor_telp }}</span>
            </p>
        </div>
        <button @click="goPelanggan" class="py-2 px-3 bg-slate-400">
            Selengkapnya
        </button>
    </div>
</template>

<script>
export default {
    name: "CardPelanggan",
    data() {
        return {
            idPelanggan: this.data.id,
        };
    },
    props: ["data", "nomor"],
    methods: {
        goPelanggan() {
            this.$router.push(`/dashboard/pelanggan/${this.idPelanggan}`);
        },
    },
};
</script>

<style></style>
