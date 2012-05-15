# HTML Transformations go here

$("/html") {
  # We have replaced all the usual importing stylesheets etc. that we apply
  # to every page with some pre-defined functions, found in the functions
  # folder of the project
  
  removeAllStyles()
  
  removeScripts()

  metaTags()

  addAssets()
  
  rewrite()
  
  absolutize()

  @import mappings.ts

}
