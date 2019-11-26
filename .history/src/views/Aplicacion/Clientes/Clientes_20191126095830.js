import Vue from "vue";
import { ClientTable } from "vue-tables-2";

Vue.use(ClientTable);

/*const tableData = [
  {
    engine: "Trident",
    browser: "Internet Explorer 4.0",
    platform: "Win 95+",
    version: "4",
    grade: "X"
  },
  {
    engine: "Trident",
    browser: "Internet Explorer 5.0",
    platform: "Win 95+",
    version: "5",
    grade: "C"
  },
];*/

//Llamado de los servicios a usar en el componente
import Clientes_service from "./../../../_services/clientes_service";

export default {
  name: "Clientes",
  components: {
    ClientTable
  },
  data() {
    return {
      title: "Registro de Clientes",
      tableData: [],
      columns: ["id_cliente", "n_formato", "nombres", "apellidos", "action"],
      options: {
        pagination: { chunk: 5 },
        sortIcon: {
          is: "fa-sort",
          base: "fas",
          up: "fa-sort-up",
          down: "fa-sort-down"
        },
        texts: {
          filter: "Filtrar:",
          filterBy: 'Filtrar por {column}',
          count:' '
      },
        dateFormat: 'DD-MM-YYYY',
        datepickerOptions: {
          showDropdowns: true,
          autoUpdateInput: true,
      },
      headings: { //Alias de las columnas
        id_cliente: 'Código'
      }
      },
      clientes: []
    };
  },
  mounted() {
    this.listado_clientes();
  },
  created() {    
    // Add IDs for child rows functionality
    this.tableData = this.clientes.map((item, index) => {
      item["id"] = index;
      console.log(index)
      return item;
    });
  },
  methods: {
    listado_clientes() {
      let datos_clientes = new Clientes_service();
      datos_clientes
        .cliente_get()
        .then(response => {
          this.clientes = response.data;
          console.log(response.data);
        })
        .catch(error => {
          console.log(error.data);
        });
    },

    edit(row) {
      
    },
    clear() {
      this.tableData = [];
    }
  }
};
