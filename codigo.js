const nombrePais = document.querySelector(".texto");
const botonBuscar = document.querySelector(".buscar");



async function consultaExistenciaPais(nombrePais) {
	try{
		//const url = await fetch(`https://restcountries.com/v3.1/name/${nombrePais}?fullText=true`);
		const url = await fetch(`https://restcountries.com/v3.1/translation/${nombrePais}?fullText=true`);
		
		const res = await url.json();
		let variable =  [res[0].name.common,res[0].capital[0],res[0].flags.png,res[0].population]
		console.log(url.status);
		console.log(variable)
		return variable;

	}catch(e){
		console.log("No existe",e)
	}
}





	
botonBuscar.addEventListener("click",async()=>{
	let res = await consultaExistenciaPais(nombrePais.value);
	
	function crear(contenido){
		const informacion = document.querySelector(".informacion");

		const titulos = ["Pais","Capital","Bandera","Poblacion"];	

		const etiqueta = document.createElement("div");
			etiqueta.classList.add("etiqueta");

			for(j=0;j<4;j++){
				if(j==2){
					const v = document.createElement("div");
					const img = document.createElement("img");
					img.classList.add("imagen")
					img.src = contenido[j];
					v.classList.add("item");
					v.appendChild(img);
					etiqueta.appendChild(v);
				}else{
					const v = document.createElement("div");
					v.classList.add("item");

					v.innerText = `${titulos[j]}: ${contenido[j]}`;
					etiqueta.appendChild(v);

				}

			}
		
		informacion.appendChild(etiqueta);
	}

	if(res){
		crear(res);
	}else{
		alert("Hubo un error al escribir o intenta escribirlo en ingles")
	}



})
const limpia = document.querySelector(".limpiar");

limpia.addEventListener("click",()=>{
	const info = document.querySelector(".informacion");
	info.innerHTML = "";

})