
exports.seed = function(knex, Promise) {
  return knex.raw("DELETE FROM tree; ALTER SEQUENCE tree_id_seq RESTART WITH 7;")
  .then(function () {
    const tree = [{
      id: 1,
      name: "Reclaim Tree ver 1",
      material: "Ceramic",
      url: "/assets/tree/reclaim_tree_ver_1.jpg",
      type: "Sculpture"
    }, {
      id: 2,
      name: "Reclaim Tree ver 2",
      material: "Ceramic and Nichrome wire",
      url: "/assets/tree/reclaim_tree_ver_2.jpg",
      type: "Sculpture"
    }, {
      id: 3,
      name: "Reclaim Tree ver 2",
      material: "Ceramic and Nichrome wire",
      url: "/assets/tree/reclaim_tree_ver_2_close_1.jpg",
      type: "Sculpture"
    }, {
      id: 4,
      name: "Reclaim Tree ver 2",
      material: "Ceramic and Nichrome wire",
      url: "/assets/tree/reclaim_tree_ver_2_close_2.jpg",
      type: "Sculpture"
    }, {
      id: 5,
      name: "Reclaim Tree ver 3",
      material: "Ceramic",
      url: "/assets/tree/reclaim_tree_ver_3.jpg",
      type: "Sculpture"
    }, {
      id: 6,
      name: "Reclaim Tree ver 3",
      material: "Ceramic",
      url: "/assets/tree/reclaim_tree_ver_3_close.jpg",
      type: "Sculpture"
    }]

    return knex("tree").insert(tree)
  })
}
