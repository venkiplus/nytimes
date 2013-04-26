$("./body") {
 insert_top("div", class: "_header _keep") {
   insert_top("a", href: "/") {
     move_here("//img[@id='mastheadLogo']")
   }
   move_here("//div[@id='date']")
 }
}