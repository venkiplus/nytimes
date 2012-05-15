# In this file, we are adding the header to every page, including
# a link to the homepage and a NYTimes logo image

$("./body") {
  insert_top("div", class: "_header") {
    insert_top("a", href: "/") {
      insert_bottom("img", src: asset("images/nytlogo.gif"))
    }
  }
}