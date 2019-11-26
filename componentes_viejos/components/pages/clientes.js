import Clientes_service from "./../../_services/clientes_service";
import DepartamentosService from "./../../_services/departamentos_service";
import MunicipiosService from "./../../_services/Municipios_service";

export default {
  data() {
    return {
      title: "Registro de Clientes",
      cliente_data: [],
      Identificacion: [
        { id: 1, descripcion: "Cedula" },
        { id: 2, descripcion: "Cedula_Extrajera" }
      ],
      Estado: [
        { id: "S", descripcion: "Activo" },
        { id: "N", descripcion: "Inactivo" }
      ],
      filters: {},
      departamentos: [],
      municipios: [],
    
      cliente_obj: {
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
      acciones: false,
      loading: false
    };
    
  },
computed: {
validation: function(){
  return {
    nombres: !!this.cliente_obj.nombres,
    apellidos: !!this.cliente_obj.apellidos
  }
}
},
  
/*isvaliado: function(){
  var validacion = this.validation
  return Object.keys(validacion).every (function(key){
     return validacion[key]
  })
},*/
 
  mounted() {
    this.loading = true;
    this.listado_clientes();
    this.listado_departamentos();
  },

  methods: {
    add_clientes() {
      this.cliente_obj = {
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

      this.acciones = true;
    },

    
   editar_modal(item){
    this.cliente_obj = Object.assign({}, item);
      this.acciones = true
   }, 

    listado_departamentos() {
      let departamento = new DepartamentosService();
      departamento
        .get_departamentos()
        .then(response => {
          this.departamentos = response.data;
          this.loading = false;
        })
        .catch(error => {
          console.log(error.data);
        });
    },
   
    listado_clientes() {
      let datos_clientes = new Clientes_service();
      datos_clientes
        .cliente_get()
        .then(response => {
          this.cliente_data = response.data;
          this.loading = false;
        })
        .catch(error => {
          console.log(error.data);
        });
    },
    listado_municipios() {
      let municipio = new MunicipiosService();

      this.municipios = [];

      municipio
        .get_municipios_x_departamento(this.cliente_obj.departamento,this.cliente_obj.municipio)
        .then(response => {
          this.municipios = response.data;
        })
        .catch(error => {
          console.log(error.data);
        });
    },
    /*checkForm(event) {
        this.save();
      },*/

    close() {
      this.acciones = false;
    },

    save: function() {
      event.preventDefault();
      let datos_clientes = new Clientes_service();
      if (this.cliente_obj.id_cliente !== 0) {
        datos_clientes
          .cliente_update(this.cliente_obj.id_cliente, this.cliente_obj)
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log(error.data);
          });

        this.$toast.add({
          severity: "success",
          summary: "Información",
          detail: "La información ha sido actualizada exitosamente.",
          life: 3000
        });
      } else {
        datos_clientes
          .cliente_create(this.cliente_obj)
          .then(response => {
            console.log(response);
            console.log('entrando a insertar')
          })
          .catch(error => {
            console.log(error.data);
          });

        this.$toast.add({
          severity: "success",
          summary: "Información",
          detail: "La información ha sido almacenada exitosamente.",
          life: 3000
        });
        
      }
      
      this.listado_clientes();
      this.close();
        
    }
  }
};
