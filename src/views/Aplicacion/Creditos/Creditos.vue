<template>
  <ContentWrapper>
    <form @submit.prevent="fn_valida_form">
      <div class="container-fluid">
        <div class="form-group">
          <div class="row">
            <div class="col-md-9">
              <label for="cedula">Cédula:</label>
              <input type="text" class="form-control" id="cedula" v-model="cedula_buscar" />
            </div>
            <div class="col-md-3">
              <br />
              <button
                type="button"
                class="btn btn-labeled btn-primary mb-2 mr-1"
                @click="fn_buscar_cliente"
              >
                Buscar
                <span class="btn-label-r">
                  <i class="fa fa-search"></i>
                </span>
              </button>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-md-12">
              <!-- START card-->
              <div class="card card-default">
                <div class="card-header text-truncate">
                  <h5>INFORMACIÓN DEL CLIENTE</h5>
                </div>
                <div :class="!loading ? 'card-body' : 'card-body whirl double-up'">
                  <!-- Aqui info del cliente -->
                  <b-table
                    ref="selectableTable"
                    selectable
                    small
                    bordered
                    :fields="col_clientes"
                    :items="clientes"
                    @row-selected="onRowSelected"
                    select-mode="single"
                    reponsive="sm"
                  ></b-table>
                </div>
              </div>
              <!-- END card-->
            </div>
          </div>
          
          <div class="row">
            <div class="col-2" v-if="estado_seleccion_cliente">
              <label for="fecha">Fecha</label>
              <datepicker id="fecha" v-model="fecha" :bootstrapStyling="true" />
            </div>
            <div class="col-2" v-if="estado_seleccion_cliente">
              <label for="periodo">Periodo</label>
              <b-form-select id="periodo" v-model="periodo" :options="periodos"></b-form-select>
            </div>
            <div class="col-1" v-if="estado_seleccion_cliente">
              <label for="cuotas">Cuotas</label>
              <b-input
                v-model="n_cuotas"
                id="cuotas"
                class="mb-2 mr-sm-2 mb-sm-0"
                placeholder="No. Cuotas"
              ></b-input>
            </div>
            <div class="col-1" v-if="estado_seleccion_cliente">
              <label for="tasa">Tasa</label>
              <b-input v-model="tasa" id="tasa" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Tasa"></b-input>
            </div>
            <div class="col-2" v-if="estado_seleccion_cliente">
              <label for="capital">Vr. Capital</label>
              <b-input
                v-model="vr_capital"
                id="capital"
                class="mb-2 mr-sm-2 mb-sm-0"
                placeholder="$ Capital"
              ></b-input>
            </div>
            <div class="col-2" v-if="estado_seleccion_cliente">
              <label for="estudios">Estudios</label>
              <b-input
                v-model="estudios"
                id="estudios"
                class="mb-2 mr-sm-2 mb-sm-0"
                placeholder="$ Estudios"
              ></b-input>
            </div>

            <div
              class="col-2"
              v-if="fecha != '' && periodo != '' && n_cuotas > 0 && tasa > 0 && vr_capital > 0 && estudios >= 0"
            >
              <b-button
                style="float: left !important;"
                variant="outline-primary"
                @click="fnCalcularDiferido()"
              >Calcular</b-button>
            </div>
          </div>

          <div class="row mt-5" v-if="detalle_credito.length > 0">
              <div class="col-12">
                  <b-table
                    small
                    bordered
                    :fields="col_detalle"
                    :items="detalle_credito"                    
                    select-mode="single"
                    reponsive="sm"
                  ></b-table>
              </div>
          </div>
        </div>
      </div>
    </form>
  </ContentWrapper>
</template>                

<script src="./Creditos.js"></script>