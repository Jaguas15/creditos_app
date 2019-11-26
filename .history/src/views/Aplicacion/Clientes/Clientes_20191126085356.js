import Vue from "vue";
import { ClientTable } from "vue-tables-2";

Vue.use(ClientTable);

const tableData = [
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
  {
    engine: "Trident",
    browser: "Internet Explorer 5.5",
    platform: "Win 95+",
    version: "5.5",
    grade: "A"
  },
  {
    engine: "Trident",
    browser: "Internet Explorer 6",
    platform: "Win 98+",
    version: "6",
    grade: "A"
  },
  {
    engine: "Trident",
    browser: "Internet Explorer 7",
    platform: "Win XP SP2+",
    version: "7",
    grade: "A"
  },
  {
    engine: "Trident",
    browser: "AOL browser (AOL desktop)",
    platform: "Win XP",
    version: "6",
    grade: "A"
  },
  {
    engine: "Gecko",
    browser: "Firefox 1.0",
    platform: "Win 98+ / OSX.2+",
    version: "1.7",
    grade: "A"
  },
  {
    engine: "Gecko",
    browser: "Firefox 1.5",
    platform: "Win 98+ / OSX.2+",
    version: "1.8",
    grade: "A"
  },
  {
    engine: "Gecko",
    browser: "Firefox 2.0",
    platform: "Win 98+ / OSX.2+",
    version: "1.8",
    grade: "A"
  },
  {
    engine: "Gecko",
    browser: "Firefox 3.0",
    platform: "Win 2k+ / OSX.3+",
    version: "1.9",
    grade: "A"
  },
  {
    engine: "Gecko",
    browser: "Camino 1.0",
    platform: "OSX.2+",
    version: "1.8",
    grade: "A"
  },
  {
    engine: "Gecko",
    browser: "Camino 1.5",
    platform: "OSX.3+",
    version: "1.8",
    grade: "A"
  },
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
  {
    engine: "Trident",
    browser: "Internet Explorer 5.5",
    platform: "Win 95+",
    version: "5.5",
    grade: "A"
  },
  {
    engine: "Trident",
    browser: "Internet Explorer 6",
    platform: "Win 98+",
    version: "6",
    grade: "A"
  },
  {
    engine: "Trident",
    browser: "Internet Explorer 7",
    platform: "Win XP SP2+",
    version: "7",
    grade: "A"
  },
  {
    engine: "Trident",
    browser: "AOL browser (AOL desktop)",
    platform: "Win XP",
    version: "6",
    grade: "A"
  },
  {
    engine: "Gecko",
    browser: "Firefox 1.0",
    platform: "Win 98+ / OSX.2+",
    version: "1.7",
    grade: "A"
  },
  {
    engine: "Gecko",
    browser: "Firefox 1.5",
    platform: "Win 98+ / OSX.2+",
    version: "1.8",
    grade: "A"
  },
  {
    engine: "Gecko",
    browser: "Firefox 2.0",
    platform: "Win 98+ / OSX.2+",
    version: "1.8",
    grade: "A"
  },
  {
    engine: "Gecko",
    browser: "Firefox 3.0",
    platform: "Win 2k+ / OSX.3+",
    version: "1.9",
    grade: "A"
  },
  {
    engine: "Gecko",
    browser: "Camino 1.0",
    platform: "OSX.2+",
    version: "1.8",
    grade: "A"
  },
  {
    engine: "Gecko",
    browser: "Camino 1.5",
    platform: "OSX.3+",
    version: "1.8",
    grade: "A"
  },
  {
    engine: "Trident",
    browser: "AOL browser (AOL desktop)",
    platform: "Win XP",
    version: "6",
    grade: "A"
  }
];

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
      columns: ["engine", "browser", "version", "action"],
      options: {
        pagination: { chunk: 5 },
        sortIcon: {
          is: "fa-sort",
          base: "fas",
          up: "fa-sort-up",
          down: "fa-sort-down"
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

    edit(row) {},
    clear() {
      this.tableData = [];
    }
  }
};
