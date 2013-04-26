$("./body") {
  # Add a class to the body for page-specific styling
  add_class("_home")

  # Move items we want to keep on the page to the body, out of the _hide divs
  $(".//div[@id='main']") {
    $("./div[contains(@class, 'baseLayoutBelowFold')]") {
      $(".//div[contains(@class, 'abColumn')]") {
        add_class("_keep")
        move_to("/html/body/div[contains(@class, '_header')]", "after")
      }
    }
  }

  $("./div[contains(@class, 'abColumn')]") {
    $(".//div[contains(@class, 'column')]") {
      # The following snippet takes the title (which used to be a link) and
      # turns it into an item in the accordion
     $("./h6[@class='moduleHeaderLg']") {
       $("./a") {
         inner() {
           replace(/»/, "")
         }
         copy_to("ancestor::div[1]/ul", "bottom") {
           text() {
             prepend("More ") 
           }
           wrap("li", attribute: "value")
           wrap("h6")
         }
         name("div")
       }
       add_class("mw_bar2")
       name("div")
     }
     $("./ul") {
       $("./li/h6/a") {
         add_class("mw_bar1")
         insert("span", class: "arrow")
       }
     }
      ur_toggler("./div","./ul")
    }
    # Implementing the image carousel at the top of the page
    insert_before("div", class: "_keep") {      
      ur_carousel("/html/body/div[@id='shell']//table[@id='insideNYTimesBrowser']//a[img]")
      $("./div[@data-ur-carousel-button-type]") {
        inner("")
      }
    }
  }

  $("./*[not(contains(@class, '_keep'))]") {
   add_class("_hide")
  }
}
