<template>
  <div>
    <b-modal id="modal-consulta-cte" size="xl" title="Créditos del cliente">
      <div class="card">
        <div class="card-header"></div>
        <div class="card-body">
         
         <b-card-group deck>
      <b-card
        border-variant="primary"
        header="Primary"
        header-bg-variant="primary"
        header-text-variant="white"
        align="center"
      >
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
          
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

          <b-table
            striped
            bordered
            responsive
            hover
            :per-page="perPage"
            :current-page="currentPage"
            :items="detalle"
          ></b-table>
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="table_cuotas"
          ></b-pagination>
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
      detalle: [],
      perPage: 10,
      currentPage: 1
    };
  },
  computed: {
    rows() {
      return this.detalle.length;
    }
  },
  methods: {
    onRowSelected(row) {
      //console.log(row)
      this.cargarDetalleCredito(row[0].id_credito);
    },
    cargarDetalleCredito(p_id_credito) {
      let credito_detalle = new Credito_service();

      credito_detalle
        .credito_detalle_get(p_id_credito)
        .then(response => {
          this.detalle = response.data;
        })
        .catch(error => {
          console.log(error.data);
        });
    }
  }
};
</script>