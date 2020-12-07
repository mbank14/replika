<template>
  <div>
    <nav class="bg-gray-300">
      <div class="flex justify-between">
        <!-- logo -->
        <div>
          <div>
            <img src="" alt="ipiring logo" />
          </div>
        </div>

        <!-- time -->
        <div>
          <p>{{ waktu }}</p>
          <p>ini waktu</p>
        </div>

        <!-- arrow pagging -->
        <div>
          <p>berhitung</p>
          <div>
            <button
              type="button"
              class="
              inline-flex items-center px-4 py-2 border 
              border-transparent 
              rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Prev
            </button>
            <button
              type="button"
              class="
              inline-flex items-center px-4 py-2 border 
              border-transparent 
              rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      waktu: "",
    };
  },
  created() {
                setInterval(this.currentTime, 1000);
            },
  methods: {
    currentTime() {
      const today = new Date();
      const time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = time;
      this.waktu = dateTime;
      console.log(this.waktu);
    },
  },
};
</script>

<style></style>
