import Vue from 'vue'
//Llamado de los servicios a usar en el componente
import Clientes_service from './../../../_services/clientes_service'

export default {
    name: 'Clientes',
    data () {
        return {
            title: 'Clientes',
            tableData: [
                {"engine": "Trident", "browser": "Internet Explorer 4.0", "platform": "Win 95+", "version": "4", "grade": "X"},
                {"engine": "Trident","browser": "Internet Explorer 5.0","platform": "Win 95+","version": "5","grade": "C"},
            ]
        }
    },
    mounted() {
        
    },
    methods: {
        
    },
}