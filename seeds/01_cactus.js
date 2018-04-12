
exports.seed = function(knex, Promise) {

  return knex.raw("DELETE FROM cactus; ALTER SEQUENCE cactus_id_seq RESTART WITH 15;")
    .then(function () {
      const cactus = [{
        id: 1,
        name: "Cactus^3 ver 1",
        material: "Oil on Ceramic",
        url: "/assets/cactus/cactus^3_ver_1.jpg",
        type: "cactus"
      }, {
        id: 2,
        name: "Cactus^3 ver 1",
        material: "Oil on Ceramic",
        url: "/assets/cactus/cactus^3_ver_1_close_1.jpg",
        type: "cactus"
      }, {
        id: 3,
        name: "Cactus^3 ver 1",
        material: "Ceramic",
        url: "/assets/cactus/cactus^3_ver_1_close_2.jpg",
        type: "cactus"
      }, {
        id: 4,
        name: "Cactus^3 ver 2",
        material: "Ceramic",
        url: "/assets/cactus/cactus^3_ver_2.jpg",
        type: "cactus"
      }, {
        id: 5,
        name: "Cactus^3 ver 2",
        material: "Ceramic",
        url: "/assets/cactus/cactus^3_ver_2_close.jpg",
        type: "cactus"
      }, {
        id: 6,
        name: "Cactus^3 ver 3",
        material: "Ceramic",
        url: "/assets/cactus/cactus^3_ver_3.jpg",
        type: "cactus"
      }, {
        id: 7,
        name: "Cactus^3 ver 3",
        material: "Ceramic",
        url: "/assets/cactus/cactus^3_ver_3_close.jpg",
        type: "cactus"
      }, {
        id: 8,
        name: "Cactus^3 ver 4",
        material: "Ceramic",
        url: "/assets/cactus/cactus^3_ver_4.jpg",
        type: "cactus"
      }, {
        id: 9,
        name: "Cactus^3 ver 5",
        material: "Ceramic, acrylic, and Flocking",
        url: "/assets/cactus/cactus^3_ver_5.jpg",
        type: "cactus"
      }, {
        id: 10,
        name: "Cactus^3 ver 5",
        material: "Ceramic, acrylic, and Flocking",
        url: "/assets/cactus/cactus^3_ver_5_close.jpg",
        type: "cactus"
      }, {
        id: 11,
        name: "Cactus^3 ver 6",
        material: "Ceramic",
        url: "/assets/cactus/cactus^3_ver_6.jpg",
        type: "cactus"
      }, {
        id: 12,
        name: "Cactus^3 ver 6",
        material: "Ceramic",
        url: "/assets/cactus/cactus^3_ver_6_close.jpg",
        type: "cactus"
      }, {
        id: 13,
        name: "Cactus^3 ver 7",
        material: "Ceramic",
        url: "/assets/cactus/cactus^3_ver_7.jpg",
        type: "cactus"
      }, {
        id: 14,
        name: "Cactus^3 ver 7",
        material: "Ceramic",
        url: "/assets/cactus/cactus^3_ver_7_close.jpg",
        type: "cactus"
      }]

      return knex("cactus").insert(cactus)
    })
}
