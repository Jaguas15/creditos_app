<template>
  <ContentWrapper>
    <div class="card">
      <div class="card-header">{{title}}</div>
      <div class="card-body">
        <b-table
          striped
          hovered
          bordered
          responsive
          small
          :items="datos_creditos_pgos"
          :fields="cols"
        >
        <template slot="vlor_pago" slot-scope="data">
            <div>
                <!-- <b-form-input ></b-form-input> -->
                <input-valor nombre="valor_pagado" placeholder="Valor pago"/>
            </div>
        </template>
        </b-table>
      </div>
    </div>
  </ContentWrapper>
</template>

<script src="./Pagos.js"></script>