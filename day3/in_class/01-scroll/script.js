// HERE WILL BE SCROLL SCRIPT 
//◢♂◣◥♀◤◢♂◣◥♀◤

window.addEventListener('load', function () {
	const facebook = document.querySelector('.facebook')
	const instagram = document.querySelector('.instagram')
	const github = document.querySelector('.github')


	window.addEventListener('scroll', function(){
		const scrollPosition = window.scrollY

		facebook.style.transform = 'translateY('+ (-scrollPosition/2) +'px)'
		instagram.style.transform = 'translateY('+ (-scrollPosition/4) +'px)'
		github.style.transform = 'translateY('+ (-scrollPosition/5) +'px)'



		console.log(scrollPosition)
	})
})

//window.addEventListener('load', function () {
	//const facebook = document.querySelector('.facebook')
	//const instagram = document.querySelector('.instagram')
	//const github = document.querySelector('.github')

	//let facebookY = parseInt(getComputedStyle(facebook).top)
	//let instagramY = parseInt(getComputedStyle(instagram).top)
	//let githubY = parseInt(getComputedStyle(github).top)



	


	//window.addEventListener('scroll', function(){
		//const scrollPosition = window.scrollY

		//facebook.style.top = facebookY+scrollPosition/2 +'px'
		//instagram.style.top = instagramY+scrollPosition/4 +'px'
		//github.style.top = githubY+scrollPosition/0.5 +'px'



		//console.log(scrollPosition)
	//})
//})