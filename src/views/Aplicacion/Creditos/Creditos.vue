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
                <span class="btn-label">
                  <i class="fa fa-search"></i>
                </span>Buscar
              </button>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <template>
                <div class="overflow-auto">
                  <!-- <b-table id="tab-clientes" hover bordered :items="clientes" small></b-table> -->
                  <b-table stacked :items="clientes" :fields="cols"></b-table>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </form>
  </ContentWrapper>
</template>                

<script src="./Creditos.js"></script>