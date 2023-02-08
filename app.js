
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
		event.preventDefault();

		//Convert weight value from cm to m 
		let weight = document.querySelector('#weight').value;
		const size = document.querySelector('#size').value/100;
		
		app.imcResult(app.imcCalcul(weight, size));
    },


	/**
	 * @param {weight, size}
	 * @returns {number} result of imc calcul 
	 */
	imcCalcul: (weight, size) => {
		// Calculation with rounding to 1 decimal with the toFixed() function
		const imc = weight / (size ** 2);

		return imc.toFixed(1);
    },

	/**
	 * Create element with imc value and insert in DOM 
	 * @param {imc}
	 */
	imcResult: (imc) => {

		// h2 is the resultElement, if there is one, it is removed and create a new resultElement with the imc result
		let resultElement = document.querySelector("h2");
		if (resultElement) {
		  resultElement.parentNode.removeChild(resultElement);
		}

		resultElement = document.createElement('h2');
		resultElement.textContent = `Votre IMC est de : ${imc}`;		
		document.body.append(resultElement);		
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