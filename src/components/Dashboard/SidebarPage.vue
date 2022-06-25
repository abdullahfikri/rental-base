<template>
    <div
        class="sidebar fixed h-full top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900"
    >
        <div class="text-gray-100 text-xl">
            <div class="p-2.5 mt-1 flex items-center">
                <font-awesome-icon icon="building" class="text-4xl" />
                <h1 class="font-bold text-gray-200 text-[15px] ml-3">
                    Rental Bengkalis
                </h1>
                <font-awesome-icon
                    icon="xmark"
                    class="ml-16 cursor-pointer lg:hidden"
                />
            </div>
            <hr class="my-2 text-gray-600" />
        </div>

        <!-- Sewa/Transaksi Button -->

        <div
            @click="toTransaksi"
            class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
        >
            <font-awesome-icon icon="book" />
            <span class="text-[15px] ml-4 text-gray-200">Sewa</span>
        </div>
        <!-- Mobil Button -->

        <div
            @click="toMobil"
            class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
        >
            <font-awesome-icon icon="car" />
            <span class="text-[15px] ml-4 text-gray-200">Mobil</span>
        </div>

        <!-- Pelanggan view Button -->

        <div
            @click="toPelanggan"
            class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
        >
            <font-awesome-icon icon="user" />
            <span class="text-[15px] ml-4 text-gray-200">Pelanggan</span>
        </div>

        <hr class="my-2 text-gray-600" />
        <!-- TAMBAH PELANGGAN -->
        <div
            @click="toTambah"
            class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
        >
            <font-awesome-icon icon="plus" />
            <span class="text-[15px] ml-4 text-gray-200">Tambah Pelanggan</span>
        </div>
        <!-- TAMBAH MOBIL -->
        <div
            @click="toTambahMobil"
            class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
        >
            <font-awesome-icon icon="plus" />
            <span class="text-[15px] ml-4 text-gray-200">Tambah Mobil</span>
        </div>

        <!-- MENU LOGOUT -->
        <div
            class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
        >
            <font-awesome-icon icon="right-from-bracket" />
            <span class="text-[15px] ml-4 text-gray-200">Logout</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "SidebarPage",
    components: {},
    methods: {
        toTransaksi() {
            this.$router.push("/dashboard/transaksi");
        },
        toTambahMobil() {
            this.$router.push("/dashboard/tambahmobil");
        },
        toTambah() {
            this.$router.push("/dashboard/tambah");
        },
        toPelanggan() {
            this.$router.push("/dashboard/pelanggan");
        },
        toMobil() {
            this.$router.push("/dashboard/mobillist");
        },
    },
};
</script>
