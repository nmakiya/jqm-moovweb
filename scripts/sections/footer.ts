$("./body") {
  $(".//div[@id='Footer']") {
    $("./p") {
      # Change current <p> tag to <div> tag
      name("div")
          
      # Wrap text childeren with span tag
      wrap_text_children("span")

      # Insert placeholders for inserting elements
      insert("div", class: "mw_currency")
      insert("div", class: "mw_copy")
      insert("div", class: "mw_moovweb")

      # Move first two <span> elements into .mw_currency container
      $("./div[@class='mw_currency']") {
        move_here("../span[position() < 3]", "bottom")
      }
      
      # Insert span with copyright text into .mw_copy container
      $("./div[@class='mw_copy']") {
        insert("span", "Copyright 2013 iGadgetCommerce.")
      }
      
      # Insert <span> and <image> element into .mw_moovweb element
      $("./div[@class='mw_moovweb']") {
        insert("span", class: "mw_powered", "powered by:")
        insert("div", class: "sprites-moovweb")
      }     
      
      # Remove unwanded elements
      $("./*[not(self::div)]") {
        remove()
      }     
    } 
  }
}
