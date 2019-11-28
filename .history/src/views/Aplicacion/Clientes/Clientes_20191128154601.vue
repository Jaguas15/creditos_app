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
    <v-client-table :data="clientes" :columns="columns" :options="options">
      <template slot="action" slot-scope="props">
        <div>
          <b-btn
            variant="outline-info mr-2"
            class="btn-xs"
            @click.prevent="edit(props.row)"
            v-b-modal.clientesModal
          >Editar</b-btn>
          <!-- <b-btn variant="outline-danger" class="btn-xs" @click.prevent="remove(props.row)">remove</b-btn> -->
        </div>
      </template>
    </v-client-table>

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
          <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Close Me</b-button>
          <b-button type="submit" class="float-right" variant="success">Success</b-button>
        </form>
      </div>
    </b-modal>
    <!-- Fin Modal -->
  </ContentWrapper>
</template>

<script src="./Clientes.js"></script>
