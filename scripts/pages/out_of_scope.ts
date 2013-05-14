$("./head") {
  remove_scripts()
}
$("./body"){
  
  # IDENTIFYING THE PAGE
  attribute("page", "mw_out_of_scope_page")

  
  inner("<div class='out_of_scope'>

          <h2> Sorry! </h2>

          <p> This page is out of scope for the current project. </p>

          <form><input type='button' value='Back' onClick='history.go(-1);return true;'></form>
          </div>")

}