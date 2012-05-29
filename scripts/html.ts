# HTML Transformations go here

$("/html") {
  # We have replaced all the usual importing stylesheets etc. that we apply
  # to every page with some pre-defined functions, found in the functions
  # folder of the project

  absolutize()  # don't proxy img and other assets

  remove_all_styles()
    
  remove_scripts()

  meta_tags()
  
  add_assets()
  
  rewrite_links()
  
  @import mappings.ts
  
}

