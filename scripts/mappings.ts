/*
  Mappings

  Mappings are matchers that we use to determine if we should execute a
  bit of Tritium during an execution. Aka, run something when we are
  are on a certain page.

  Example starting code:
*/

match($status) {

  with(/302/) {
    log("--> STATUS: 302") # redirect: just let it go through
  }

  with(/200/) {
    log("--> STATUS: 200")
    match($path) {
      # Home page 
      with(/^\/$|^\/\?/) {
        log("--> Importing pages/home.ts in mappings.ts")
        @import pages/home.ts
      }
      # Article page
      # mapping path to /year/month/day
      # EX URL: http://www.nytimes.com/2013/09/24/world/africa/kenya-presses-assault-against-militants-in-mall.html?hp
      with(/^\/\d{4}\/\d{2}\/\d/) {
        log("--> Importing pages/article.ts in mappings.ts")
        @import pages/article.ts
      }
      # Login
      # EX URL: https://myaccount.nytimes.com/auth/login?URI=http://
      with(/auth\/login/) {
        log("--> Importing pages/login.ts in mappings.ts")
        @import pages/login.ts
      }
      # Logout
      # EX URL: https://myaccount.nytimes.com/gst/signout
      with(/gst\/signout/) {
        log("--> Importing pages/logout.ts in mappings.ts")
        @import pages/logout.ts
      }
      else() {
        log("--> No page match in mappings.ts, out of scope")
        @import pages/out_of_scope.ts
      }
    }
  }

  else() {
    # not 200 or 302 response status
    log("--> STATUS: " + $status + " assuming its an error code pages/error.ts")
    @import pages/error.ts
  }

}
