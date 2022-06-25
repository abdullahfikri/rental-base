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
    <!-- alamat -->
    <td>{{ data.alamat }}</td>
    <!-- tgl pinjam -->
    <td>{{ data.tanggal_pinjam }}</td>
    <!-- tgl kembali -->
    <td>{{ data.tanggal_kembali }}</td>
    <!-- mobil -->
    <td>{{ data.nama_mobil }}</td>
    <!-- plat -->
    <td>{{ data.plat }}</td>
    <!-- harga -->
    <td>{{ data.harga }}</td>
    <!-- status -->
    <td>{{ data.status == 0 ? "Sudah Kembali" : "Aktif" }}</td>
    <!-- no telp -->
    <td>{{ data.nomor_telp }}</td>
  </tr>
</template>

<script>
export default {
  name: "PelangganTableRow",
  data() {
    return {
      idPelanggan: this.data.id_pelanggan,
      idMobil: this.data.id_mobil,
    };
  },
  props: ["nomor", "data"],
  methods: {
    goPelanggan() {
      this.$router.push(`/dashboard/pelanggan/${this.idPelanggan}`);
    },
  },
};
</script>

<style></style>
