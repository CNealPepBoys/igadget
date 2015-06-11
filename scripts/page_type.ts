match($path) {
	with(/^\/$|^\/\?/) {
		$page_type="Home"
		$content_type="html"
	}
	with(/^\/shop-/) {
		$page_type="Category"
		$content_type="html"
	}
	with(/^\/sample-product\//) {
		$page_type="Product"
		$content_type="html"
	}
	with(/cart\.php/) {
		$page_type="Cart"
		$content_type="json"
	}
	else() {
		log("--> No page match in page_type.ts")
	}
}
