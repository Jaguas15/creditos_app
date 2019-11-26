<template>
  <div class="p-grid">
    <!-- Mensajes Toad -->
    <Toast />

    <div class="p-col-12">
      <div class="card">
        <h1>{{ titulo }}</h1>
        <form @submit.prevent="fn_valida_form">
          <div class="p-cardialog-content">
            <div class="p-grid p-fluid">
              <div class="p-col-9">
                <label for="cedula">Cédula:</label>
                <br />
                <InputText id="cedula" type="text" v-model="cedula_buscar" />
              </div>

              <div class="p-col-3">
                <br />
                <Button
                  label="Buscar"
                  type="button"
                  icon="pi pi-search"
                  @click="fn_buscar_cliente"
                />
              </div>

              <div class="p-col-12" v-if="clientes.length > 0 && cedula_buscar !== ''">
                <DataTable
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
                </DataTable>
              </div>

              <div class="p-col-2" v-if="estado_seleccion_cliente">
                <label for="fecha">Fecha</label>
                <Calendar id="fecha" v-model="fecha" :locale="$utilidades.es" dateFormat="dd/mm/yy" />
              </div>
              <div class="p-col-2" v-if="estado_seleccion_cliente">
                <label for="periodo">Periodo</label>
                <Dropdown
                  v-model="periodo"
                  :options="periodos"
                  optionLabel="text"
                  optionValue="codigo"
                  placeholder="Seleccione una opción"
                />
              </div>
              <div class="p-col-1" v-if="estado_seleccion_cliente">
                <label for="cuotas">Cuotas</label>
                <InputText id="cuotas" type="text" v-model="n_cuotas" />
              </div>
              <div class="p-col-1" v-if="estado_seleccion_cliente">
                <label for="tasa">Tasa</label>
                <InputText id="tasa" type="text" v-model="tasa" />
              </div>
              <div class="p-col-2" v-if="estado_seleccion_cliente">
                <label for="capital">Vr. Capital</label>
                <InputText id="capital" type="text" v-model="vr_capital" />
              </div>
              <div class="p-col-2" v-if="estado_seleccion_cliente">
                <label for="estudios">Estudios</label>
                <InputText id="estudios" type="text" v-model="estudios" />
              </div>

              <div
                class="p-col-2"
                v-if="fecha != '' && periodo != '' && n_cuotas > 0 && tasa > 0 && vr_capital > 0 && estudios >= 0"
              >
                <br />
                <Button
                  label="Calcular"
                  type="button"
                  icon="pi pi-table"
                  style="float: left;"
                  @click="fnCalcularDiferido()"
                />
              </div>

              <div class="p-col-12" v-if="detalle_credito.length > 0">
                <DataTable
                  :value="detalle_credito"
                  data-key="id"
                  :paginator="true"
                  :rows="10"
                  paginatorPosition="bottom"
                >
                  <template #header>DETALLE DEL CREDITO</template>
                  <Column field="fecha_couta" header="Fecha"></Column>
                  <Column field="numero_couta" header="No. Cuota"></Column>
                  <Column field="valor_couta" header="Vr. Cuota"></Column>
                  <Column field="v_capital" header="Vr. Capital"></Column>
                  <Column field="v_interes" header="Vr. Interés"></Column>
                  <Column field="v_saldo" header="Vr. Saldo"></Column>
                </DataTable>
              </div>
            </div>
          </div>
          <div class="p-grid">
            <div class="p-col-12">
              <Toolbar>
                <template slot="right">
                  <Button
                    label="Guardar"
                    icon="pi pi-check"
                    type="submit"
                    class="p-button-success float-r"
                    style="margin-left: 5px;"
                  />
                </template>
              </Toolbar>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script src="./creditos.js"></script>