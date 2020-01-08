<template>
  <div>
    <b-modal id="modal-listado-pagos" title="Registro De Pagos">
      <p class="my-4"></p>
      <b-table
        striped
        bordered
        responsive
        small
        hover
        selectable
        id="modal-consulta-cte"
        :items="datos_pagos_cliente"
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
    data () {
        return{

        }
    }
}
</script>