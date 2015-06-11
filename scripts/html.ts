# HTML Transformations go here

$("/html") {
  add_canonical_tag()
  rewrite_links()
  absolutize()
  rewrite_aspnet_scripts()
  clean_mobile_meta_tags()
  remove_all_styles()

  # remove(".//script[contains(@src, 'jquery.min.js')]")

  add_assets()
	#adds global stylesheet and js from assets directory

  @import "sections/header.ts"
  @import "sections/footer.ts"

  @import "mappings.ts"

}
