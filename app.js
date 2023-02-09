
const app = {

	init: ()=> {
    
		const button = document.querySelector('button');
		button.addEventListener('click', app.handleClickButton);
    },

  /**
   * Get input values of form and prevent reload
   * @param {click} event 
   */
	handleClickButton: (event) => {
		// Remove the page reload behavior from the form
		event.preventDefault();
		
		// Refresh the Result element 
		resultElement = document.querySelector('h2');
		resultElement.innerHTML = "";

		//Convert weight value from cm to m 
		let weight = document.querySelector('#weight').value;
		const size = document.querySelector('#size').value/100;
		
		// Test if both values are defined we continue the script otherwise set a error message
		if (!weight || !size) {
			resultElement.textContent = 'Vous n\'avez pas fourni toutes les données nécessaires';
			app.refreshInputValues();
			return;
		} 
		// Call to calcul function and insert Result in DOM 
		app.insertImcResultInDom(app.imcCalcul(weight, size), resultElement);
    },

	/**
	 * @param {weight, size}
	 * @returns {number} result of imc calcul 
	 */
	imcCalcul: (weight, size) => {
		// Calcul with rounding to 1 decimal with the toFixed() function
		const imc = weight / (size ** 2);
		return imc.toFixed(1);
    },

	/**
	 * Create element with imc value and insert in DOM 
	 * @param {imc}
	 */
	insertImcResultInDom: (imc, resultElement) => {
		// Message with the IMC result
		resultElement.textContent = `Votre IMC est de : ${imc}`;		
		// Refresh values 
		app.refreshInputValues();
	},
    
  /**
   * Refresh form Values 
   */
	refreshInputValues: () => {
		document.querySelector('#weight').value = "";
		document.querySelector('#size').value = "";
	},

}


document.addEventListener('DOMContentLoaded', app.init);