$('./body') {
  $(".//div[@id='Header']") {
    attribute("data-ur-set", "toggler")
      # Move top menu into #Logo container
      $("./div[@id='Logo']") {
      move_here("../../../div[@id='TopMenu']", "bottom"){
        $("./ul") {
          # Remove unwanted top menu items from upper menu
          $("./li[position() = 1 or position() > 2 and not(position()=last()-1)]") {
            remove()
          }     
        }
      }

      # Inject header template
      inject_after(read("../sections/header.html"))
      $("..//div[@class='mw_menu_btn']") {
        attribute("data-ur-toggler-component", "button")
      }

      # Fill search template
      $("..//div[@class='mw_search']"){
        # Move search form into container element
        move_here("//div[@id='SearchForm']", "bottom"){
          $("./p") {
            remove()
          }
          $("./form") {
            $("./label") {
              remove()
            }
            # Change search button background image
            $("./input[@type='image']") {
              wrap("div", class: "mw_search_btn buttons-search")
            }
            $("./input[@type='text']") {
              attribute("placeholder", "Search…")
            } 
          }     
        }
      }   
    }                       
    # Remove br
    $("./br") {
      remove()
    }

    # Move menu items into #Header
    move_here("../div[@id='Menu']", "bottom"){
      # Declare toggler content element which is enabled/diabled by toggler button
      attribute("data-ur-toggler-component", "content")
      # Move "Category List" element on bottom of #Menu element
      move_here("../../div[@id='Wrapper']/div[@class='Left']/div[@id='SideCategoryList']", "bottom")
    }
  }
}