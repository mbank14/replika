<template>
  <div>
       <nav style="background-color: #fddb3a;" class="mb-4">
      <div class="flex justify-between items-center">
        <!-- logo -->
        <div class="content-center">
          <div class="w-16">
            <img src="../assets/ipiring.png" alt="logo" />
          </div>
        </div>

        <!-- time -->
        <div>
          <p>{{ waktu }}</p>
          <p>{{totalOrderFinished.length}} Order Finished</p>
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

    <!-- main -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <div v-for="(datas, index) in getData" :key="datas.id">
        <div>
          <div
            class="w-auto mx-4 
          rounded shadow-lg my-2 p-0.5 bg-red-500"
            :class="{ 'warna-merah': parseInt(datas.orderTime) > new Date().getHours() }"
          >
            <div class="px-3 h-10 text-white">
              <p class="font-bold">Order ID {{ datas.id }}</p>
            </div>
            <div class="px-2 bg-white h-72 divide-y">
              <div
                v-for="item in datas.items"
                :key="item.id"
                class="flex justify-between py-4"
              >
              
                <div>
                  <p class="font-bold">
                    {{ item.itemName.name }}
                    <span class="font-normal">{{ item.itemName.variant }}</span>
                  </p>
                  <div v-if="item.extra">
                  <p  class="text-xs">
                    Extra: {{ item.extra }}
                  </p>
                  </div>

                  
                </div>
                <div class="bg-red-600 text-center align-middle  rounded-md w-7 h-7" :class="{ 'warna-merah': parseInt(datas.orderTime) > new Date().getHours() }">
                  <p
                    class=" font-bold text-white "
                    
                  >
                    {{ item.qyt }}
                  </p>
                </div>
              </div>
            </div>

            <div class="px-4 py-3">
              <div class="my-2 text-white" style="font-size:10px;">
                <div class="flex justify-between py-1">
                <p>ORDER ACCEPTED AT</p>
                <p v-if="parseInt(datas.orderTime) < new Date().getHours()">DELAYED BY</p>
                <p v-else>TO BE RADY IN</p>
                <!-- <p v-if=""></p> -->
                </div>
                <div class="flex justify-between">

                <p class="font-bold">{{ datas.orderTime }}</p>
                <!-- <p class="font-bold" > {{ kook }}</p> -->
                <!-- <p v-if="(parseInt(datas.orderTime) - new Date().getHours()) > 19 ">Sehari</p>
                <p v-else>mantul</p> -->
                </div>
              </div>

              <div>
                <button
                @click="markAsReady(index)"
                  type="button"
                  class="container bg-white hover:bg-gray-300
            px-4 py-2
             rounded-md
             font-bold
             text-red-400
             
            "
            :class="{ 'btn-colors': parseInt(datas.orderTime) > new Date().getHours() }"
                >
                  MARK AS READY
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "OrderList",
  data() {
    return {
      dataOrderList: [],
      waktuAwal: "",
      status : "",
      statusTeakhir: "",
      waktu: "",
      totalOrderFinished: [],
    };
  },
  computed: {
    ...mapGetters(["getData","getWaktu"]),
   
  },
  created() {
                setInterval(this.currentTime, 1000);
            },
  mounted() {
    this.getData;

  },
  methods: {
    currentTime() {
      const today = new Date();
      const time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = time;
      this.waktu = dateTime;
      // console.log(this.waktu);
    },
    markAsReady(index) {
        const confirm = this.totalOrderFinished.push(index);
        if (confirm) {
           this.getData.splice(index, 1)
        }
    },
   

    // timeDue(){
    //   const d1 = new Date();
    //   d1.parse('getData.orderTime');
    //   this.waktuAwal = d1;
    //   const d2 = new Date();
    //   const time =  d2.getHours() + ":" + d2.getMinutes();
    //   const due = time;
    //   console.log(this.waktuAwal)
    //   if(this.waktuAwal > due){
    //     this.status = "kokooko";
    //     console.log(this.status);
    //   }
    // },


  

  
  },
};
</script>

<style>
.warna-merah {
  background-color: green !important;
}
.btn-colors{
  color: green !important;

}

</style>
