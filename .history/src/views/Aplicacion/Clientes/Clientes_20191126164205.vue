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
          <!-- Nombre -->
          <div class="form-row align-items-center">
            <div class="col-6">
              <label for="Nombre">Nombre</label>
              <input
                id="Nombre"
                v-model="datos_cliente.nombre"
                v-validate="'required'"
                :class="{
                      'form-control': true,
                      'is-invalid': errors.has('demo.required')
                    }"
                type="text"
                name="required"
              />
              <span
                v-show="errors.has('demo.required')"
                class="invalid-feedback"
              >{{ errors.first("demo.required") }}</span>
            </div>
            <!-- </div> -->
            <!-- Apellido -->
            <div class="col-6">
              <label for="apellido">Apellido</label>
              <input
                id="apellido"
                v-model="datos_cliente.apellido"
                v-validate="'required'"
                :class="{
                      'form-control': true,
                      'is-invalid': errors.has('demo.required')
                    }"
                type="text"
                name="required"
              />
              <span
                v-show="errors.has('demo.required')"
                class="invalid-feedback"
              >{{ errors.first("demo.required") }}</span>
            </div>

            <!-- Direccion  -->

            <div class="col-6">
              <label for="direccion">Direccion</label>
              <input
                id="direccion"
                v-model="datos_cliente.direccion"
                v-validate="'required'"
                :class="{
                      'form-control': true,
                      'is-invalid': errors.has('demo.required')
                    }"
                type="text"
                name="required"
              />
              <span
                v-show="errors.has('demo.required')"
                class="invalid-feedback"
              >{{ errors.first("demo.required") }}</span>
            </div>

            <!-- Telefono  -->

            <div class="col-6">
              <label for="telefono">Telefono</label>
              <input
                id="telefono"
                v-model="datos_cliente.telefono"
                v-validate="'required'"
                :class="{
                      'form-control': true,
                      'is-invalid': errors.has('demo.required')
                    }"
                type="text"
                name="required"
              />
              <span
                v-show="errors.has('demo.required')"
                class="invalid-feedback"
              >{{ errors.first("demo.required") }}</span>
            </div>

            <!-- Barrio  -->

            <div class="col-6">
              <label for="barrio">Barrio:</label>
              <input
                id="barrio"
                v-model="datos_cliente.barrio"
                v-validate="'required'"
                :class="{
                      'form-control': true,
                      'is-invalid': errors.has('demo.required')
                    }"
                type="text"
                name="required"
              />
              <span
                v-show="errors.has('demo.required')"
                class="invalid-feedback"
              >{{ errors.first("demo.required") }}</span>
            </div>

            <!-- Email -->
            <div class="col-6">
              <label for="email">Email:</label>
              <input
                id="email"
                v-model="datos_cliente.email"
                v-validate="'required'"
                :class="{
                      'form-control': true,
                      'is-invalid': errors.has('demo.required')
                    }"
                type="text"
                name="required"
                placeholder="Example@Correo.com"
              />
              <span
                v-show="errors.has('demo.required')"
                class="invalid-feedback"
              >{{ errors.first("demo.required") }}</span>
            </div>

            <!-- Identificacion -->
            <div class="col-6">
              <label for="identificacion">Identificacion</label>
              <b-form-select
                id="identificacion"
                v-model="datos_cliente.identificacion"
                :options="Identificacion"
              ></b-form-select>
            </div>

            <div class="col-6">
              <label for="N_Identificacion">N°_Identificacion:</label>
              <input
                id="N_Identificacion"
                v-model="datos_cliente.n_identificacion"
                v-validate="'required'"
                :class="{
                      'form-control': true,
                      'is-invalid': errors.has('demo.required')
                    }"
                type="text"
                name="required"
              />
              <span
                v-show="errors.has('demo.required')"
                class="invalid-feedback"
              >{{ errors.first("demo.required") }}</span>
            </div>

            <!-- departamento -->
            <div class="col-6">
              <label for="departamento">Departamento</label>
              <b-form-select
                id="departamento"
                v-model="datos_cliente.departamento"
                :options="departamentos"
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
