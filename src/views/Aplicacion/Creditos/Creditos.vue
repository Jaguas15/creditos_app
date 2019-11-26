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
                <br>
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
              <div class="col-md-12" >
                <template>
  <div class="overflow-auto">
    

    <p class="mt-3">Current Page: {{ currentPage }}</p>

    <b-table
      id="my-table"
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      small
    ></b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
  </div>
</template>
                <!-- <DataTable
                  :value="clientes"
                  :selection.sync="cliente_seleccionado"
                  selectionMode="single"
                  data-key="id"
                  @row-select="onRowSelect"
                >
                 
                  <template #header>INFORMACIÓN DEL CLIENTE</template>
                
                  <Column field="id_cliente" header="Codigo"></Column>
                  <Column field="n_formato" header="Nº Formato"></Column>
                  <Column field="nombres" header="Nombre"></Column>
                  <Column field="apellidos" header="Apellido"></Column>
                </DataTable> -->
              </div>
          </div>
        </div>
      </div>
    </form>
  </ContentWrapper>
</template>

<script src="./Creditos.js"></script>