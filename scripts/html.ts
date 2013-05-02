# HTML Transformations go here

$("/html") {
  rewrite_links()
  absolutize_srcs()

  clean_mobile_meta_tags()

  remove_all_styles()

  add_assets()

  @import sections/header.ts
  @import sections/footer.ts

  @import mappings.ts

  # Sample code for the Tritium tester 
  # sandbox area

  # $$("#day") {
  #   inner("Friday, 13 October, 2020")
  # }

  # remove("/html/body/div[@data-ur-set='carousel']")
}

