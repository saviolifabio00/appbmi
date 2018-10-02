/* calcoli per la app su BMI */
function calcola(){
// identificare i dati del form
var peso=document.forms.bmi.peso.value;
var altezza=document.forms.bmi.altezza.value;
var sesso=document.forms.bmi.sesso.value;
// verfico se il cliente è m o f
if(sesso='m' ){
	// applico la formula bmi per maschi
	var res=;
	}
	else{
	// applico la formula bmi per femmine
	var res=;
	}
	var risultato=getElementById('risultato');
	risultato.innerHTML="BMI = "+"res;
}
function annulla(){

}
