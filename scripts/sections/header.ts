$("./body") {
 insert_top("div", class: "_header _keep") {
   insert_top("a", href: "/") {
     move_here("//img[@id='mastheadLogo']")
   }
   move_here("//div[@id='date']") 
   $$("#date > p") {
    wrap_text_children("span", id: "day")
   } 
 }
}