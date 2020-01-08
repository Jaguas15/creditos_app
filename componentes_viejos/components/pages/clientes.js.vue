<template>
  <div class="p-grid">
    <br />
    <div class="p-col-12">
      <div class="card">
        <h1>{{ title }}</h1>

        <!-- Mensajes Toad -->
        <Toast />

        <DataTable
          :value="cliente_data"
          class="p-datatable-responsive"
          data-key="id_clientes"
          :loading="loading"
          :paginator="true"
          paginatorPosition="bottom"
          :rows="10"
          :filters="filters"
        >
          <template #header>
            <div style="margin-top:5px;text-align: right">
              <i class="pi pi-search" style="margin: 4px 4px 0px 0px;"></i>
              <InputText v-model="filters['global']" placeholder="Buscar" size="50" />
              <Button
                label="Nuevo"
                icon="pi pi-plus"
                @click="add_clientes"
                class="p-button-rounded"
              />
            </div>
          </template>
          <Column field="id_cliente" header="Codigo" :sortable="true"></Column>
          <Column field="n_formato" header="N°_Formato" :sortable="true"></Column>
          <Column field="nombres" header="Nombre" :sortable="true" filterMatchMode="startsWith"></Column>
          <Column field="apellidos" header="Apellido" :sortable="true"></Column>
          <Column field="direccion" header="Direccion" :sortable="true"></Column>
          <Column field="telefono" header="Telefono" :sortable="true"></Column>
          <Column field="estado" header="Estado" :sortable="true" style>
            <template #body="slotProps">
              <div
                :style="slotProps.data.estado == 'S' ? 'color: #34a835 !important;':'color: #e91224 !important;'"
              >
                <i class="pi pi-check" v-if="slotProps.data.estado == 'S'" />
                <i class="pi pi-times" v-else />
              </div>
            </template>
          </Column>
          <!-- <template #body="slotProps">
              <i
                class="pi pi-check"
                style="font-size: 3em; color: green;"
                v-if="slotProps.data.estado == 'A'"
              ></i>
              <i class="pi pi-ban" style="font-size: 3em; color: red;" v-else></i>
          </template>-->

          <Column field header="Acciones" :sortable="false">
            <template #body="slotProps">
              <Button
                type="button"
                icon="pi pi-check-circle"
                @click="editar_modal(slotProps.data)"
                class="p-button-primary"
              ></Button>
            </template>
          </Column>
        </DataTable>
      </div>
    </div>

    <Dialog :header="title" :visible.sync="acciones" :modal="true">
      <!-- <div class="alert alert-danger" v-if="!isvaliado">
      <ul>k
        <li v-show="!validation.nombres"><ValidationMessage>Digiste el nombre del cliente</ValidationMessage></li>
        <li v-show="!validation.apellidos"><ValidationMessage>Digiste el nombre del apellido </ValidationMessage></li>
      </ul>
      </div>-->

      <form @submit="save()">
        <div class="p-grid p-fluid">
          <!-- <div class="p-col-12">
              <label for="id">Consecutivo</label>
              <InputText
                id="id"
                v-model="cliente_obj.id_cliente"
                :disabled="true"
                autocomplete="off"
              />
          </div> -->

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

          <div class="p-col-6">
            <label for="id_departamento">Departamento</label>
            <Dropdown
              id="id_departamento"
              v-model="cliente_obj.departamento"
              :options="departamentos"
              optionLabel="descrpcion"
              optionValue="id_departamento"
              placeholder="Seleccione Departamento"
              @change="listado_municipios"
            />
          </div>

          <div class="p-col-6">
            <label for="id_municipio">Municipio</label>
            <Dropdown
              id="id_municipio"
              v-model="cliente_obj.municipio"
              :options="municipios"
              optionLabel="descripcion"
              optionValue="id_municipio"
              dataKey="id_municipio"
              placeholder="Seleccione Municipio"
            />
          </div>

          <!--      <div class="p-col-6">
              <div class="col-auto">
                <label for="id_cobrador">Cobrador:</label>
                <InputText id="id_cobrador" v-model="cliente_obj.cobrador" />
              </div>
          </div>-->

          <!--   <div class="p-col-6">
              <div class="col-auto">
                <label for="id_referencia">Referencia:</label>
                <InputText id="id_referencia" v-model="cliente_obj. referencia" />
              </div>
          </div>-->

          <div class="p-col-6">
            <label for="id_estado">Estado:</label>
            <Dropdown
              id="id_estado"
              v-model="cliente_obj.estado"
              :options="Estado"
              optionLabel="descripcion"
              optionValue="id"
              placeholder="Seleccione una opción"
            />
          </div>

          <div class="p-col-12">
            <div class="col-auto">
              <label for="id_observacion">Observacion:</label>
              <InputText id="id_observacion" v-model="cliente_obj.observacion" />
            </div>
          </div>
        </div>

        <div class="p-col-12">
          <Button label="Guardar" icon="pi pi-check" type="submit" />
        </div>
      </form>
    </Dialog>
  </div>
</template>

<script src="./clientes.js"></script>