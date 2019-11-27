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
import DepartamentosService from "./../../../_services/departamentos_service";
import MunicipiosService from "./../../../_services/Municipios_service";

export default {
  name: "Clientes",
  components: {
    ClientTable
  },
  data() {
    return {
      title: "Clientes",
      tableData: [],
      departamentos: [],
      municipios: [],
      columns: ["id_cliente", "n_formato", "nombres", "apellidos", "action"],
      Identificacion: [
        { value: 1, text: "Cedula" },
        { value: 2, text: "Cedula_Extrajera" }],
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
    this.listado_departamentos();
    this.listado_municipios(); 
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

    listado_departamentos() {
      this.departamentos = [];

      let departamento = new DepartamentosService();
      departamento
        .get_departamentos()
        .then(response => {
          let deps = response.data;

          for(let i in deps){
            this.departamentos.push({
              value: deps[i].id_departamento,
              text: deps[i].descrpcion,
            })
          }
          //this.departamentos = response.data;
          //this.loading = false;
        })
        .catch(error => {
          console.log(error.data);
        });
    },

    listado_municipios() {
      let municipio = new MunicipiosService();

      this.municipios = [];

      municipio
        .get_municipios_x_departamento(this.datos_cliente.departamento)
        .then(response => {
          let munc = response.data;
          console.log('departamento ' + this.datos_cliente.departamento); 
          console.log('munipio ' +munc); 
          for(let i in munc){
            this.municipios.push({
              value:munc[i].id_municipio,
              text:munc[i].descripcion

            }) 
          }

         // this.municipios = response.data;
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
