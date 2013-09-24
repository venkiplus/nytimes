$("./body") {
   insert_top("header", class: "mw-header mw-keep") {
     insert_top("a", class: "padded mw-logo", href: "/") {
       move_here("//img[@id='mastheadLogo']|//img[@id = 'NYTLogo']") {
         remove("@width")
         remove("@height")
         $("self::img[@id ='NYTLogo']/..") {
          add_class("mw-box-flex1")
          $("..") {
            add_class("mw-box-flex")
          }
         }
       }
       move_here("//div[@id = 'masthead']/h2/a", "after") {
         add_class("mw-sub-section mw-box-flex1")
       }
     }
     # persistent navigation button
     insert_bottom("div", id: "mw-pers-nav-menu", class: "mw-menu small")
     move_here("//div[@id='date']") 
     $$("#date > p") {
       wrap_text_children("span", id: "day")
     }
  }
  inner_wrap("div", id: "mw-body-content") {
    # persistent navigation
    insert_bottom("div", id: "mw-pers-nav-mask")
    insert_before("div", id: "mw-pers-nav") {
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
        # $(".//ul[@class = 'secondary']") {
        #   add_class("mw_")
        # }
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
    }
  }
}