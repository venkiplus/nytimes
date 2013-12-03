# HTML Transformations go here

$("/html") {

  rewrite_links()
  absolutize_srcs()

  clean_mobile_meta_tags()

  remove_all_styles()
  # Remove all scripts that we don't use
  remove("//script[@src]")

  add_assets()

  @import sections/header.ts
  @import sections/footer.ts

  @import mappings.ts

  # Page Optimizations
  move_css_above_scripts()

}

