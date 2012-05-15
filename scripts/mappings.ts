match($status) {
  with(/302/) {
    log("--> Redirect")
  }
  with(/200/) {
    log("--> 200 response")
    
    @import sections/header.ts
    
    match($path) {
      # Importing Tritium for the Home Page
      with(/^\/$/) {
        log("--> Importing pages/home.ts")
        @import pages/home.ts
      }
    }
  }
  else() {
    log("--> Not a 200 or 302, must be wacky!")
  }
}
