$("./body") {
   insert_top("header", class: "mw-header mw-keep") {
     insert_top("a", class: "mw-logo", href: "/") {
       move_here("//img[@id='mastheadLogo']|//img[@id = 'NYTLogo']") {
         add_class("mw-testing")
         remove("@width")
         remove("@height")
       }
     }
     # persistent navigation button
     insert_bottom("div", id: "mw-pers-nav-menu", class: "mw-pers-nav-toggler mw-menu small")
     # Sub-section
     move_here("//div[@id = 'masthead']/h2/a", "bottom") {
       add_class("mw-sub-section")
     }
     # date section on home page
     move_here("//div[@id='date']") 
     $$("#date > p") {
       wrap_text_children("span", id: "day")
     }
     move_here("selector", "position")
  }
  inner_wrap("div", id: "mw-body-content") {
    # persistent navigation
    insert_bottom("div", id: "mw-pers-nav-mask", class: "mw-pers-nav-toggler")
    insert_before("div", id: "mw-pers-nav") {
      # Home page navigation
      move_here("//div[@id = 'HPLeftNav']") {
        add_class("mw-box-shadow")
        $(".//ul[contains(@class, 'featured')]") {
          insert_before("div", class: "mw_toggler_bar mw_bar2", "Featured Content")
        }
        $(".//li/a") {
          add_class("mw_bar1")
        }
        $(".//li[contains(@class, 'firstItem')]/ul[@class = 'secondary']") {
          insert_before("h6", "Other")
        }
        $(".//h6") {
          name("div")
          add_class("mw_toggler_bar mw_bar2")
        }
        $(".//div[@class = 'navigationHomeLede']") {
          ur_toggler("./div[contains(@class, 'mw_bar2')]","./ul")
        }
        $(".//li[contains(@class, 'singleRule')]") {
          ur_toggler("./div[contains(@class, 'mw_bar2')]","./ul")
        }
      }
      # navigation on non home page
      move_here("//div[contains(@class, 'navigation tabsContainer')]/ul", "bottom") {
        add_class("mw-box-shadow")
        $("./li[contains(@class, 'selected')]") {
          $("./ul/preceding-sibling::a") {
            copy_to("following-sibling::ul", "bottom") {
              text() {
                prepend("More ") 
              }
              wrap("li")
            }
            name("div")
            attributes(href: "")
            add_class("mw_toggler_bar mw_bar2")
          }
          $(".//li/a") {
            add_class("mw_bar1")
          }
          # make a uranium toggler where first element is the button and second is the content 
          ur_toggler("./div","./ul")
        }
        $("./li/a") {
          add_class("mw_bar2")
        }
      }
    }
  }
}