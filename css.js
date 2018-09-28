	['https://gaysugardaddyfinder.com/style.css',
	'https://gaysugardaddyfinder.com/assets/css/animate.css',
	'https://gaysugardaddyfinder.com/assets/css/font-awesome.css',
	'https://gaysugardaddyfinder.com/assets/css/login.css',
	'https://gaysugardaddyfinder.com/assets/css/jquery-confirm.css',
	'https://gaysugardaddyfinder.com/assets/css/shadows.css',
	'https://gaysugardaddyfinder.com/assets/css/bootstrap.css',
	'https://fonts.googleapis.com/css?family=Lato:300,400,700,900,300italic,400italic,700italic,900italic|Open+Sans:300',
	'https://gaysugardaddyfinder.com/assets/css/menu.css',
	'https://gaysugardaddyfinder.com/assets/css/font-awesome.css'
	].forEach(function(src) {
		cb(src)
	});	

	function cb(src) {
		var l = document.createElement('link'); l.rel = 'stylesheet';
		l.href = src;
		var h = document.getElementsByTagName('head')[0]; h.parentNode.insertBefore(l, h);
	};
