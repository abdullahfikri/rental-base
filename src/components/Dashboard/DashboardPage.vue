<template>
    <div class="h-full flex">
        <SidebarPage />
        <div class="min-w-[300px]"></div>
        <router-view></router-view>
    </div>
</template>

<script>
import SidebarPage from "./SidebarPage.vue";
export default {
    name: "DashboardPage",
    components: {
        SidebarPage,
    },
};
</script>

<style></style>
