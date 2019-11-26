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
           
          <fieldset>
                                <div class="form-group row">
                                    <label class="col-md-2 col-form-label">Required Text</label>
                                    <div class="col-md-6">
                                        <input
                                            v-model="datos_cliente.id_cliente"
                                            v-validate="'required'"
                                            :class="{'form-control':true, 'is-invalid': errors.has('datos_cliente.id_cliente')}"
                                            type="text"
                                            name="required"/>
                                        <span v-show="errors.has('datos_cliente.id_cliente')" class="invalid-feedback">{{ errors.first('ddatos_cliente.id_cliente') }}</span>
                                    </div>
                                </div>
                            </fieldset>
           
           
            <div class="form-group">
                <label for="id_cliente">ID</label>
                <input type="text" class="form-control" v-model="datos_cliente.id_cliente">       
            </div>


               <div class="col-lg-4 mb-3">
                                        <label for="validationServer01">First name</label>
                                        <input class="form-control is-valid" id="validationServer01" type="text" placeholder="First name" value="Mark" required="" />
                                        <div class="valid-feedback">Looks good!</div>
                                    </div>
         <!--     <div class="p-col-6">
            <label for="N°_Formato:">N°_Formato::</label>
            <InputText id="id_formato" v-model="datos_cliente.n_formato" />
          </div>

          <div class="p-col-6">
            <label for="nombre">Nombre:</label>
            <InputText id="id_nombre" v-model="datos_cliente.nombres" />
          </div>

          <div class="p-col-6">
            <div class="col-auto">
              <label for="Apellido">Apellidos:</label>
              <InputText id="id_apellido" v-model="datos_cliente.apellidos" />
            </div>
          </div>

          <div class="p-col-6">
            <div class="col-auto">
              <label for="direccion">Direccion:</label>
              <InputText id="id_direccion" v-model="datos_cliente.direccion" />
            </div>
          </div>

          <div class="p-col-6">
            <div class="col-auto">
              <label for="id_telefono">Telefono:</label>
              <InputText id="id_telefono" v-model="datos_cliente.telefono" />
            </div>
          </div>

          <div class="p-col-6">
            <div class="col-auto">
              <label for="id_barrio">Barrio:</label>
              <InputText id="id_barrio" v-model="datos_cliente.barrio" />
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
                v-model="datos_cliente.email"
                placeholder="Example@Correo.com"
              />
            </div>
          </div>

          <div class="p-col-6">
            <label for="id_identificacion">Identificacion</label>
            <Dropdown
              id="id_identificacion"
              v-model="datos_cliente.identificacion"
              :options="Identificacion"
              optionLabel="descripcion"
              optionValue="id"
              placeholder="Seleccione una opción"
            />
          </div>

          <div class="p-col-6">
            <div class="col-auto">
              <label for="id_n_identificacion">N°_identificacion:</label>
              <InputText id="id_n_identificacion" v-model="datos_cliente.n_identificacion" />
            </div>
          </div> -->

        </form>
    </b-modal>
    <!-- Fin Modal -->
  </ContentWrapper>
</template>

<script src="./Clientes.js"></script>
