
exports.seed = function(knex, Promise) {
  return knex.raw("DELETE FROM sculpture; ALTER SEQUENCE sculpture_id_seq RESTART WITH 15;")
  .then(function () {
    const sculpture= [{
      id: 1,
      name: "A Post Card from Time",
      material: "Copper and Nickel",
      url: "/assets/sculpture/gear_postcard_front.jpg",
      type: "Sculpture"
    }, {
      id: 2,
      name: "A Post Card from Time",
      material: "Copper and Nickel",
      url: "/assets/sculpture/gear_postcard_back.jpg",
      type: "Sculpture"
    }, {
      id: 3,
      name: "Headed Where?",
      material: "Ceramic",
      url: "/assets/sculpture/head_front.jpg",
      type: "Sculpture"
    }, {
      id: 4,
      name: "Headed Where?",
      material: "Ceramic",
      url: "/assets/sculpture/head_back.jpg",
      type: "Sculpture"
    }, {
      id: 5,
      name: "Headed Where?",
      material: "Ceramic",
      url: "/assets/sculpture/head_right.jpg",
      type: "Sculpture"
    }, {
      id: 6,
      name: "Headed Where?",
      material: "Ceramic",
      url: "/assets/sculpture/head_left.jpg",
      type: "Sculpture"
    }, {
      id: 7,
      name: "Headed Where?",
      material: "Ceramic",
      url: "/assets/sculpture/head_side.jpg",
      type: "Sculpture"
    }, {
      id: 8,
      name: "Ring and Container",
      material: "Copper, Nickel, and Silver",
      url: "/assets/sculpture/ring_and_container.jpg",
      type: "Sculpture"
    }, {
      id: 9,
      name: "Ring and Container",
      material: "Copper, Nickel, and Silver",
      url: "/assets/sculpture/ring_and_container_close.jpg",
      type: "Sculpture"
    }, {
      id: 10,
      name: "Sky^3",
      material: "Ceramic, Wood, Aircraft Cable, and Glass",
      url: "/assets/sculpture/sky^3.jpg",
      type: "Sculpture"
    }, {
      id: 11,
      name: "Sky^3",
      material: "Ceramic, Wood, Aircraft Cable, and Glass",
      url: "/assets/sculpture/sky^3_close.jpg",
      type: "Sculpture"
    }, {
      id: 12,
      name: "Stone Hammers",
      material: "Ceramic",
      url: "/assets/sculpture/stone_hammers.jpg",
      type: "Sculpture"
    }, {
      id: 13,
      name: "Stone Hammers",
      material: "Ceramic",
      url: "/assets/sculpture/stone_hammers_close.jpg",
      type: "Sculpture"
    }, {
      id: 14,
      name: "Struggling Pose",
      material: "Ceramic",
      url: "/assets/sculpture/struggling_pose.jpg",
      type: "Sculpture"
    }]

    return knex("sculpture").insert(sculpture)
  })
}
