import axios from 'axios'

const RESOURCE_NAME = 'http://127.0.0.1:8000/api/auth/clientes/'

export default class Clientes_service{

    cliente_get() {

        return axios.get(RESOURCE_NAME);
       
    }

    cliente_x_cedula_get(cedula) {

        return axios.get('http://127.0.0.1:8000/api/auth/cliente_x_cedula/'+cedula);
       
    }

    cliente_create(data) {

        return axios.post(RESOURCE_NAME, data, {
            headers: {
                'Content-Type':'application/json',
                'X-Requested-With':'XMLHttpRequest'
            }
        });
       
    }

    cliente_update(id, data) {

        return axios.put(RESOURCE_NAME+id, data, {
            headers: {
                'Content-Type':'application/json',
                'X-Requested-With':'XMLHttpRequest'
            }
        });
       
    }

}