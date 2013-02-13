$('./body') {
  $(".//div[@id='Header']") {
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

    # Remove header links temporarily
    remove("../div[@id='Menu']")
  }
}