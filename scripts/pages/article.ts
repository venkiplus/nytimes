$("./body") {
  add_class("mw-article")
  $(".//div[@id = 'mw-body-content']") {
    $(".//div[@id = 'main']") {
      add_class("mw-keep")
      move_to("ancestor::div[@id = 'mw-body-content']")
      $(".//h1[@class ='articleHeadline']") {
        add_class("gapped")
        move_here("//nyt_byline/h6|//h6[@class ='dateline']", "after") {
          add_class("mw-subheader")
        }
      }
      # Image section
      $(".//div[@class = 'articleSpanImage']") {
        $(".//img") {
          remove("./@height")
          remove("./@width")
        }
        $(".//p[@class = 'caption']") {
          add_class("mw-box1")
          wrap("div", class: "mw-caption")
          insert_after("div", class: "mw-info sprites-i pull-right")
          $("..") {
            ur_toggler("./div","./p")
            move_to("preceding-sibling::div[@class = 'image']", "after")
          }
        }
        $(".//*[@class = 'credit']") {
          move_to("..", "after")
        }
      }
      $(".//h3") {
        add_class("mw-h3")
      }
      $(".//h6") {
        add_class("mw-h4 mw-subheader")
        $("self::*[contains(text(), 'Multimedia')]") {
          move_to("../following-sibling::div[contains(@class, 'articleInline')][1]", "top")
        }
      }
      # article sections
      $(".//div[@class = 'articleBody' or @class = 'articleBottomExtra' or @class = 'articleFooter'][*[node()]]") {
        add_class("padded")
      }
      
      $(".//div[contains(@class, 'articleBody')][1]") {
        insert_before("p", class: "mw-change-font-size pull-right", "Font size: ") {
          insert("span", class: "mw-increase-size mw-btn1 small", "+")
          insert("span", class: "mw-decrease-size mw-btn1 small", "-")
        }
      }
      # remove empty columns
      $(".//div[contains(@class, 'columnGroup')]") {
        remove_self_if_empty()
      }
      $(".//div[contains(@class, 'articleInline')][./div[contains(@class, 'story') or contains(@class, 'columnGroup')]]") {
            move_to("..", "bottom")
            add_class("mw-box1 gapped")
            $(".//div[@class = 'thumbnail' or @class = 'runaroundRight']") {
              add_class("mw-thumbnail")
            }
            $(".//div[@class = 'wideThumb']//img") {
              remove("@width")
              remove("@height")
            }
            remove_self_if_empty()
          }
    }

    # create carousel from Inside NYTimes.com section
    $(".//div[@id = 'insideNYTimes']") {
      insert_before("div") {
        ur_carousel("//table[@id='insideNYTimesBrowser']//div[@class = 'story']")
        $("./div[@data-ur-carousel-button-type]") {
          inner("")
        }

        # enable auto scroll, ability to swipe and fill width with 1 item
        attributes(data-ur-autoscroll: "enabled", data-ur-touch: "enabled", data-ur-fill: "1")
      }
      add_class("mw-hide")
    }
    $("./*[not(contains(@class, 'mw-keep'))]") {
     add_class("mw-hide")
    }
  }
}