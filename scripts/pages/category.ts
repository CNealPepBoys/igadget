# Place holder/example file
$("./body"){
	remove(".//div[@id='CategoryBreadcrumb']")
	$(".//li[@class='Odd' or @class='Even']"){
		add_class("mw-cat-li")
		insert("div", "", class: "mw-prod-deets") {
			move_here("../div[@class='ProductDetails']", "bottom")
			move_here("../div[@class='ProductPriceRating']", "bottom")
			move_here("../div[@class='ProductCompareButton']", "bottom")
			move_here("../div[@class='ProductActionAdd']", "bottom")
		}
	}
	$(".//div[@class='ProductActionAdd']"){
		$(".//a"){
			add_class("mw-add2Cart-cat")
		}
	}
	$(".//div[contains(@class, 'ProductImage')]"){
		add_class("mw-home-img-cat")
	}
}
