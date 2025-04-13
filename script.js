document.querySelectorAll(".btn").forEach(button => {
	button.addEventListener("click", () => {
		const input=document.getElementById("input")

		switch(button.id) {
			case "back":
				input.value=input.value.slice(0, -1)
				output.value=""
				break
			
			case "clr":
				input.value=""
				output.value=""
				break
			
			case "equ":
				output.value=math.evaluate(input.value)
				break
			
			case "mod":
				output.value+="%"
				break

			default:
				input.value+=button.textContent
		}
	})
})