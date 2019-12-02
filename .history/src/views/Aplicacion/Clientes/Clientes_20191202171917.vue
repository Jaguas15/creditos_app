<template>
  <ContentWrapper>
    <div class="content-heading">
      <div>
        {{ title }}
        <!-- <small>Vue.js 2 grid components</small> -->
      </div>
    </div>
    <div class="text-right">
      <!-- <b-btn @click="clear()" class="mr-2">Clear Table</b-btn>
      <b-btn @click="reload()">Reload Table</b-btn>-->
    </div>

    <button
      class="btn btn-labeled btn-info mb-2 mr-1 float-right"
      type="button"
      @click="add_cliente"
      v-b-modal.clientesModal
    >
      <span class="btn-label">
        <i class="fa fa-plus"></i>
      </span>Nuevo
    </button>

    <b-col sm="5" md="6" class="my-1">
      <b-form-group
        label="Per page"
        label-cols-sm="6"
        label-cols-md="4"
        label-cols-lg="3"
        label-align-sm="right"
        label-size="sm"
        label-for="perPageSelect"
        class="mb-0"
      >
        <b-form-select v-model="perPage" id="perPageSelect" size="sm" :options="pageOptions"></b-form-select>
      </b-form-group>
    </b-col>

    <template>
      <div>
        <!-- <b-col lg="6" class="my-1"> -->
        <b-form-group
          label="Buscar"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          label-for="filterInput"
          class="float-left mb-0"
        >
          <b-input-group size="sm">
            <b-form-input
              v-model="filter"
              type="search"
              id="filterInput"
              placeholder="Texto a buscar"
            ></b-form-input>
            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">Limpiar</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
        <!-- </b-col> -->

        <b-table
          show-empty
          :items="clientes"
          :fields="fields"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          :filter="filter"
          responsive="sm"
          :filterIncludedFields="filterOn"
          :current-page="currentPage"
          :per-page="perPage"
          :sort-direction="sortDirection"
          @filtered="onFiltered"
        ></b-table>

        <b-col sm="7" md="6" class="my-1">
          <b-pagination
            v-model="currentPage"
            :total-rows="totalRows"
            :per-page="perPage"
            align="fill"
            size="sm"
            class="my-0"
          ></b-pagination>
        </b-col>

        <div>
          Sorting By:
          <b>{{ sortBy }}</b>, Sort Direction:
          <b>{{ sortDesc ? 'Descending' : 'Ascending' }}</b>
        </div>
      </div>
    </template>
  </ContentWrapper>
</template>
    <!--<v-client-table :data="clientes" :columns="columns" :options="options">
      <template slot="action" slot-scope="props">
        <div>
          <button
            class="btn btn-labeled btn-info mb-2 mr-1"
            type="button"
            @click.prevent="edit(props.row)"
            v-b-modal.clientesModal
          >
            <span class="btn-label">
              <i class="fa fa-edit"></i>
            </span>Editar
          </button>
          <!-- <b-btn variant="outline-danger" class="btn-xs" @click.prevent="remove(props.row)">remove</b-btn> -->
      <!--  </div>
      </template>
    </v-client-table> -->

    <!-- Modal -->

    <b-modal id="clientesModal" size="lg" :title="title" hide-footer>
      <div class="d-block">
        <form @submit.prevent="save">
          <div class="form-row align-items-center">
            <!-- Nombre -->
            <b-form-group class="col-6" label="Nombre:" label-for="Nombre">
              <b-form-input
                id="Nombre"
                v-model="datos_cliente.nombres"
                placeholder="Nombres"
                :formatter="format"
              ></b-form-input>
            </b-form-group>

            <!-- Apellido -->
            <b-form-group class="col-6" label="Apellidos:" label-for="Apellidos">
              <b-form-input
                id="Apellidos"
                v-model="datos_cliente.apellidos"
                placeholder="Apellidos"
                :formatter="format"
              ></b-form-input>
            </b-form-group>

            <!-- Direccion  -->
            <b-form-group class="col-6" label="Direccion:" label-for="Direccion">
              <b-form-input
                id="Direccion"
                v-model="datos_cliente.direccion"
                placeholder="Direccion"
                :formatter="format"
              ></b-form-input>
            </b-form-group>

            <!-- Telefono  -->
            <b-form-group class="col-6" label="Telefono:" label-for="Telefono">
              <b-form-input
                id="Telefono"
                v-model="datos_cliente.telefono"
                placeholder="Telefono"
                :formatter="format"
              ></b-form-input>
            </b-form-group>

            <!-- Barrio  -->
            <b-form-group class="col-6" label="Barrio:" label-for="Barrio">
              <b-form-input
                id="Barrio"
                v-model="datos_cliente.barrio"
                placeholder="Barrio"
                :formatter="format"
              ></b-form-input>
            </b-form-group>

            <!-- Email -->
            <b-form-group class="col-6" label="email:" label-for="email">
              <b-form-input
                id="email"
                v-model="datos_cliente.email"
                placeholder="Email"
                :formatter="format"
              ></b-form-input>
            </b-form-group>

            <!-- Identificacion -->
            <div class="col-6">
              <b-form-group label="Identificacion:" label-for="Identificacion">
                <b-form-select
                  id="identificacion"
                  v-model="datos_cliente.identificacion"
                  :options="Identificacion"
                ></b-form-select>
              </b-form-group>
            </div>

            <!--Numero Identificacion -->
            <div class="col-6">
              <b-form-group label="N_Identificacion:" label-for="N_Identificacion">
                <b-form-input
                  id="N_Identificacion"
                  v-model="datos_cliente.n_identificacion"
                  placeholder="N_Identificacion"
                  :formatter="format"
                ></b-form-input>
              </b-form-group>
            </div>

            <!-- departamento -->
            <b-form-group class="col-6" label="departamento:" label-for="departamento">
              <b-form-select
                id="departamento"
                v-model="datos_cliente.departamento"
                :options="departamentos"
                @change="listado_municipios"
              ></b-form-select>
            </b-form-group>

            <!-- municipio -->
            <b-form-group class="col-6" label="municipio:" label-for="municipio">
              <b-form-select id="municipio" v-model="datos_cliente.municipio" :options="municipios"></b-form-select>
            </b-form-group>

            <!-- numero de formato -->
            <b-form-group class="col-6" label="N_Formato:" label-for="N_Formato">
              <b-form-input
                id="N_Formato"
                v-model="datos_cliente.n_formato"
                placeholder="N_Formato"
                :formatter="format"
              ></b-form-input>
            </b-form-group>

            <!-- Estado  -->
            <div class="col-6">
              <b-form-group label="Estado:" label-for="Estado">
                <b-form-select id="Estado" v-model="datos_cliente.estado" :options="Estado"></b-form-select>
              </b-form-group>
            </div>
          </div>
          <div>
            <b-form-textarea
              id="Observacion"
              placeholder="Observacion"
              v-model="datos_cliente.Observacion"
              rows="3"
              no-resize
            ></b-form-textarea>
          </div>
   
          <b-button type="submit" class="float-right mt-3" variant="success">Guardar</b-button>
        </form>
      </div>
    </b-modal>
    <!-- Fin Modal -->
  </ContentWrapper>
</template>

<script src="./Clientes.js"></script>
