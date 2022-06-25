<template>
  <form class="p-20" @submit.prevent="submitTambahTransaksi">
    <div>
      <label for="nama">Nama</label>
      <input
        type="text"
        class="ml-2 border"
        name="nama"
        :value="dataPelanggan.nama"
        disabled
      />
    </div>
    <div>
      <label for="nik">No. KTP</label>
      <input
        type="text"
        class="ml-2 border"
        name="nik"
        :value="dataPelanggan.nik"
        disabled
      />
    </div>
    <div>
      <label for="mobil">Pilih mobil</label>
      <select name="mobil" id="mobil">
        <option
          v-for="data in dataMobil"
          :key="data.id"
          :value="[data.id, data.harga]"
          :disabled="data.status !== '0'"
        >
          {{
            data.jenis + ", tahun : " + data.tahun + ", harga: " + data.harga
          }}
        </option>
      </select>
    </div>
    <div>
      <label for="tanggalSewa">Dari tanggal</label>
      <input
        class="ml-2 border"
        type="date"
        name="tanggalSewa"
        id="tanggalSewa"
        required
      />
    </div>
    <div>
      <label for="lamasewa">Berapa lama</label>
      <input
        class="ml-2 border"
        type="number"
        name="lamaSewa"
        id="lamasewa"
        required
      />
    </div>
    <button class="py-2 px-4 border my-2" type="submit">
      Tambah Transaksi
    </button>
  </form>
</template>

<script>
export default {
  name: "TambahTransaksi",
  data() {
    return {
      dataPelanggan: {},
      dataMobil: [],
    };
  },
  methods: {
    async submitTambahTransaksi(e) {
      const nik = e.target[1].value;
      const dataMobil = e.target[2].value.split(",");

      const formData = new FormData(e.target);
      formData.append("nik", nik);
      formData.append("idMobil", dataMobil[0]);
      formData.append("harga", dataMobil[1]);
      formData.delete("mobil");
      console.log(formData);

      for (const [key, value] of formData) {
        console.log(key, value);
      }

      const response = await fetch(
        "http://localhost/rentalmobil/transaksi.php",
        {
          method: "post",
          body: formData,
        }
      );

      const data = await response.json();
      console.log(data);
    },
    async fecthDataMobil() {
      const response = await fetch(
        "http://localhost/rentalmobil/viewmobil.php"
      );

      const dataResponse = await response.json();
      this.dataMobil = dataResponse.data;
      console.log(this.dataMobil);
    },
    async fecthDataPelanggan() {
      const nik = this.$route.params.nik;
      const response = await fetch(
        `http://localhost/rentalmobil/viewpelanggannik.php?nik=${nik}`
      );

      const dataResponse = await response.json();
      this.dataPelanggan = dataResponse.data;
    },
  },
  created() {
    this.fecthDataMobil();
    this.fecthDataPelanggan();
  },
};
</script>

<style></style>
