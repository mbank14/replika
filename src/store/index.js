import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataOrder : [
      {
        id: 122,
        orderTime: "20:07:12",
        items: [
          {
            idItem: 1,
            itemName: {
              name: "Coffe",
              variant: "Latte"
            },
            qyt: 2,
            extra: "",
          },
          {
            idItem: 12,
            itemName: {
              name: "Coffe",
              variant: "Black"
            },
            qyt: 1,
            extra: "Sugar",
          },
          {
            idItem: 13,
            itemName: {
              name: "Large Pizza",
              variant: "Poppins"
            },
            qyt: 1,
            extra: "",
          },
        ],
      },
      {
        id: 11,
        orderTime: "23:17:12",
        items: [
          {
            idItem: 2,
            itemName: {
              name: "Mie",
              variant: "Instan"
            },
            qyt: 2,
            extra: "Sambal Banyakin",
          },
          {
            idItem: 11,
            itemName: {
              name: "Roti",
              variant: "Goreng Mentega"
            },
            qyt: 1,
            extra: "",
          },
          {
            idItem: 111,
            itemName: {
              name: "Coffe",
              variant: "Caramel Machiato"
            },
            qyt: 1,
            extra: "Caramel nya banyakin",
          },
        ],
      },
      {
        id: "#99",
        orderTime: "11:07:12",
        items: [
          {
            idItem: 121,
            itemName: {
              name: "Juice",
              variant: "Dragon Fruit"
            },
            qyt: 1,
            extra: "",
          },
          {
            idItem: 212,
            itemName: {
              name: "Gorengan",
              variant: "Medndoan"
            },
            qyt: 2,
            extra: "",
          },
          
        ],
      },
      {
        id: 21,
        orderTime: "12:07:12",
        items: [
          {
            idItem: 3,
            itemName: {
              name: "Coffe",
              variant: "Long Blak"
            },
            qyt: 2,
            extra: "",
          },
          {
            idItem: 33,
            itemName: {
              name: "Milk",
              variant: "Tea"
            },
            qyt: 1,
            extra: "",
          },
          {
            idItem: 113,
            itemName: {
              name: "Tea",
              variant: "Pull"
            },
            qyt: 1,
            extra: "",
          },
        ],
      },
      {
        id: "#321",
        orderTime: "11:27:12",
        items: [
          {
            idItem: 2121,
            itemName: {
              name: "Rice",
              variant: "Goreng"
            },
            qyt: 2,
            extra: "",
          },
          {
            idItem: 115,
            itemName: {
              name: "Tea",
              variant: "Ice"
            },
            qyt: 2,
            extra: "Sugar",
          },
        ],
      },
      {
        id: "#5",
        orderTime: "08:12:12",
        items: [
          {
            idItem: 341,
            itemName: {
              name: "Coffe",
              variant: "Honey Fruit"
            },
            qyt: 1,
            extra: "",
          },
        ],
      },
      {
        id: "#43",
        orderTime: "12:12:12",
        items: [
          {
            idItem: 67,
            itemName: {
              name: "Gorengan",
              variant: "Mendoan"
            },
            qyt: 4,
            extra: "Cabai",
          },
        ],
      },
      {
        id: "#34",
        orderTime: "13:07:12",
        items: [
          {
            idItem: 44,
            itemName: {
              name: "Milk",
              variant: "Vanilla"
            },
            qyt: 1,
            extra: "",
          },
          {
            idItem: 342,
            itemName: {
              name: "Gorengan",
              variant: "Banana"
            },
            qyt: 5,
            extra: "Sugar",
          },
        ],
      },
      {
        id: "#44",
        orderTime: "16:07:12",
        items: [
          {
            idItem: 78,
            itemName: {
              name: "Coffe",
              variant: "Latte"
            },
            qyt: 2,
            extra: "",
          },
          
        ],
      },
      {
        id: "#131",
        orderTime: "09:07:12",
        items: [
          {
            idItem: 15,
            itemName: {
              name: "Coffe",
              variant: "Mocha"
            },
            qyt: 3,
            extra: "",
          },
        ],
      },
      {
        id: "#67",
        orderTime: "14:07:12",
        items: [
          {
            idItem: 311,
            itemName: {
              name: "Gorengan",
              variant: "Banana Jumbo"
            },
            qyt: 3,
            extra: "",
          },
          {
            idItem: 8989,
            itemName: {
              name: "Coffe",
              variant: "Kapal API"
            },
            qyt: 2,
            extra: "",
          },
        ],
      },
    ],
    orderFinish: [],

  },
  mutations:{},
  getters: {
    getData: state => {
      return state.dataOrder;
    },
    getWaktu: state => {
      return state.dataOrder.orderTime;
    }

  },
  actions: {},
  modules: {}
});
