import Vue from "vue";
import { ClientTable } from "vue-tables-2";
import VeeValidate, { Validator } from "vee-validate";

Vue.use(VeeValidate, {
  fieldsBagName: "formFields", // fix issue with b-table
  localize:"es"
});

//VeeValidate.Validator.localize("es");


Vue.use(ClientTable);

//Llamado de los servicios a usar en el componente
import Clientes_service from "./../../../_services/clientes_service";

export default {
  name: "Clientes",
  components: {
    ClientTable
  },
  data() {
    return {
      title: "Clientes",
      tableData: [],
      columns: ["id_cliente", "n_formato", "nombres", "apellidos", "action"],
      Identificacion: [
        { id: 1, descripcion: "Cedula" },
        { id: 2, descripcion: "Cedula_Extrajera" },
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
          filterBy: "Filtrar por {column}",
          count: " "
        },
        dateFormat: "DD-MM-YYYY",
        datepickerOptions: {
          showDropdowns: true,
          autoUpdateInput: true
        },
        headings: {
          //Alias de las columnas
          id_cliente: "Código"
        }
      },
      demo: {
        required: "",
        email: "",
        number: 0,
        alpha: "",
        url: "",
        equal: "",
        equalconfirm: "",
        minlength: "",
        maxlength: "",
        length: "",
        minval: "",
        maxval: "",
        ip: "",
        is: "",
        is_not: ""
      },
      datos_cliente: {
        id_cliente: 0,
        n_formato: null,
        nombres: null,
        apellidos: null,
        direccion: null,
        telefono: null,
        email: null,
        identificacion: null,
        n_identificacion: null,
        departamento: null,
        municipio: null,
        barrio: null,
        cobrador: null,
        referencia: null,
        observacion: null,
        estado: null
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
      console.log(index);
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
    validateBeforeSubmit(scope) {
      this.$validator.validateAll(scope).then(result => {
        if (result) {
          console.log("Form Submitted!");
          return;
        }
        console.log("Correct them errors!");
      });
    },

    edit(row) {},
    clear() {
      this.tableData = [];
    }
  }
};
