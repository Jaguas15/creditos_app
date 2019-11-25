 /**
     * Wrapper component for dataTable plugin
     * Only DOM child elements, componets are not supported (e.g. <Table>)
     */
    export default {
      name: 'Datatable',
      props: {
          /** datatables options object */
          options: {
              type: Object,
              default: {}
          },
          /** callback that receives the datatable instance as param */
          dtInstance: Function
      },

      mounted() {
          const dtInstance = $(this.$refs.tableElement).dataTable(this.options);

          if(this.dtInstance)
              this.dtInstance(dtInstance)
      },

      destroyed() {
          $(this.$refs.tableElement).dataTable({destroy: true});
      }

  }