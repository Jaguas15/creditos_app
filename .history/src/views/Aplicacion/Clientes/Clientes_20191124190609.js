import Vue from "vue";
import Datatable from "@/components/Tables/Datatable";
import $ from 'jquery';
// Libraries for buttons
import * as JSZip from "jszip";
window.JSZip = JSZip;
require('pdfmake/build/pdfmake.js');
require('pdfmake/build/vfs_fonts.js');
// Datatables
require('datatables.net-bs')
require('datatables.net-bs4/js/dataTables.bootstrap4.js')
require('datatables.net-bs4/css/dataTables.bootstrap4.css')
require('datatables.net-buttons')
require('datatables.net-buttons-bs')
require('datatables.net-responsive')
require('datatables.net-responsive-bs')
require('datatables.net-responsive-bs/css/responsive.bootstrap.css')
require('datatables.net-buttons/js/buttons.colVis.js') // Column visibility
require('datatables.net-buttons/js/buttons.html5.js') // HTML 5 file export
require('datatables.net-buttons/js/buttons.flash.js') // Flash file export
require('datatables.net-buttons/js/buttons.print.js') // Print view button
require('datatables.net-keytable');
require('datatables.net-keytable-bs/css/keyTable.bootstrap.css')

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
