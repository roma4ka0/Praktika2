var Application = new Vue({
    el: "#app",
    data: {
      products: [
        {
          id: 1,
          title: "Lemon1",
          text: "Лемон",
          image: "Lemon2.jfif",
          desc: "Full desc",
        },
  
        {
          id: 2,
          title: "Lemon2",
          text: "Лемон",
          image: "Lemon3.jfif",
          desc: "Full desc",
        },
  
        {
          id: 3,
          title: "Lemon3",
          text: "Лемон",
          image: "Lemon4.jfif",
          desc: "Full desc",
        },
  
        {
          id: 4,
          title: "Lemon4",
          text: "Лемон",
          image: "Lemon5.jfif",
          desc: "Full desc",
        },
  
        {
          id: 5,
          title: "Lemon5",
          text: "Лемон",
          image: "Lemon7.jfif",
          desc: "Full desc",
        },
      ],
    },
    mounted: function () {
      console.log(window.localStorage.getItem("Product"));
    },
    methods: {
      addItem: function (id) {
        window.localStorage.setItem("Product", id);
      },
    },
  });