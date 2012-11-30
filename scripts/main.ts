# The main file executed by Tritium. The start of all other files.


match($content_type) {

  with(/html/) {
        
    html("UTF-8") {
      @import device_detection.ts

      @import html.ts
    }

  }

  else() {
    log(concat("Passing through ", $content_type, " unmodified"))
  }
}