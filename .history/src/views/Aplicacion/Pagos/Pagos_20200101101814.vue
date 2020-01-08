<template>
  <ContentWrapper>
    <div class="content-heading">
      <div>
        {{ title }}
        <!-- <small>Vue.js 2 grid components</small> -->
      </div>
    </div>



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
             
             <b-button  v-b-modal.modal-listado-pagos variant="outline-success" @click="pagos_x_clientes()">
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
        <p>{{datos_list_pagos}}</p>
      </div>
    </div>

        
 <b-modal id="modal-listado-pagos" title="Registro De Pagos">
    <p class="my-4"></p>
     <b-table
          striped
          hovered
          bordered
          responsive
          :items="datos_list_pagos"
        >
       
        </b-table>
  </b-modal>
  </ContentWrapper>
</template>

<script src="./Pagos.js"></script>