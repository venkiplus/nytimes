$("./body") {
  add_class("mw-logout")
  $(".//div[@id = 'mw-body-content']") {
    # hide unused sections
    $(".//div[@id = 'masthead' or @class = 'cColumn']|.//footer[@class = 'pageFooter']") {
      add_class("mw-hide")
    }
    # add style classes
    $(".//div[@id = 'main']") {
      add_class("padded")
      $(".//h1") {
        add_class("mw-h2")
      }
      $(".//ul[@class = 'flush']//a") {
        add_class("mw-btn1 mw-center")
      }
      $(".//div[./img[contains(@alt, benner)]]") {
        add_class("mw-center")
      }
    }
  }
}