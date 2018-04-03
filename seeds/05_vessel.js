
exports.seed = function(knex, Promise) {
  return knex.raw("DELETE FROM vessel; ALTER SEQUENCE vessel_id_seq RESTART WITH 20;")
  .then(function() {
    const vessel = [{
      id: 1,
      name: "Tea Pot #1",
      material: "Ceramic",
      url: "/assets/vessel/tea_pot_1.jpg",
      type: "Pottery"
    }, {
      id: 2,
      name: "Tea Pot #2",
      material: "Ceramic",
      url: "/assets/vessel/tea_pot_2.jpg",
      type: "Pottery"
    }, {
      id: 3,
      name: "Tea Pot #3",
      material: "Ceramic",
      url: "/assets/vessel/tea_pot_3.jpg",
      type: "Pottery"
    }, {
      id: 4,
      name: "Tea Pot #4",
      material: "Ceramic",
      url: "/assets/vessel/tea_pot_4.jpg",
      type: "Pottery"
    }, {
      id: 5,
      name: "Watering Can #1",
      material: "Ceramic and Acrylic",
      url: "/assets/vessel/watering_can_1.jpg",
      type: "Slip Cast"
    }, {
      id: 6,
      name: "Pitcher #1",
      material: "Ceramic",
      url: "/assets/vessel/pitcher_1.jpg",
      type: "Slip Cast"
    }, {
      id: 7,
      name: "Pitcher #2",
      material: "Ceramic",
      url: "/assets/vessel/pitcher_2.jpg",
      type: "Slip Cast"
    }, {
      id: 8,
      name: "Puzzle Plate #1",
      material: "Ceramic",
      url: "/assets/vessel/puzzle_plate_1.jpg",
      type: "Slip Cast"
    }, {
      id: 9,
      name: "Puzzle Plate #2",
      material: "Ceramic",
      url: "/assets/vessel/puzzle_plate_2.jpg",
      type: "Slip Cast"
    }, {
      id: 10,
      name: "Plate #1",
      material: "Ceramic",
      url: "/assets/vessel/plate_1.jpg",
      type: "Pottery"
    }, {
      id: 11,
      name: "Plate #2",
      material: "Ceramic",
      url: "/assets/vessel/plate_2.jpg",
      type: "Pottery"
    }, {
      id: 12,
      name: "Plate #3",
      material: "Ceramic",
      url: "/assets/vessel/plate_3.jpg",
      type: "Pottery"
    }, {
      id: 13,
      name: "Plate #4",
      material: "Ceramic",
      url: "/assets/vessel/plate_4.jpg",
      type: "Pottery"
    }, {
      id: 14,
      name: "Cup #1",
      material: "Ceramic",
      url: "/assets/vessel/cup_1.jpg",
      type: "Slip Cast"
    }, {
      id: 15,
      name: "Cup #2",
      material: "Ceramic",
      url: "/assets/vessel/cup_2.jpg",
      type: "Slip Cast"
    }, {
      id: 16,
      name: "Cup #3",
      material: "Ceramic",
      url: "/assets/vessel/cup_3.jpg",
      type: "Slip Cast"
    }, {
      id: 17,
      name: "Cup #4",
      material: "Ceramic",
      url: "/assets/vessel/cup_4.jpg",
      type: "Slip Cast"
    }, {
      id: 18,
      name: "Cup #5",
      material: "Ceramic",
      url: "/assets/vessel/cup_5.jpg",
      type: "Slip Cast"
    }, {
      id: 19,
      name: "Cup #6",
      material: "Ceramic",
      url: "/assets/vessel/cup_6.jpg",
      type: "Slip Cast"
    }]

    return knex("vessel").insert(vessel)
  })
}
