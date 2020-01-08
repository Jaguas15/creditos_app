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
            :items="datos_pagos_cliente"
            
                >
          </b-table>
  </b-modal>
    </div>
</template>