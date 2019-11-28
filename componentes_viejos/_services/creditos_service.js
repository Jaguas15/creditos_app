import axios from 'axios'

const RESOURCE_NAME = 'http://127.0.0.1:8000/api/auth/credito_maestro/'

export default class Credito_service{

    credito_get() {

        return axios.get(RESOURCE_NAME);
       
    }

    credito_create(data) {

        return axios.post(RESOURCE_NAME, data, {
            headers: {
                'Content-Type':'application/json',
                'X-Requested-With':'XMLHttpRequest'
            }
        });
       
    }
	
	credito_detalle_create(data) {
		return axios.post('http://127.0.0.1:8000/api/auth/credito_detalle_create/', data, {
            headers: {
                'Content-Type':'application/json',
                'X-Requested-With':'XMLHttpRequest'
            }
        });
	}

    credito_update(id, data) {

        return axios.put(RESOURCE_NAME+id, data, {
            headers: {
                'Content-Type':'application/json',
                'X-Requested-With':'XMLHttpRequest'
            }
        });
       
    }

}