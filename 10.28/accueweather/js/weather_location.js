var currentURL = location.href 
var urlObj = new URL(currentURL)

var params = urlObj.searchParams
var q = params.get("q")

console.log(q)