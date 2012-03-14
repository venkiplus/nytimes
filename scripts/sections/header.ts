$("./body") {
  insert_top("div", class: "mw_header") {
    insert_top("a", href: "/") {
      insert_bottom("img", src: asset("images/nytlogo.gif"))
    }
  }
}