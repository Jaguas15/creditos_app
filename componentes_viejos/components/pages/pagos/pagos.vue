<template>
  <div class="p-grid">
    <br />
    <div class="p-col-12">
      <div class="card">
        <h1 v-text="title"></h1>

        <DataTable
          :value="datos_creditos_pgos"
          class="p-datatable-responsive"
          data-key="id_credito"
          :loading="loading"
          :paginator="true"
          paginatorPosition="bottom"
          :rows="10"
          :filters="filters"
        >
          <Column field="id_credito" header="Codigo" :sortable="true"></Column>
          <Column field="fecha_credito" header="Fecha Credito" :sortable="true"></Column>
          <Column field="nro_coutas" header="N° Couta" :sortable="true"></Column>
          <Column field="vlor_couta" header="Vr. Couta" :sortable="true"></Column>
          <Column field header="Cliente" :sortable="false">
            <template #body="slotProps">{{slotProps.data.nombres+' '+slotProps.data.apellidos}}</template>
          </Column>
          <Column field header="Vr. Pagar" :sortable="false">
            <template #body="slotProps">
              <InputText
                style="width: 100%;"
                @keyup="generar_totalizado"
                name="monto_pago"
                value="0"
              />
            </template>
          </Column>
          <Column field="estado" header="Estado" :sortable="true">
            <template #body="slotProps">{{slotProps.data.estado == 'P' ? 'PENDIENTE':'PAGADO'}}</template>
          </Column>

          <!-- <Column field header="Opciones" :sortable="false">
            <template #body="slotProps">
              <Button
                type="button"
                icon="pi pi-check-circle"
                @click="editar_modal(slotProps.data)"
                class="p-button-primary"
              ></Button>
            </template>
          </Column>-->
        </DataTable>
      </div>
    </div>
    <div class="p-col-12">
      <Button
        type="button"
        icon="pi pi-check-circle"
        label="Guardar"
        @click="guardado_masivo_pagos"
        class="p-button-primary float-r"
      ></Button>
    </div>
  </div>
</template>
<script src="./pagos.js"></script>
