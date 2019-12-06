<template>
  <div>
    <b-modal id="modal-consulta-cte" size="xl" title="Créditos del cliente">
      <div class="card">
        <div class="card-header">CREDITOS</div>
        <div class="card-body">
          <b-table
            striped
            bordered
            responsive
            small
            hover
            selectable
            @row-selected="onRowSelected"
            select-mode="single"
            :items="creditos"
          ></b-table>

          <strong>CUOTAS</strong>

          <b-table striped bordered responsive hover :items="detalle"></b-table>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import Credito_service from "./../../../_services/creditos_service";

export default {
  props: {
    creditos: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      detalle: []
    };
  },
  methods: {
    onRowSelected(row){

    }
  }
};
</script>