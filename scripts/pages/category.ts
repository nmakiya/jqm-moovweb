$("./body") {
  add_class("mw_iphone")
  
  $("./div[@id='Container']") {
        
    $("./div[@id='Outer']") {
      $("./div[@id='Wrapper']") {
        
        $("./div[@class='Left']") {
          $("./div[@id='SideCategoryShopByPrice']") {
            # Toggler container
            attribute("data-ur-set", "toggler")
            
            # Toggler button
            $("./h2") {
              attribute("data-ur-toggler-component", "button")
              insert("div", class: "mw_indicator")
            }
            
            # Toggler content
            $("./div") {
              attribute("data-ur-toggler-component", "content")
            }
                        
          }
          $("./div[@id='SideShopByBrand']") {
            # Toggler container
            attribute("data-ur-set", "toggler")
            
            # Toggler button
            $("./h2") {
              attribute("data-ur-toggler-component", "button")
              insert("div", class: "mw_indicator")
            }
            
            # Toggler content
            $("./div") {
              attribute("data-ur-toggler-component", "content")
            }
                        
          }
          $(".//div[contains(@class, 'NewsletterSubscription')]") {
            remove()
          }
        }
        
        $("./div[@class='Content ']") {
          $("./div[@id='CategoryHeading']") {
            $("./div[@class='BlockContent']") {
              
              # Move page title on top of the content area
              $("./h2") {
                move_to("../../../../div[@class='Left']", "top")
              } 
              
              $("./div[@class='FloatRight SortBox']") {     
                $("./form") {
                  # Wrap "Sort by"" text with <span> tag"
                  wrap_text_children("span")
                }       
              }
            
            }
          }
        }
        
      }
    }
  }
  
}