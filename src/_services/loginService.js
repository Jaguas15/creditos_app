import axios from 'axios'

const RESOURCE_NAME = 'http://127.0.0.1:8000/api/auth/'

export default class loginService{

    login(data) {

        return axios.post(RESOURCE_NAME+'login', data, {
            headers: {
                'Content-Type':'application/json',
                'X-Requested-With':'XMLHttpRequest'
            }
        });
        
    }

}