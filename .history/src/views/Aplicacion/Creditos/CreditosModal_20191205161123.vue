<template>
  <div>
    <b-modal id="modal-consulta-cte" size="xl" title="Créditos del cliente">
      <div class="card">
        <div class="card-header">CREDITOS</div>
        <div class="card-body">
          <b-table striped responsive hover :items="creditos"></b-table>
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
      creditos: []
    };
  },
  afterCreate() {
    this.cargarCreditosCliente();
  },
  methods: {
    cargarCreditosCliente() {
      let creditos = new Credito_service();

      creditos
        .credito_x_cliente_get(this.id_cliente)
        .then(response => {
          this.creditos = response.data;
        })
        .catch(error => {
          console.log(error.data);
        });
    }
  }
};
</script>