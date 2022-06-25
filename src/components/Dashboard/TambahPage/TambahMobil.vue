<template>
    <div>
        <form @submit.prevent="submitTambahMobil">
            <div>
                <label for="jenis">Jenis Mobil</label>
                <select name="jenis" id="jenis">
                    <option
                        v-for="data in dataJenisMobil"
                        :key="data.id"
                        :value="data.id"
                    >
                        {{ data.nama_mobil }}
                    </option>
                </select>
            </div>
            <div>
                <label for="warna">Warna</label>
                <input class="border" type="text" name="warna" id="warna" />
            </div>
            <div>
                <label for="plat">No. Plat</label>
                <input
                    class="border"
                    type="text"
                    maxlength="10"
                    name="plat"
                    id="plat"
                />
            </div>

            <div>
                <label for="tahun">Tahun Mobil</label>
                <select name="tahun" id="tahun">
                    <option
                        v-for="tahun in tahunMobil"
                        :key="tahun"
                        :value="tahun"
                    >
                        {{ tahun }}
                    </option>
                </select>
            </div>
            <div>
                <label for="harga">Harga / Hari</label>
                <input type="number" name="harga" id="harga" />
            </div>
            <div>
                <label for="image">Upload Gambar</label>
                <input type="file" name="image" id="image" />
            </div>
            <div>
                <button type="submit" class="py-2 px-4 bg-slate-300">
                    Tambah
                </button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "TambahMobil",
    data() {
        return {
            dataJenisMobil: [],
            tahunMobil: [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015],
        };
    },
    methods: {
        async getJenisMobil() {
            const response = await fetch(
                `http://localhost/rentalmobil/viewjenis_mobil.php`
            );
            const data = await response.json();
            this.dataJenisMobil = data.data;
            console.log(data);
        },
        async submitTambahMobil(e) {
            const file = e.target[5].files[0];
            const formData = new FormData(e.target);

            if (file !== undefined) {
                formData.append("image", file);
                const response = await fetch(
                    "http://localhost/rentalmobil/images/tambahmobil.php",
                    {
                        method: "POST",
                        body: formData,
                    }
                );
                const data = await response.json();
                console.log(data);
                if (data.status == "sukses") {
                    this.$router.push("/dashboard/mobillist");
                } else {
                    alert("Gagal menambahkan data mobil");
                }
            } else {
                alert("Mohon upload gambar dengan benar");
            }
        },
    },
    created() {
        this.getJenisMobil();
    },
};
</script>

<style></style>
