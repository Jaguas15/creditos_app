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
    <b-modal id="clientesModal" size="lg" :title="title">
      <form @submit.prevent="validateBeforeSubmit('demo')" data-vv-scope="demo">
        <form>
        
          <div class="form-row align-items-center">
     <!-- Nombre -->
   <b-form-group
       class="col-6"
      label="Nombre:"
      label-for="Nombre"
    
    >
      <b-form-input
        id="Nombre"
        v-model="datos_cliente.nombre"
        placeholder="Nombres"
        :formatter="format"
      ></b-form-input>
    </b-form-group>

     <!-- Apellido -->
       <b-form-group
       class="col-6"
      label="Apellidos:"
      label-for="Apellidos">
    
      <b-form-input
        id="Apellidos"
        v-model="datos_cliente.apellido"
        placeholder="Apellidos"
        :formatter="format"
      ></b-form-input>
    </b-form-group>
          
     <!-- Direccion  -->
            <b-form-group
       class="col-6"
      label="Direccion:"
      label-for="Direccion">
    
      <b-form-input
        id="Direccion"
        v-model="datos_cliente.direccion"
        placeholder="Direccion"
        :formatter="format"
      ></b-form-input>
    </b-form-group>
          
<!-- Telefono  -->
       <b-form-group
       class="col-6"
      label="Telefono:"
      label-for="Telefono">
    
      <b-form-input
        id="Telefono"
        v-model="datos_cliente.telefono"
        placeholder="Telefono"
        :formatter="format"
      ></b-form-input>
    </b-form-group>

         <!-- Barrio  -->
     <b-form-group
       class="col-6"
      label="Barrio:"
      label-for="Barrio">
    
      <b-form-input
        id="Barrio"
        v-model="datos_cliente.barrio"
        placeholder="Barrio"
        :formatter="format"
      ></b-form-input>
    </b-form-group>

 <!-- Email -->
  <b-form-group
       class="col-6"
      label="email:"
      label-for="email">
    
      <b-form-input
        id="email"
        v-model="datos_cliente.email"
        placeholder="Email"
        :formatter="format"
      ></b-form-input>
    </b-form-group>
 
           
            <!-- Identificacion -->
            <div class="col-6">
              <label for="identificacion">Identificacion</label>
              <b-form-select
                id="identificacion"
                v-model="datos_cliente.identificacion"
                :options="Identificacion"
              ></b-form-select>
            </div>

              <!--Numero Identificacion -->
             <b-form-group
       class="col-6"
      label="N_Identificacion:"
      label-for="N_Identificacion">
    
      <b-form-input
        id="N_Identificacion"
        v-model="datos_cliente.n_identificacion"
        placeholder="N_Identificacion"
        :formatter="format"
      ></b-form-input>
    </b-form-group>
            
            
         
            <!-- departamento -->
            <div class="col-6">
              <label for="departamento">Departamento</label>
              <b-form-select
                id="departamento"
                v-model="datos_cliente.departamento"
                :options="departamentos"
                @change="listado_municipios"
              ></b-form-select>
            </div>
           
                  <!-- municipio -->
              <div class="col-6">
              <label for="municipio">Municipio</label>
              <b-form-select
                id="municipio"
                v-model="datos_cliente.municipio"
                :options="municipios"
              ></b-form-select>
            </div>
              
               <!-- numero de formato -->

                  <b-form-group
       class="col-6"
      label="N_Formato:"
      label-for="N_Formato">
    
      <b-form-input
        id="N_Formato"
        v-model="datos_cliente.n_formato"
        placeholder="N_Formato"
        :formatter="format"
      ></b-form-input>
    </b-form-group>
<!-- Estado  -->
           <div class="col-6">
              <label for="estado">Estado:</label>
              <b-form-select
                id="estado"
                v-model="datos_cliente.estado"
                :options="Estado"
              ></b-form-select>
            </div>
          </div>
        </form>

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
        </div>-->
      </form>
    </b-modal>
    <!-- Fin Modal -->
  </ContentWrapper>
</template>

<script src="./Clientes.js"></script>
