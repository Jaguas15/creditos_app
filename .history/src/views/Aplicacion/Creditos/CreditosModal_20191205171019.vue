<template>
  <div>
    <h3>{{id_cliente}}</h3>
    <b-modal id="modal-consulta-cte" size="xl" title="Créditos del cliente">
      <div class="card">
        <div class="card-header">CREDITOS</div>
        <div class="card-body">
          <b-table striped bordered responsive hover :items="creditos"></b-table>

          <!-- <strong>CUOTAS</strong>

          <b-table striped bordered responsive hover :items="detalle"></b-table>-->
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
    }
  },
  data() {
    return {
      creditos: [],
      detalle: []
    };
  },
  mounted() {
    this.cargarCreditosCliente();
  },
  methods: {
    cargarCreditosCliente() {
      let credito = new Credito_service();

      if (this.id_cliente > 0) {
        credito
          .credito_x_cliente_get(this.id_cliente)
          .then(response => {
            this.creditos = response.data;            
          })
          .catch(error => {
            console.log(error.data);
          });
      }
    }
  }
};
</script>