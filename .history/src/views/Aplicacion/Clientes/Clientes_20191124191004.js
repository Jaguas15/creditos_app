import Vue from "vue";
import Datatable from "@/components/Tables/Datatable";

/**
 * Wrapper component for dataTable plugin
 * Only DOM child elements, componets are not supported (e.g. <Table>)
 */

//Llamado de los servicios a usar en el componente
import Clientes_service from "./../../../_services/clientes_service";

export default {
  name: "Clientes",
  components: {
    Datatable
  },
  data() {
    return {
      title: "Registro de Clientes",
     /* dtOptions1: {
        type: Array,
        default: {},
        paging: true, // Table pagination
        ordering: true, // Column ordering
        info: true, // Bottom left status text
        responsive: true,
      
        // Text translation options
        // Note the required keywords between underscores (e.g _MENU_)
        /*oLanguage: {
          sSearch: '<em class="fa fa-search"></em>',
          sLengthMenu: "_MENU_ records per page",
          info: "Showing page _PAGE_ of _PAGES_",
          zeroRecords: "Nothing found - sorry",
          infoEmpty: "No hay datos disponibles en la tabla.",
          infoFiltered: "(filtered from _MAX_ total records)",
          oPaginate: {
            sNext: '<em class="fa fa-caret-right"></em>',
            sPrevious: '<em class="fa fa-caret-left"></em>'
          }
        }*/
      //},
      clientes: []
    };
  },
  /*beforeMount() {
    this.listado_clientes();
  },*/
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
