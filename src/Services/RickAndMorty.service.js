/** @format */

//servicio que es una capa especializada en comunicarse con apis
import { API_RM } from "./../Components/Constants/Api.cosntants";

class RickAndMortiService {
	async getAllCharacters() {
		const response = await fetch(API_RM.CHARACTERS()); //API_RICKMORTY.CHARACTERS() es una funcion, va con ()
		return response.json(); //si no lo convierto a json nos trae el response y puedo ver el status, body, etc
	}
	async getCharacterById(id) {
		const response = await fetch(API_RM.CHARACTER_BY_ID(id)); //API_RICKMORTY.CHARACTER_BY_ID() es una funcion, va con ()
		return response.json();
	}
}

export default new RickAndMortiService(); //esto nos va a permitir usarla desde donde necesitemos
