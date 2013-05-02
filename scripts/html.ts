# HTML Transformations go here

$("/html") {
  rewrite_links()
  absolutize_srcs()

  # TD-DEMO-1 (CATS!)
  /*
  # replace images
  $$("img") {
    attribute("src", "http://www.montessoricats.com/buddha-scottish-fold-its-magic.jpg")
  }
  */
  
  # TD-DEMO-2 (STRIP OUT DESKTOP STYLES)
  
  # Remove all script tags not marked with "data-keep" attribute
  remove_desktop_js()
  # Needed to begin mobilizing
  remove_all_styles()
  remove_html_comments()
  insert_mobile_meta_tags()
  
  
  
  # TD-DEMO-3 (HEADER)
  
  # Add CSS, Header, Footer
  add_assets()
  @import sections/header.ts
  @import sections/footer.ts


  @import mappings.ts
  
}

