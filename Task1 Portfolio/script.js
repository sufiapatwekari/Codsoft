window.addEventListener("scroll",() =>{
	const sections = document.querySelectorAll("section");
	sections.forEach(sec =>{
		const rect = sec.getBoundingClientRect();
		if (rect.top < window.innerHeight * 0.8) {
			sec.classList.add("visible");
		}
	});
});

document.getElementById("contactForm").addEventListener("submit",(e)=>{
	e.preventDefault();
	alert("Thank you for your message!");
});