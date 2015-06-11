$("./body") {
  insert("footer", "Powered by Moovweb", class: "mw-footer") {
    # Move stuff here
	move_here("//div[@id='Footer']", "top")
  }
	$("//div[@id='Footer']"){
		$(".//a"){
			add_class("mw-a_footer")
		}
	}
}
