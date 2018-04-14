
exports.seed = function(knex, Promise) {

  return knex.raw("DELETE FROM design; ALTER SEQUENCE design_id_seq RESTART WITH 17;")
    .then(function () {
     const design = [{
      id: 1,
      name: "A Surreal Event",
      material: "Graphic",
      url: "/assets/graphic-design/surrealism_poster.jpg",
      type: "design"
    }, {
      id: 2,
      name: "And the Next Thing",
      material: "Graphic",
      url: "/assets/graphic-design/next_thing.jpg",
      type: "design"
    }, {
      id: 3,
      name: "Nourish",
      material: "Graphic",
      url: "/assets/graphic-design/nourish_1.jpg",
      type: "design"
    }, {
      id: 4,
      name: "Nourish De Los Muertos",
      material: "Graphic",
      url: "/assets/graphic-design/nourish_de_muertos.jpg",
      type: "design"
    }, {
      id: 5,
      name: "Bobble Water Bottle",
      material: "Graphic",
      url: "/assets/graphic-design/bobble_logo.jpg",
      type: "design"
    }, {
      id: 6,
      name: "Elm and Oak Shirt #1",
      material: "Textile",
      url: "/assets/graphic-design/elm_and_oak_shirt_1.jpg",
      type: "design"
    }, {
      id: 7,
      name: "Elm and Oak Shirt #2",
      material: "Textile",
      url: "/assets/graphic-design/elm_and_oak_shirt_3.jpg",
      type: "design"
    }, {
      id: 8,
      name: "Elm and Oak Shirt #3",
      material: "Textile",
      url: "/assets/graphic-design/elm_and_oak_shirt_4.jpg",
      type: "design"
    }, {
      id: 9,
      name: "Elm and Oak Shirt #4",
      material: "Textile",
      url: "/assets/graphic-design/elm_and_oak_shirt_5.jpg",
      type: "design"
    }, {
      id: 10,
      name: "Lost Dog",
      material: "Print",
      url: "/assets/graphic-design/lost_bulldog_poster.jpg",
      type: "design"
    }, {
      id: 11,
      name: "Its a Spirit Thing",
      material: "Graphic",
      url: "/assets/graphic-design/spirit_thing.jpg",
      type: "design"
    }]

     return knex("design").insert(design)
    })
}
