
exports.seed = function(knex, Promise) {
    return knex.raw("DELETE FROM painting; ALTER SEQUENCE painting_id_seq RESTART WITH 9;")
    .then(function() {
      const painting = [{
        id: 1,
        name: "Leaving Las Vegas",
        material: "Oil and Ceramic",
        url: "/assets/painting/leaving_las_vegas.jpg",
        type: "Painting"
      }, {
        id: 2,
        name: "Happy Tree",
        material: "Acrylic",
        url: "/assets/painting/happy_tree.jpg",
        type: "Painting"
      }, {
        id: 3,
        name: "Sad Tree",
        material: "Acrylic",
        url: "/assets/painting/sad_tree.jpg",
        type: "Painting"
      }, {
        id: 4,
        name: "Me Jean",
        material: "Acrylic and Photos",
        url: "/assets/painting/me_jean.jpg",
        type: "Painting"
      }, {
        id: 5,
        name: "Tomato Soup",
        material: "Acrylic, Tempura, and Raw Tomatoes",
        url: "/assets/painting/tomato_soup.jpg",
        type: "Painting"
      }, {
        id: 6,
        name: "The Future^3",
        material: "Oil and Ceramic",
        url: "/assets/painting/the_future^3.jpg",
        type: "Painting"
      }, {
        id: 7,
        name: "The Future^3",
        material: "Oil and Ceramic",
        url: "/assets/painting/the_future^3_close.jpg",
        type: "Painting"
      }, {
        id: 8,
        name: "The Future^3",
        material: "Oil and Ceramic",
        url: "/assets/painting/the_future^3_installation.jpg",
        type: "Painting"
      }]

      return knex("painting").insert(painting)
    })
}
