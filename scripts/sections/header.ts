$("./body") {
  insert_top("div", class: "_header") {
    insert_top("a", href: "/") {
      insert_bottom("img", src: asset("images/nytlogo.gif"))
    }
  }
}