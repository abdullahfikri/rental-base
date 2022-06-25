<template>
    <div class="border w-80 flex flex-col rounded-xl overflow-hidden">
        <img
            class="h-[200px] w-full bg-slate-100"
            :src="data.url_image"
            alt="contoh"
        />
        <div class="p-6 text-center border-t">
            <h1 class="font-bold text-3xl">{{ data.jenis }}</h1>
            <p class="font-light text-lg">{{ data.tahun }}</p>
            <p class="text-xl">{{ idrFormat }}/Hari</p>
            <p
                :class="
                    data.status == 0
                        ? 'text-green-700 font-bold mt-3'
                        : 'text-red-500 font-bold mt-3'
                "
            >
                {{ status }}
            </p>
            <button
                @click="onDeleteMobil"
                class="text-white bg-red-700 py-2 px-5 mt-3 rounded-lg"
            >
                Hapus
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardPage",
    data() {
        return {
            idrFormat: null,
            status: "",
        };
    },
    props: ["data"],
    methods: {
        convertToIdrFormat() {
            this.idrFormat = new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
            }).format(this.data.harga);
        },
        checkStatus() {
            if (this.data.status == 1) {
                this.status = "Sedang Disewa";
            } else {
                this.status = "Tersedia";
            }
        },

        async onDeleteMobil() {
            if (
                window.confirm(
                    "Apakah anda yakin ingin menghapus mobil yang dipilih?"
                )
            ) {
                if (this.data.status != 0) {
                    alert(
                        "Mobil sedang disewa, tidak dapat menghapus sekarang"
                    );
                } else {
                    console.log(this.data.id);
                    const response = await fetch(
                        `http://localhost/rentalmobil/deletemobil.php?idmobil=${this.data.id}`
                    );
                    const message = await response.json();

                    console.log(message);
                    if (message.status === "sukses") {
                        this.$router.go();
                        alert("Sukses menghapus data mobil");
                    }
                }
            }
        },
    },
    created() {
        this.convertToIdrFormat();
        this.checkStatus();
    },
};
</script>

<style></style>
