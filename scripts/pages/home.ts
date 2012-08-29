$("./body") {
  # Add a class to the body for page-specific styling
  add_class("_home")

  # Hide the children of the body that aren't the _header div
  # (We assign a style of display: none to the _hide class in our stylesheets.)
  # This is an example of the extraction technique, which can
  # be read about here: http://beta.moovweb.com/learn/techniques/extract_content
  $("./*[not(@class='_header')]") {
    add_class("_hide")
  }
  
  # Move items we want to keep on the page to the body, out of the _hide divs
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

      # The following snippet takes the title (which used to be a link) and
      # turns it into an item in the accordion
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
        insert("div", class: "icon")
      }
      $("./ul") {
        $("./li") {
          add_class("_bar3")
          insert("div", class: "icon")
        }
      }
      ur_toggler("./div","./ul")
    }
    # Implementing the image carousel at the top of the page
    insert_before("div") {
      ur_carousel("/html/body/div[@class='abColumn']//ul[@class='headlinesOnly']//a[contains(concat(' ', @class, ' '), ' thumb ')]")
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
    #ur_late_load("false")
  }
}
