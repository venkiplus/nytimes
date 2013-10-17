$("./body") {
  # adding the mobile header
  insert_top("header", class: "mw-header mw-keep") {
    # logo that is a go to home page link 
    insert_top("a", class: "mw-logo", href: "//"+$prefix + ".nytimes.com/") {
      # move the logo image here from the desktop HTML
      move_here("//img[@id='mastheadLogo']|//img[@id = 'NYTLogo']") {
        # remove inline style attributes
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
    # date section on some pages
    move_here("//div[@id='date']") 
    $$("#date > p") {
      wrap_text_children("span", id: "day")
    }
  }
  # wrap the old body in a div 
  inner_wrap("div", id: "mw-body-content") {
    # persistent navigation
    insert_bottom("div", id: "mw-pers-nav-mask", class: "mw-pers-nav-toggler")
    # insert the persistent navigation before #mw-body-content
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
      # Non home page navigation
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
      move_here("//ul[@id = 'mainTabs']//a") {
        add_class("mw_bar2")
      }
      # Account sections (Login, Register, ...)
      move_here("//ul[@id = 'memberTools']", "bottom") {
        remove(".//div[@id = 'dual_hoverCraft']|./li[./a[@id = 'nyt-button-sub']]|./li[@class= 'cColumn-TextAdsHeader']")
        $(".//li/a") {
          add_class("mw_bar2")
          # adding the div for the icon
          $("self::a[contains(text(), 'Log')]") {
            insert_top("div", class: "sprites-dude")
          }
        }
      }
    }
  }
}