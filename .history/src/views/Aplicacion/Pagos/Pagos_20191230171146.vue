<template>
  <ContentWrapper>
    <div class="content-heading">
      <div>
        {{ title }}
        <!-- <small>Vue.js 2 grid components</small> -->
      </div>
    </div>
    
 <b-modal id="modal-1" title="Registro De Pagos">
    <p class="my-4">Hello from modal!</p>

     <b-table
          striped
          hovered
          bordered
          responsive
          small
          :items="list_pagos"
          :fields="cols"
        >
        
        </b-table>
  </b-modal>


    <div class="card">
      <div class="card-header"></div>
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
          <template slot="vlor_couta" slot-scope="data">        
            <p class="align-right">{{ $utility.formatPrice(data.value) }}</p>
          </template>

          <template slot="vlor_saldo" slot-scope="data">
            <p class="align-right">{{ $utility.formatPrice(data.value) }}</p>
          </template>

          <template slot="vlor_pago" slot-scope="data">
            <div>
              <b-form-input name="monto_pago" placeholder="Valor pago"></b-form-input>
            </div>
          </template>

           <template slot="estado" slot-scope="data">
            <div style="text-align: center;">
             
             <b-button v-b-modal.modal-1 variant="outline-success">
                              <i class="fa fa-eye"></i>
             </b-button>
            </div>
          </template>

        </b-table>
      </div>
      <div class="card-footer">
        <button
          type="button"
          class="btn btn-primary float-right"
          @click="guardado_masivo_pagos"
        >Aplicar pagos</button>
      </div>
    </div>
  </ContentWrapper>
</template>

<script src="./Pagos.js"></script>