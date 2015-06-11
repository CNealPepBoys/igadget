$('./body') {
  insert_top("header", class: "mw-header") {
    #Move stuff here
  }
	$("//div[@id='Header']"){
		add_class("mw-header")
	}
	$("//div[@id='AjaxLoading']"){
		add_class("mw-hidden")
	}

	remove("//div[@id='TopMenu']")
	remove("//div[@id='Menu']")

#	$("//div[@id='TopMenu']"){
#		add_class("mw-hidden")
#	}
#	$("//div[@id='Menu']"){
#		add_class("mw-hidden")
#	}

	$("//div[@id='SearchForm']"){
		remove(".//label[1]")
		remove(".//p")

#		$(".//p"){
#			add_class("mw-hidden")
#		}

		$("//input[@id='search_query']"){
			attribute("placeholder","Search...")
		}

	}
}
