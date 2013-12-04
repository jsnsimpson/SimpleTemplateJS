
/**
 * Templating engine. Pass in an object to any of the standard
 * methods to get results. 
 * @author Jason Simpson <jsnsimpson@googlemail.com>
 */
var SimpleTemplate = {
	
		/**
		 * Renders a template which is stored in the HTML.
		 * You pass this method an id to fetch its HTML from
		 * which should have %% tags either side of the variable
		 * names
		 * @param id the id to be used as a html element
		 * @param item Object array, variables to replace %% tags
		 */
		renderID : function(id, item) {
			var html = $("#" + id).html();
			var matches = html.match(/%%([A-Za-z]*)%%/g);
			
			for(var i in matches) {
				if(typeof(matches[i]) == "string") {
					var match = matches[i];
					if(match.indexOf("%%") != -1) {
						//make sure that the match exists in the item passed in as a key.
						if(typeof(item[match.replace(new RegExp('%', 'g'), '').toLowerCase()]) != "undefined")
							html = html.replace(match, item[match.replace(new RegExp('%', 'g'), '').toLowerCase()]);
					}
				}
				
			}
			
			return html;
		}
		
		
};
