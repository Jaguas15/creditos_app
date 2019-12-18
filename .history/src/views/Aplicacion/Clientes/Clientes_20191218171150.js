import Vue from "vue";
import { ClientTable } from "vue-tables-2";
import VeeValidate, { Validator } from "vee-validate";

Vue.use(VeeValidate, {
  fieldsBagName: "formFields", // fix issue with b-table
  localize: "es"
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
      filter:null,
      sortBy: '',
      sortDesc: false,
      totalRows: 3,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15],
      filterOn: [],
      sortDirection: 'asc',
      columns: ["id_cliente", "n_formato", "nombres", "apellidos", "action"],
      Identificacion: [
        { value: 1, text: "Cedula" },
        { value: 2, text: "Cedula_Extrajera" }
      ],
      Estado: [
        { value: "S", text: "Activo" },
        { value: "N", text: "Inactivo" }
      ],
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
      
      fields: [
        { key: 'id_cliente', label: 'Codigo', sortable: true, sortDirection: 'desc',class: 'text-center' },
        { key: 'nombres',   label: 'Nombres', sortable: true, sortDirection: 'desc',class: 'text-center' },
        { key: 'apellidos', label: 'Apellidos', sortable: true, sortDirection: 'desc',class: 'text-center' },
        { key: 'direccion', label: 'Direccion', sortable: true, sortDirection: 'desc',class: 'text-center' },
        { key: 'telefono', label: 'Telefono', sortable: true, sortDirection: 'desc',class: 'text-center' },
        { key: 'n_identificacion', label: 'Identificacion', sortable: true, sortDirection: 'desc',class: 'text-center' },
      
        {
          key: 'estado',
          label: 'Estado', 
          class: 'text-center',
          formatter: (value, key, item) => {
            return value ? 'Activo' : 'inactivo'
          },
        
          sortable: true,
          sortByFormatted: true,
          filterByFormatted: true
        },
        { key: 'actions', label: 'Actions',class: 'text-center' }, 
       
      ],

      infoModal: {
        id: 'info-modal',
        title: '',
        content: ''
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
    this.totalRows = this.clientes.length;
  },
  created() {
    // Add IDs for child rows functionality
    this.tableData = this.clientes.map((item, index) => {
      item["id"] = index;
      console.log(index);
      return item;
    });
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => {
          return { text: f.label, value: f.key }
        })
    },
    computed: {
      rows() {
        return this.fields.length
      }
    }
  },
  methods: {
    format(value, event) {
      return value.toLowerCase();
    },
    info(item, index, button) {
      this.infoModal.title = `Row index: ${index}`
      this.infoModal.content = JSON.stringify(item, null, 2)
      this.$root.$emit('bv::show::modal', this.infoModal.id, button)
    },
    resetInfoModal() {
      this.infoModal.title = ''
      this.infoModal.content = ''
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
      
    },
    add_cliente() {
      this.datos_cliente = {
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
      };
    },
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

        this.totalRows = this.clientes.length;
    },

    listado_departamentos() {
      this.departamentos = [];

      let departamento = new DepartamentosService();
      departamento
        .get_departamentos()
        .then(response => {
          let deps = response.data;

          for (let i in deps) {
            this.departamentos.push({
              value: deps[i].id_departamento,
              text: deps[i].descrpcion
            });
          }

          // this.datos_cliente.departamento =  value;
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
          //console.log('departamento ' + this.datos_cliente.departamento);
          //console.log('munipio ' +munc);
          for (let i in munc) {
            this.municipios.push({
              value: munc[i].id_municipio,
              text: munc[i].descripcion
            });
          }
        })
        .catch(error => {
          console.log(error.data);
        });
    },

    save: function() {
      event.preventDefault();
      let datos_clientes = new Clientes_service();
      if (this.datos_cliente.id_cliente !== 0) {
        datos_clientes
          .cliente_update(this.datos_cliente.id_cliente, this.datos_cliente)
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log(error.data);
          });

        this.$bvToast.toast(
          "La información ha sido actualizada exitosamente.",
          {
            title: "Información",
            variant: "success",
            autoHideDelay: 5000,
            solid: true
          }
        );
      } else {
        datos_clientes
          .cliente_create(this.datos_cliente)
          .then(response => {
            console.log(response);
            console.log("entrando a insertar");
          })
          .catch(error => {
            console.log(error.data);
          });

        this.$bvToast.toast("La información ha sido almacenada exitosamente.", {
          title: "Información",
          variant: "success",
          autoHideDelay: 5000,
          appendToast: false
        });
      }

      this.listado_clientes();
      this.$bvModal.hide('clientesModal');
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
    
    edit(row) {
      Object.assign(this.datos_cliente, row);
    console.log(row)
    },
    clear() {
      this.tableData = [];
    }
  }


  
};
