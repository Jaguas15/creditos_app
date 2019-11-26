import Vue from 'vue'
import { ClientTable } from 'vue-tables-2';

    Vue.use(ClientTable);

//Llamado de los servicios a usar en el componente
import Clientes_service from './../../../_services/clientes_service'

export default {
    name: 'Clientes',
    data () {
        return {
            title: 'Clientes',
            tableData: [],
                columns: ['engine', 'browser', 'version', 'action'],
                options: {
                  pagination: { chunk: 5 },
                  sortIcon: {
                    is: 'fa-sort',
                    base: 'fas',
                    up: 'fa-sort-up',
                    down: 'fa-sort-down'
                  }
                },
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