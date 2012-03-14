# HTML Transformations go here

$("/html") {

  removeAllStyles()
  
  removeScripts()

  metaTags()

  addAssets()
  
  rewrite()
  
  absolutize()

  @import mappings.ts

}
