import axios from 'axios'

const RESOURCE_NAME = 'http://127.0.0.1:8000/api/auth/pagosmaestro/'

export default class Pagosmaestro_service{

    pagosmaestro_get() {

        return axios.get(RESOURCE_NAME);
       
    }

      
    get_credito_detalles(id_credito){
   
        return axios.get('http://127.0.0.1:8000/api/auth/credito_detalle/'+id_credito);

    }
   
    get_credito_pagos(){
        return axios.get('http://127.0.0.1:8000/api/auth/ncouta/');
    }

    get_pagos_cliente(){
        return axion.get('http://127.0.0.1:8000/api/auth/lista_pagos_cliente/'); 
    }

    pagosmaestro_create(data) {

        return axios.post(RESOURCE_NAME, data, {
            headers: {
                'Content-Type':'application/json',
                'X-Requested-With':'XMLHttpRequest'
            }
        });
       
    }

    
    pagosdetalle_create(id_pago, data) {

        return axios.post('http://127.0.0.1:8000/api/auth/pagos_detalles/'+id_pago, data, {
            headers: {
                'Content-Type':'application/json',
                'X-Requested-With':'XMLHttpRequest'
            }
        });
       
    }

    pagosmaestro_update(id, data) {

        return axios.put(RESOURCE_NAME+id, data, {
            headers: {
                'Content-Type':'application/json',
                'X-Requested-With':'XMLHttpRequest'
            }
        });
       
    }

}