<template>
  <div>
    <b-modal id="modal-consulta-cte" size="xl" title="Créditos del cliente">
      <div class="card">
        <div class="card-header"></div>
        <div class="card-body">
           <b-card
       border-variant="success"
       bg-variant="light" 
       text-variant="green" 
       header="Gestion De Credito Totalizado" 
       lass="text-center"
      >
        
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
    </b-card>

<p> {{col_detalle}} </p>

<template slot="Saldo" slot-scope="data">
  <!-- `data.value` is the value after formatted by the Formatter -->
  <p class="align-right">{{ $utility.formatPrice(data.value) }}</p>
</template>

  <b-card
       border-variant="success"
       bg-variant="light" 
       text-variant="green" 
       header="Gestion De Credito Detallado" 
       lass="text-center"
      >
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
          </b-card>
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