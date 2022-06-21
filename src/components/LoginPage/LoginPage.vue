<template>
  <div class="bac">
    <main class="form-signin grid place-items-center h-screen">
      <div class="border p-[30px]">
        <form @submit.prevent="onSubmit">
          <h1
            class="text-center font-bold border-b-2 border-b-blue-600 pb-2 mb-3"
          >
            LOGIN
          </h1>

          <div class="form-floating">
            <label class="text-red-700 font-bold block" for="user"
              >username :</label
            >
            <input
              type="text"
              id="user"
              v-model="username"
              class="form-control border-2 border-blue-600"
            />
          </div>
          <div class="form-floating">
            <label class="text-red-700 font-bold block" for="password"
              >password :</label
            >
            <input
              id="password"
              v-model="password"
              type="password"
              class="form-control border-2 border-blue-600"
            />
          </div>

          <button
            class="bg-sky-600 p-[10px] font-bold text-white w-full mt-3"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async onSubmit() {
      try {
        const response = await fetch(
          `http://localhost/rentalmobil/login.php?username=${this.username}&password=${this.password}`,
          {
            mode: "cors",
          }
        );

        if (!response.ok) throw new Error("Problem fetching data from server");

        const data = await response.json();

        console.log(data);
      } catch (err) {
        console.log(err.message);
      }
    },
  },
};
</script>
