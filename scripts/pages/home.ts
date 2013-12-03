$("./body") {
  # Add a class to the body for page-specific styling
  add_class("mw-home")

  # Main page
  $("./div[@id = 'mw-body-content']") {
    # Move items we want to keep on the page to the body, out of the .mw-hide divs
    scaffold_items()

    $("./div[contains(@class, 'abColumn')]") {
      $(".//div[contains(@class, 'column')]") {
        # The following snippet takes the title (which used to be a link) and
        # turns it into an item in the accordion
        accordionize_items()

        # make a uranium toggler where first element is the button and second is the content
        ur_toggler("./div","./ul")
      }
      # Implementing the image carousel at the top of the page
      insert_before("div", class: "mw-keep") {
        ur_carousel("/html/body/div[@id = 'mw-body-content']/div[@id='shell']//table[@id='insideNYTimesBrowser']//a[img]")
        beautify_carousel()
      }
    }
    # Hide everything that isn't marked to keep
    template_clean()


    # Optimize Images
    $(".//a[contains(concat(' ', @class, ' '), ' thumb ')]") {
      $("./img") {
        # should drop images from ~7k to ~1k
        perf.optimize_image() {
          # perf.format("webp")
          # perf.height("50")
          # perf.width("50")
          # perf.quality("70")
        }
      }
    }
  }
}
