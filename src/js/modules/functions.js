export function isWebp() {
	function testWebp(callback) {
		let webp = new Image();
		console.log(webp);
		webp.onload = webp.onerror = () => callback(webp.height > 0);
		webp.src = 'data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoCAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==';
	}
	testWebp(function(support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	})
}