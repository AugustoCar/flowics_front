setTimeout(() => {
	traerPreguntasApi();
}, 100);

// Defining async function
async function traerPreguntasApi() {
    let url = "http://localhost:3000"
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    show(data);
}

async function guardarPreguntasApi() {
    let url = "http://localhost:3000"
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    show(data);
}
// Calling that async function

// Function to define innerHTML for HTML table
function show(data) {
    let preguntaText = document.getElementById("preguntaTexto")
    let respuesta1Text = document.getElementById("respuesta1")
    let respuesta2Text = document.getElementById("respuesta2")
    
	preguntaText.innerHTML = data[0]["Pregunta texto"];
	respuesta1Text.innerHTML = data[0]["Respuesta Correcta"];
	respuesta2Text.innerHTML = data[0]["Respuesta Incorrecta"];
	
	respuesta1Text.setAttribute("onclick", "CorrectaIncorrecta(this, 1)");
	respuesta2Text.setAttribute("onclick", "CorrectaIncorrecta(this, 0)");
	
    // Loop to access all rows 
	//for(let i = 0; i < data.length;i++){
	//	
	//}
}

function CorrectaIncorrecta(componente, respuesta) {
	if(respuesta == 1){
		componente.className = "respuesta-correcta";
	} else {
		componente.className = "respuesta-incorrecta";
	}
}
