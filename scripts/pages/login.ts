$("./body") {
  add_class("mw-login")
  $(".//div[@id = 'mw-body-content']") {
    $(".//div[@id = 'main']") {
      add_class("mw-keep padded")
      # remove duplicate header text
      remove(".//div[contains(@class, 'columnGroup')][.//h1]")
      $(".//h2") {
        add_class("mw-h3")
      }
      # dump the table, changing all the elements to divs with class names of what they used to be.
      # Ex a tr will have the mw_was_tr classname added
      table_dump()
      # add our style classes to the form and form elements
      $(".//form[contains(@class, 'loginForm')]") {
        add_class("mw-form")
        $("//button[@type = 'submit']") {
          add_class("mw-btn1")
        }
      }
      # hiding unused section
      $(".//div[@class = 'cColumn']") {
        add_class("mw-hide")
      }
    }
    # hiding unused sections
    $(".//div[@id = 'page']") {
      $("./*[not(contains(@class, 'mw-keep'))]") {
        add_class("mw-hide")
      }
    }
  }
}