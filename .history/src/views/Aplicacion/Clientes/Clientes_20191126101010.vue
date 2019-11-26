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

    <v-client-table :data="clientes" :columns="columns" :options="options">
      <template slot="action" slot-scope="props">
        <div>
          <b-btn variant="outline-info mr-2" class="btn-xs" @click.prevent="edit(props.row)" v-b-modal.clientesModal>Editar</b-btn>
          <!-- <b-btn variant="outline-danger" class="btn-xs" @click.prevent="remove(props.row)">remove</b-btn> -->
        </div>
      </template>
    </v-client-table>

    <!-- Modal -->
    <b-modal id="clientesModal" size="lg" :title="title">
        <form @submit.prevent="">
            <div class="form-group">
                <label for="id_cliente">ID</label>
                <input type="text" class="form-control" v-model="datos_cliente.id_cliente">       
            </div>
             <div class="p-col-6">
            <label for="N°_Formato:">N°_Formato::</label>
            <InputText id="id_formato" v-model="cliente_obj.n_formato" />
          </div>

          <div class="p-col-6">
            <label for="nombre">Nombre:</label>
            <InputText id="id_nombre" v-model="cliente_obj.nombres" />
          </div>

          <div class="p-col-6">
            <div class="col-auto">
              <label for="Apellido">Apellidos:</label>
              <InputText id="id_apellido" v-model="cliente_obj.apellidos" />
            </div>
          </div>

          <div class="p-col-6">
            <div class="col-auto">
              <label for="direccion">Direccion:</label>
              <InputText id="id_direccion" v-model="cliente_obj.direccion" />
            </div>
          </div>

          <div class="p-col-6">
            <div class="col-auto">
              <label for="id_telefono">Telefono:</label>
              <InputText id="id_telefono" v-model="cliente_obj.telefono" />
            </div>
          </div>

          <div class="p-col-6">
            <div class="col-auto">
              <label for="id_barrio">Barrio:</label>
              <InputText id="id_barrio" v-model="cliente_obj.barrio" />
            </div>
          </div>

          <div class="p-col-6">
            <div class="col-auto">
              <span class="p-inputgroup-addon">
                <i class="pi pi-envelope"></i>
              </span>
              <label for="id_email">Email:</label>
              <InputText
                id="id_email"
                v-model="cliente_obj.email"
                placeholder="Example@Correo.com"
              />
            </div>
          </div>

          <div class="p-col-6">
            <label for="id_identificacion">Identificacion</label>
            <Dropdown
              id="id_identificacion"
              v-model="cliente_obj.identificacion"
              :options="Identificacion"
              optionLabel="descripcion"
              optionValue="id"
              placeholder="Seleccione una opción"
            />
          </div>

          <div class="p-col-6">
            <div class="col-auto">
              <label for="id_n_identificacion">N°_identificacion:</label>
              <InputText id="id_n_identificacion" v-model="cliente_obj.n_identificacion" />
            </div>
          </div>

        </form>
    </b-modal>
    <!-- Fin Modal -->
  </ContentWrapper>
</template>

<script src="./Clientes.js"></script>
