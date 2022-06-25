<template>
    <form @submit.prevent="tambah">
        <label for="nama">Nama</label>
        <input class="border" type="text" name="nama" id="nama" />

        <div>
            <label for="kelamin">Kelamin</label>
            <select name="kelamin" id="kelamin">
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
            </select>
        </div>
        <div>
            <label for="nik">NIK</label>
            <input
                class="border"
                type="number"
                name="nik"
                id="nik"
                v-model="nik"
            />
        </div>
        <div>
            <label for="nomorTelp">No. Telp</label>
            <input
                class="border"
                type="number"
                name="nomorTelp"
                id="nomorTelp"
            />
        </div>

        <div>
            <label for="alamat">Alamat</label>
            <textarea
                class="border"
                id="alamat"
                name="alamat"
                rows="5"
                cols="100"
                maxlength="100"
            />
        </div>
        <div>
            <label for="image">Upload Gambar</label>
            <input type="file" name="image" id="image" />
        </div>
        <div>
            <button type="submit" class="py-2 px-4 bg-slate-300">Tambah</button>
        </div>
    </form>

    <div id="snackbar">{{ snackbarText }}</div>
</template>

<script>
export default {
    name: "TambahPelangganPage",
    data() {
        return {
            snackbarText: "",

            nik: "",
        };
    },
    methods: {
        async tambah(e) {
            const formData = new FormData(e.target);
            const file = e.target[5].files[0];

            if (file !== undefined) {
                formData.append("image", e.target[5].files);

                try {
                    const response = await fetch(
                        "http://localhost/rentalmobil/tambahpelanggan.php",
                        {
                            method: "post",
                            body: formData,
                        }
                    );

                    const data = await response.json();

                    if (data.status !== "failed") {
                        this.$router.push(
                            `/dashboard/tambahtransaksi/${this.nik}`
                        );
                    } else {
                        this.snackbarText = data.message;
                        this.showToast();
                    }
                } catch (e) {
                    this.snackbarText = "Gagal menghubungi server" + e;
                    this.showToast();
                }
            } else {
                this.snackbarText = "Mohon upload images";
                this.showToast();
            }
        },

        showToast() {
            var x = document.getElementById("snackbar");
            x.className = "show";
            setTimeout(function () {
                x.className = x.className.replace("show", "");
            }, 3000);
        },
    },
};
</script>

<style scoped>
#snackbar {
    visibility: hidden;
    min-width: 250px;
    margin-left: -125px;
    background-color: #333;
    color: #fff;
    text-align: center;
    border-radius: 2px;
    padding: 16px;
    position: fixed;
    z-index: 1;
    left: 50%;
    bottom: 30px;
    font-size: 17px;
}

#snackbar.show {
    visibility: visible;
    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
    animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

@-webkit-keyframes fadein {
    from {
        bottom: 0;
        opacity: 0;
    }
    to {
        bottom: 30px;
        opacity: 1;
    }
}

@keyframes fadein {
    from {
        bottom: 0;
        opacity: 0;
    }
    to {
        bottom: 30px;
        opacity: 1;
    }
}

@-webkit-keyframes fadeout {
    from {
        bottom: 30px;
        opacity: 1;
    }
    to {
        bottom: 0;
        opacity: 0;
    }
}

@keyframes fadeout {
    from {
        bottom: 30px;
        opacity: 1;
    }
    to {
        bottom: 0;
        opacity: 0;
    }
}
</style>
