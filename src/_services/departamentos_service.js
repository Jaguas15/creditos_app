import axios from 'axios'

const RESOURCE_NAME = 'http://127.0.0.1:8000/api/auth/departamentos/'

export default class DepartamentosService{

    get_departamentos() {

        return axios.get(RESOURCE_NAME);
        
    }

    create(data) {

        return axios.post(RESOURCE_NAME, data, {
            headers: {
                'Content-Type':'application/json',
                'X-Requested-With':'XMLHttpRequest'
            }
        });
        
    }

    update(id, data) {

        return axios.put(RESOURCE_NAME+id, data, {
            headers: {
                'Content-Type':'application/json',
                'X-Requested-With':'XMLHttpRequest'
            }
        });
        
    }

}