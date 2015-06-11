# Place holder/example file
$("./body"){
	remove("//div[@id='LayoutColumn1']")
	remove("//div[@id='LayoutColumn3']")

#	$("//div[@id='LayoutColumn1']"){
#		add_class("mw-hidden")
#	}
#	$("//div[@id='LayoutColumn3']"){
#		add_class("mw-hidden")
#	}

	$(".//div[@class='ProductActionAdd']"){
		$(".//a"){
			add_class("mw-add2Cart")
		}
	}
	$(".//div[contains(@class, 'ProductImage')]"){
		add_class("mw-home-img")
	}
	$(".//div[@class='BlockContent']"){
		attribute("data-ur-set", "carousel")
		attribute("data-ur-infinite", "disabled")
		insert("div"){
			attribute("data-ur-carousel-component", "dots")
		}
		insert("span"){
			attribute("data-ur-carousel-component", "count")
			attribute("data-ur-template", "{{index}}/{{count}}")
		}
		insert("a"){
			attribute("data-ur-carousel-component", "button")
			attribute("data-ur-carousel-button-type", "prev")
		}
		insert("a"){
			attribute("data-ur-carousel-component", "button")
			attribute("data-ur-carousel-button-type", "next")
		}
		$("./ul[@class='ProductList']"){
			attribute("data-ur-carousel-component", "scroll_container")
			$("./li"){
				attribute("data-ur-carousel-component", "item")
			}
		}
	}
}
