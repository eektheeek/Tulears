window.addEventListener('load', function () {
	// код-демоснтрация
	function logger(text) {
		return text[2]
}
	console.log(logger('Привет'))
	//alert(logger('Hola'))

	let myFunction = function () {
		return 'Chichmarin'
}

	console.log(myFunction())


	//рабочий проект
	let rightArrow = document.querySelector('.rightArrow')
	let leftArrow = document.querySelector('.leftArrow')
	let myCoolEarth = document.querySelector('.earth')
	let Counter = 0

	rightArrow.addEventListener('click', function(){
		Counter = Counter+5
		myCoolEarth.style.transform = 'rotate('+Counter+'deg)'
	})

	leftArrow.addEventListener('click',function(){
		Counter = Counter-5
		myCoolEarth.style.transform = 'rotate('+Counter+'deg)'

	})

	const homeBtn = document.querySelector('.home')
	homeBtn.addEventListener('click', function(){
		window.location = 'file:///Users/oleglarionov/Desktop/Tulears/index.html'
	})


	let popUp = document.querySelector('.popUp')
	let btn = document.querySelector('.button')
	let popUpBody = document.querySelector('.popUpBody')
	let close = document.querySelector('.closebtn')

		btn.addEventListener('click', function(){
		popUp.style.display = 'none'
		popUpBody.style.display = 'block'})

		close.addEventListener('click', function(){
		popUpBody.style.display = 'none'
		})
	


})


