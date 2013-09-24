$("./body") {
  # Add a class to the body for page-specific styling
  add_class("mw-home")
  $("./div[@id = 'mw-body-content']") {
    # Move items we want to keep on the page to the body, out of the .mw-hide divs
    $(".//div[@id='main']") {
      $("./div[contains(@class, 'baseLayoutBelowFold')]") {
        $(".//div[contains(@class, 'abColumn')]") {
          add_class("mw-keep")
          move_to("/html/body/div[@id = 'mw-body-content']/header[contains(@class, 'mw-header')]", "after")
        }
      }
    }

    $("./div[contains(@class, 'abColumn')]") {
      $(".//div[contains(@class, 'column')]") {
        # The following snippet takes the title (which used to be a link) and
        # turns it into an item in the accordion
        $("./h6") {
          $("./a") {
            # we remove the '»' from the end of the h6
            remove_string("»")
            copy_to("ancestor::div[1]/ul", "bottom") {
              text() {
                prepend("More ") 
              }
              wrap("li")
              wrap("h6")
            }
            name("div")
          }
          add_class("mw_bar2")
          name("div")
        }
        $("./ul/li") {
          $("./h6/a") {
            add_class("mw_bar1") 
          }
          $("./a[contains(@class, 'thumb')]") {
            add_class("padded pull-left")
          }
        }
        # make a uranium toggler where first element is the button and second is the content 
        ur_toggler("./div","./ul")
        }
      # Implementing the image carousel at the top of the page
      insert_before("div", class: "mw-keep") {      
        ur_carousel("/html/body/div[@id = 'mw-body-content']/div[@id='shell']//table[@id='insideNYTimesBrowser']//a[img]")
        $("./div[@data-ur-carousel-button-type]") {
          inner("")
        }
        # enable auto scroll, ability to swipe and fill width with 1 item
        attributes(data-ur-autoscroll: "enabled", data-ur-touch: "enabled", data-ur-fill: "1")
      }
    }

    $("./*[not(contains(@class, 'mw-keep'))]") {
     add_class("mw-hide")
    }
  }

}
