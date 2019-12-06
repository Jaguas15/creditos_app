<template>
  <div>
    <b-modal id="modal-xl" size="xl" :title="title">
        <div class="card">
            <div class="card-header">
                CREDITOS
            </div>
            <div class="card-body">
                <b-table striped hover :items="creditos"></b-table>
            </div>
        </div>
    </b-modal>
  </div>
</template>

<script>

import Credito_service from "./../../../_services/creditos_service";

export default {
  props: {
    id_cliente: {
      type: Number,
      required: true
    },    
  },
  data() {
      return {
          creditos: []
      }
  },
  mounted: {

  },
  methods: {
      cargarCreditosCliente() {

      }
  }
};
</script>