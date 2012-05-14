
####################
### Site Functions
####################

# Remove Styles Functions
@func XMLNode.removeExternalStyles() {
  $(".//link[@rel='stylesheet']") {
    remove()
  }
}
@func XMLNode.removeInternalStyles() {
  $(".//style") {
    remove()
  }
}
@func XMLNode.removeAllStyles() {
  $(".//link[@rel='stylesheet']|.//style") {
    remove()
  }
}

# Remove Scripts
@func XMLNode.removeExternalScripts() {
  $(".//script[@src]") {
    remove()
  }
}
@func XMLNode.removeInternalScripts() {
  $(".//script[not(@src)]") {
    remove()
  }
}
@func XMLNode.removeScripts() {
  $(".//script") {
    remove()
  }
}

# Clean Meta Tags
@func XMLNode.metaTags() {
  # Remove only existing meta tags for which we will add our own
  $(".//meta[@name='viewport']|.//meta[@name='format-detection']") {
    remove()
  }

  # Add our meta tags
  $("./head") {
    insert("meta", http-equiv: "Content-Type", content: "text/html")
    insert("meta", name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0")
    insert("meta", name: "format-detection", content: "telephone=no")
  }
}

# Add in our Assets
@func XMLNode.addAssets() {
  $("./head") {
    insert("link", rel: "stylesheet", type: "text/css", href: sass($device_stylesheet))
    insert("script", data-mw_keep: "true", type: "text/javascript", src: asset("javascript/main.js"))
    insert("link", rel: "shortcut icon", href: asset("images/favicon.ico"))
    insert("link", rel: "apple-touch-icon", href: asset("images/apple-touch-icon.png"))
  }
}

# Rewrite items
@func XMLNode.rewrite() {
  $("./body") {
    # Rewrite links
    $(".//a") {
      attribute("href") {
        value() {
          rewrite("link")
        }
      }
    }
    # Rewrite form actions
    $(".//form") {
      attribute("action") {
        value() {
          rewrite("link")
        }
      }
    }
  }
}

# Absolutize Items 
@func XMLNode.absolutize() {
  # Absolutize IMG and SCRIPT SRCs
  var("slash_path") {
    # the 'slash_path' is the path of this page without anything following it's last slash
    set($path)
    replace(/[^\/]+$/, "")
    # turn empty string into a single slash because this is the only thing separating the host from the path relative path
    replace(/^$/, "/")
  }
  $(".//img|.//script") {
    var("src", fetch("./@src"))
    # skip URLs which: are empty, have a host (//www.example.com), or have a protocol (http:// or mailto:)
    match($src, /^(?![a-z]+\:)(?!\/\/)(?!$)/) {
      attribute("src") {
        value() {
          match($src) {
            with(/^\//) {
              # host-relative URL: just add the host
              prepend(concat("//", $source_host))
            }
            else() {
              # path-relative URL: add the host and the path
              prepend(concat("//", $source_host, $slash_path))
            }
          }
        }
      }
    }
  }
}

@func XMLNode.relocateScripts() {
  $("/html/body/script") {
    move_to("/html/body", "bottom")
  }
}

######################
### Uranium Functions
######################

@func XMLNode.ur_attribute(Text %attr_modifier, Text %value) {
  attribute(concat("data-ur-", %attr_modifier), %value)
}

@func XMLNode.ur_set(Text %type) {
  ur_attribute("set", %type)
}


@func XMLNode.ur_component(Text %widget_type, Text %component_type) {
  ur_attribute(concat(%widget_type, "-component"), %component_type)
}

@func XMLNode.ur_toggler(Text %button, Text %content) {
  ur_set("toggler")
  $(%button) {
    ur_component("toggler", "button")
    ur_attribute("state", "disabled")
  }
  $(%content) {
    ur_component("toggler", "content")
    ur_attribute("state", "disabled")
  }
}


@func XMLNode.urCarousel(Text %items) {
  ur_set("carousel")
  ur_component("carousel", "view_container")
  ur_attribute("autoscroll", "true")
  ur_attribute("touch", "disabled")
  insert_bottom("div") {
    ur_component("carousel", "scroll_container")
    copy_here(%items, "bottom") {
      ur_component("carousel", "item")
    }
  }
  insert_bottom("div", "Prev") {
    ur_component("carousel", "button")
    ur_attribute("carousel-button-type", "prev")
  }
  insert_bottom("div", "Next", class:"icons-gray-r") {
    ur_component("carousel", "button")
    ur_attribute("carousel-button-type", "next")
  }
  insert_bottom("div", "-- count --") {
    ur_component("carousel","count")
  }
}

@func XMLNode.urLateLoad(Text %bool) {
  $(".//img") {
    attribute("data-mw-lateload", %bool)
    attribute("data-src", fetch("./@src"))
    attribute("src", "")
  }
}


