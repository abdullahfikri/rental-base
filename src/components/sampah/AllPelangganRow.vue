<template>
    <tr>
        <!-- no -->
        <td>{{ nomor + 1 }}</td>
        <!-- nama -->
        <td>
            <button @click="goPelanggan" class="text-slate-500">
                {{ data.nama }}
            </button>
        </td>
        <!-- NIK -->
        <td>{{ data.nik }}</td>
        <!-- NIK -->
        <td>{{ data.nomor_telp }}</td>
    </tr>
</template>

<script>
export default {
    name: "AllPelangganRow",
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
