# remove all scripts lol
# remove("//script[not(@data-mw_keep='true')]")



# jqm.init()

$("/html") {
  $("./head") {
    remove("//script[contains(@src, 'jquery')]")
    $("./script[1]") {
      insert_before("script", src: "//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js")
      insert_before("script", src: asset("javascript/jqm-custom-config.js"))
      insert_before("script", src: "http://code.jquery.com/mobile/1.3.1/jquery.mobile-1.3.1.min.js")
    }
    insert_before("link", rel: "stylesheet", href: "http://code.jquery.com/mobile/1.3.1/jquery.mobile.structure-1.3.1.css")
  }
}

# $("/html/body") {
#   jqm.move_to_header(".//div[@id='Header']") {
#     $("./div[@id='Logo']") {
#       attribute("data-transition", "pop")
#     }
#   }
#   jqm.move_to_footer(".//div[@id='Footer']")
#   jqm.move_to_content(".//div[@id='Container']")
# }

# # remove default jqm padding on the content
# jqm.content() {
#   attribute("style", "padding: 0px")
# }

# # don't let jqm apply default css for all nodes
# $("/html/body//*[not(@data-role)]") {
#   attribute("data-role", "none")
# }

# # reload uranium widgets, the default one isn't working...
# $("/html/body") {
#   insert("script", "x$(document).on('DOMContentLoaded',
#     function(){ Ur.setup(); });")
#   insert("script", "$(document).ajaxComplete(function(){ Ur.setup(); });")
# }

# # attribute("data-ajax", "false")

# # Move scripts to bottom of the body
# # because the HEAD doesn't get loaded everytime when using JQM
# # so if you want your scripts imported they need to be in the body
# $("/html//script") {
#   move_to("/html/body", "bottom")
# }
