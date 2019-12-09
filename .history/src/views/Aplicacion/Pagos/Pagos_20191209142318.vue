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
              <b-form-input
                nombre="valor_pagado"
                placeholder="Valor pago"
                @click="guardado_masivo_pagos"
              ></b-form-input>
            </div>
          </template>
        </b-table>
      </div>
      <div class="card-footer">
        <button type="button" class="btn btn-primary float-right">Aplicar pagos</button>
      </div>
    </div>
  </ContentWrapper>
</template>

<script src="./Pagos.js"></script>