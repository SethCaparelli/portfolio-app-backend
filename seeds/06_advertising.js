
exports.seed = function(knex, Promise) {

  return knex.raw("DELETE FROM advertising; ALTER SEQUENCE advertising_id_seq RESTART WITH 17;")
    .then(function () {
     const advertising = [{
      id: 1,
      name: "Etch A Sketch Your World #1",
      material: "Print",
      url: "/assets/advertising/etch_a_sketch_1.jpg",
      type: "advertising"
    }, {
      id: 2,
      name: "Etch A Sketch Your World #2",
      material: "Print",
      url: "/assets/advertising/etch_a_sketch_2.jpg",
      type: "advertising"
    }, {
      id: 3,
      name: "Etch A Sketch Your World #3",
      material: "Print",
      url: "/assets/advertising/etch_a_sketch_3.jpg",
      type: "advertisting"
    }, {
      id: 4,
      name: "City Harvest Best if Used By #1",
      material: "Print",
      url: "/assets/advertising/best_if_used_by_1.jpg",
      type: "advertising"
    }, {
      id: 5,
      name: "City Harvest Best if Used By #2",
      material: "Print",
      url: "/assets/advertising/best_if_used_by_2.jpg",
      type: "advertising"
    }, {
      id: 6,
      name: "City Harvest Best if Used By #3",
      material: "Print",
      url: "/assets/advertising/best_if_used_by_3.jpg",
      type: "advertising"
    }, {
      id: 7,
      name: "Vans Ur Print Campaign",
      material: "Print",
      url: "/assets/advertising/vans_ur_print_cover.jpg",
      type: "advertising"
    }, {
      id: 8,
      name: "Vans Ur Print #1",
      material: "Print",
      url: "/assets/advertising/vans_ur_print_1.jpg",
      type: "advertising"
    }, {
      id: 9,
      name: "Vans Ur Print #2",
      material: "Print",
      url: "/assets/advertising/vans_ur_print_2.jpg",
      type: "advertising"
    }, {
      id: 10,
      name: "Vans Ur Print #3",
      material: "Ceramic",
      url: "/assets/advertising/vans_ur_print_3.jpg",
      type: "advertising"
    }, {
      id: 11,
      name: "A World with Shout #1",
      material: "Print",
      url: "/assets/advertising/shout_wine.jpg",
      type: "advertising"
    }, {
      id: 12,
      name: "A World with Shout #2",
      material: "Print",
      url: "/assets/advertising/shout_mustard.jpg",
      type: "advertising"
    }, {
      id: 13,
      name: "A World with Shout #3",
      material: "Print",
      url: "/assets/advertising/shout_grass.jpg",
      type: "advertising"
     }, {
      id: 14,
      name: "Google Phone #1",
      material: "Print",
      url: "/assets/advertising/gphone_1.jpg",
      type: "advertising"
     }, {
      id: 15,
      name: "Google Phone #2",
      material: "Print",
      url: "/assets/advertising/gphone_2.jpg",
      type: "advertising"
     }, {
      id: 16,
      name: "Google Phone #3",
      material: "Print",
      url: "/assets/advertising/gphone_3.jpg",
      type: "advertising"
     }]

     return knex("advertising").insert(advertising)
    })
}
