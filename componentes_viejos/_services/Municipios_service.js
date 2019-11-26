import axios from 'axios'

const RESOURCE_NAME = 'http://127.0.0.1:8000/api/auth/municipios/'

export default class MunicipiosService{

    get_municipios() {

        return axios.get(RESOURCE_NAME);
        
    }

    get_municipios_x_departamento(id_departamento) {

        return axios.get('http://127.0.0.1:8000/api/auth/mncpios_x_dprtmnto/'+id_departamento);
        
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