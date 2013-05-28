$(".//div[contains(@class, 'abColumn')]") {
  $(".//div[contains(@class, 'column')]") {
    attribute("data-ur-set", "toggler")

    $(".//div[contains(@class, 'moduleHeaderLg')]") {
      attribute("data-ur-toggler-component", "button")
    } 
    // Line for the tester below
    $$(".headlinesOnly") {
     //attribute("data-ur-toggler-component", "content")
    }
  }
}