<template>
  <div>
    <b-modal id="modal-detalle-pagos" title="Registro De Pagos" v-if="datosPago.lenght > 0">
      <p class="my-4"></p>
      <b-table
        striped
        bordered
        responsive
        small
        hover
        id="modal-detalle-pagos"
        :items="datosPago"
        title="Información del detalle del pago"
      ></b-table>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    datosPago: {
      type: Array,
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>