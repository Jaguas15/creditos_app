<template>
  <div>

    {{id_cliente}}
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
  data() {
    return {
      creditos: [],
      id_cliente: 0
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