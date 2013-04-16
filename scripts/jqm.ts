# remove all scripts lol
# remove("//script[not(@data-mw_keep='true')]")

jqm.init()

$("/html/body") {
  jqm.move_to_header(".//div[@id='Header']") {
    $("./div[@id='Logo']") {
      attribute("data-transition", "pop")
    }
  }
  jqm.move_to_footer(".//div[@id='Footer']")
  jqm.move_to_content(".//div[@id='Container']")
}

# remove default jqm padding on the content
jqm.content() {
  attribute("style", "padding: 0px")
}

# don't let jqm apply default css for all nodes
$("/html/body//*[not(@data-role)]") {
  attribute("data-role", "none")
}

# reload uranium widgets, the default one isn't working...
$("/html/body") {
  insert("script", "x$(document).on('DOMContentLoaded', 
    function(){ Ur.setup(); });")
  insert("script", "$(document).ajaxComplete(function(){ Ur.setup(); });")
}

# attribute("data-ajax", "false")