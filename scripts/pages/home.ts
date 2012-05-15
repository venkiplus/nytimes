$("./body") {
  add_class("_home")

  # Hide the items in the body
  $("./*[not(@class='_header')]") {
    add_class("_hide")
  }
  
  # Move what I'd like to the top of the body
  $(".//div[@id='main']") {
    $("./div[contains(concat(' ', @class, ' '), ' baseLayoutBelowFold ')]") {
      $(".//div[contains(concat(' ', @class, ' '), ' abColumn ')]") {
        move_to("/html/body/div[@class='_header']", "after")
      }
    }
  }
  
  
  $("./div[contains(concat(' ', @class, ' '), ' abColumn ')]") {
  
    $(".//a") {
      inner() {
        # Replace funky double right angled quotations
        replace(/»/, "")
        # Clean out starting and trailing whitespace
        replace(/^\s+|\s+$/, "")
      }
    }
  
    $(".//div[contains(concat(' ', @class, ' '), ' column ')]") {
      # urLateLoad("true")
      $("./h6[@class='moduleHeaderLg']") {
        $("./a") {
          copy_to("ancestor::div[1]/ul", "bottom") {
            text() {
              prepend("More ") 
            }
            wrap("li", attribute: "value")
            wrap("h6")
          }
          name("div")
        }
        add_class("_bar2")
        name("div")
      }
      $("./ul") {
        $("./li") {
          add_class("_bar3")
        }
      }
      ur_toggler("./div","./ul")
    }
  
    insert_before("div") {
      urCarousel("/html/body/div[@class='abColumn']//ul[@class='headlinesOnly']//a[contains(concat(' ', @class, ' '), ' thumb ')]")
      $(".//img") {
        attribute("src") {
          value() {
            replace(/thumbStandard/, "popup")
          }
        }
      }
    }
  
  }
  $("./*[contains(concat(' ', @class, ' '), ' _hide ')]") {
    urLateLoad("false")
  }
  
  
}