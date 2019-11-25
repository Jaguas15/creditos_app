import Vue from "vue";
import Datatable from '@/components/Tables/Datatable';

//Llamado de los servicios a usar en el componente
import Clientes_service from "./../../../_services/clientes_service";



export default {
  name: "Clientes",
  data() {
    return {
      title: "Clientes",
      clientes: []
    };
  },
  mounted() {
    this.listado_clientes();
  },
  methods: {
    listado_clientes() {
      let datos_clientes = new Clientes_service();
      datos_clientes
        .cliente_get()
        .then(response => {
            this.clientes = response.data;       
        })
        .catch(error => {
          console.log(error.data);
        });
    },
    edit(row) {
      console.log(row);
    },
    clear() {
      this.tableData = [];
    }
  }
};
