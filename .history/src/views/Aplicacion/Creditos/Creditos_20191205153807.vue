<template>
  <ContentWrapper>
    <form @submit.prevent="fn_valida_form">
      <div class="card">
        <div class="card-body">
          <div class="container-fluid">
            <div class="form-group">
              <div class="row">
                <div class="col-md-12">
                  <label for="cedula">Cédula:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="cedula"
                    v-model="cedula_buscar"
                    placeholder="Escriba número de cédula del cliente"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <button
                    style="margin-top: 5px;"
                    type="button"
                    class="btn btn-labeled btn-primary mb-2 mr-1 float-right"
                    @click="fn_buscar_cliente"
                  >
                    Buscar
                    <span class="btn-label-r">
                      <i class="fa fa-search"></i>
                    </span>
                  </button>
                </div>
              </div>

              <div class="row">
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
                        responsive
                        bordered
                        :fields="col_clientes"
                        :items="clientes"
                        @row-selected="onRowSelected"
                        select-mode="single"
                        reponsive="sm"
                      >
                        <template slot="Seleccionado" slot-scope="{rowSelected}">
                          <div style="text-align: center;">
                            <template v-if="rowSelected">
                              <span aria-hidden="true">
                                <i class="fa fa-check"></i>
                              </span>
                              <span class="sr-only">Selected</span>
                            </template>
                            <template v-else>
                              <span aria-hidden="true">
                                <i class="fa fa-window-close"></i>
                              </span>
                              <span class="sr-only">Not selected</span>
                            </template>
                          </div>
                        </template>

                        <template slot="Consulta" slot-scope="data">
                          <div v-if="data" style="text-align: center;">
                            <b-button v-b-modal.modal-xl variant="outline-success">
                              <i class="fa fa-eye"></i>
                            </b-button>
                          </div>
                        </template>
                      </b-table>
                    </div>
                  </div>
                  <!-- END card-->
                </div>
              </div>

              <div class="row" v-if="estado_seleccion_cliente.length>0">
                <div class="col-12">
                  <div class="card card-default">
                    <div class="card-header text-truncate">
                      <h5>DILIGENCIAMIENTO DEL CREDITO</h5>
                    </div>
                    <div class="card-body">
                      <div class="container-fluid">
                        <div class="row">
                          <div class="col-md-2 col-xs-3">
                            <label for="fecha">Fecha</label>
                            <datepicker id="fecha" v-model="fecha" :bootstrapStyling="true" />
                          </div>
                          <div class="col-md-2 col-xs-3">
                            <label for="periodo">Periodo</label>
                            <b-form-select id="periodo" v-model="periodo" :options="periodos"></b-form-select>
                          </div>
                          <div class="col-md-2 col-xs-3">
                            <label for="cuotas">Cuotas</label>
                            <b-input
                              v-model="n_cuotas"
                              id="cuotas"
                              class="mb-2 mr-sm-2 mb-sm-0 align-right"
                              placeholder="No. Cuotas"
                            ></b-input>
                          </div>
                          <div class="col-md-2 col-xs-3">
                            <label for="tasa">Tasa</label>
                            <b-input
                              v-model="tasa"
                              id="tasa"
                              class="mb-2 mr-sm-2 mb-sm-0 align-right"
                              placeholder="Tasa"
                            ></b-input>
                          </div>
                          <div class="col-md-2 col-xs-3">
                            <label for="capital">Vr. Capital</label>
                            <!-- <b-input
                          v-model="vr_capital"
                          id="capital"
                          class="mb-2 mr-sm-2 mb-sm-0  align-right"
                          placeholder="$ Capital"
                            ></b-input>-->
                            <input-price v-model="vr_capital"></input-price>
                          </div>
                          <div class="col-md-2 col-xs-3">
                            <label for="estudios">Estudios</label>
                            <!-- <b-input
                          v-model="estudios"
                          id="estudios"
                          class="mb-2 mr-sm-2 mb-sm-0  align-right"
                          placeholder="$ Estudios"
                            ></b-input>-->
                            <input-price v-model="estudios"></input-price>
                          </div>
                        </div>
                        <div class="row mt-3">
                          <div class="col-12">
                            <b-button
                              style="float: right !important;"
                              variant="primary"
                              :disabled="fecha != '' && periodo != '' && n_cuotas > 0 && tasa > 0 && vr_capital > 0 && estudios >= 0 ? false: true"
                              @click="fnCalcularDiferido()"
                            >Calcular</b-button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row" v-if="detalle_credito.length > 0">
                <div class="col-12">
                  <div class="card card-default">
                    <div class="card-header text-truncate">
                      <h5>CUOTAS DEL CREDITO</h5>
                    </div>
                    <div class="card-body">
                      <b-table
                        id="table_cuotas"
                        small
                        hovered
                        bordered
                        :fields="col_detalle"
                        :items="detalle_credito"
                        select-mode="single"
                        reponsive="sm"
                        :per-page="perPage"
                        :current-page="currentPage"
                      >
                        <template slot="fecha_couta" slot-scope="data">
                          <!-- `data.value` is the value after formatted by the Formatter -->
                          <p class="align-center">{{ data.value }}</p>
                        </template>

                        <template slot="numero_couta" slot-scope="data">
                          <!-- `data.value` is the value after formatted by the Formatter -->
                          <p class="align-right">{{ data.value }}</p>
                        </template>

                        <template slot="valor_couta" slot-scope="data">
                          <!-- `data.value` is the value after formatted by the Formatter -->
                          <p class="align-right">{{ $utility.formatPrice(data.value) }}</p>
                        </template>

                        <template slot="v_capital" slot-scope="data">
                          <!-- `data.value` is the value after formatted by the Formatter -->
                          <p class="align-right">{{ $utility.formatPrice(data.value) }}</p>
                        </template>

                        <template slot="v_interes" slot-scope="data">
                          <!-- `data.value` is the value after formatted by the Formatter -->
                          <p class="align-right">{{ $utility.formatPrice(data.value) }}</p>
                        </template>

                        <template slot="v_saldo" slot-scope="data">
                          <!-- `data.value` is the value after formatted by the Formatter -->
                          <p class="align-right">{{ $utility.formatPrice(data.value) }}</p>
                        </template>
                      </b-table>
                      <b-pagination
                        v-model="currentPage"
                        :total-rows="rows"
                        :per-page="perPage"
                        aria-controls="table_cuotas"
                      ></b-pagination>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <button type="submit" class="btn btn-primary float-right">Guardar</button>
        </div>
      </div>
    </form>

     <modal-creditos id_cliente=""/>

  </ContentWrapper>
</template>                

<script src="./Creditos.js"></script>

<style  scoped>
@import "./../../../styles/app/common/animate.css";
</style>