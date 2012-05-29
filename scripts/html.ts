# HTML Transformations go here

$("/html") {
  # We have replaced all the usual importing stylesheets etc. that we apply
  # to every page with some pre-defined functions, found in the functions
  # folder of the project

  absolutize(".//img|.//script", "src")  # don't proxy img and script assets

  rewrite_links()                        # proxy all other pages 

  remove_all_styles()
    
  remove_scripts()

  meta_tags()
  
  add_assets()
  
  @import mappings.ts
  
}

