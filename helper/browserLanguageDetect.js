define([], function () {

	var userLanguageImpl = function(){
    
    	var userLanguage = localStorage.getItem('userLanguage') || window.navigator.userLanguage || window.navigator.language;
	
		userLanguage = userLanguage.split("-");
		userLanguage = userLanguage[0];

		return userLanguage;

	};
	
	return{
		get userLanguage(){

			return userLanguageImpl();

		},

		set userLanguage(value){

			localStorage.setItem('userLanguage', value);

		}
	}
});