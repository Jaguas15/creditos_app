import Vue from "vue";
import { ClientTable } from "vue-tables-2";

Vue.use(ClientTable);

//Llamado de los servicios a usar en el componente
import Clientes_service from "./../../../_services/clientes_service";

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
  }
];*/

export default {
  name: "Clientes",
  data() {
    return {
      title: "Clientes",
      tableData: [],
      columns: ["id_cliente", "n_formato", "action"],
      options: {
        pagination: { chunk: 5 },
        sortIcon: {
          is: "fa-sort",
          base: "fas",
          up: "fa-sort-up",
          down: "fa-sort-down"
        }
      }
    };
  },
  created() {
    // Add IDs for child rows functionality
    this.tableData = tableData.map((item, index) => {
      item["id"] = index;
      return item;
    });
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
          this.tableData = response.data;
          this.loading = false;
        })
        .catch(error => {
          console.log(error.data);
        });
    },
    edit(even) {
      console.log(even.data)
    },
    clear() {
      this.tableData = [];
    }
  }
};
