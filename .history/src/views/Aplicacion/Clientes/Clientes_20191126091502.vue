<template>
  <ContentWrapper>
    <div class="content-heading">
      <div>
        Vue Tables
        <small>Vue.js 2 grid components</small>
      </div>
    </div>
    <div class="text-right">
      <!-- <b-btn @click="clear()" class="mr-2">Clear Table</b-btn>
      <b-btn @click="reload()">Reload Table</b-btn> -->
    </div>

    <v-client-table :data="clientes" :columns="columns" :options="options">
      <template slot="action" slot-scope="props">
        <div>
          <b-btn variant="outline-info mr-2" class="btn-xs" @click.prevent="edit(props.row)">Editar</b-btn>
          <!-- <b-btn variant="outline-danger" class="btn-xs" @click.prevent="remove(props.row)">remove</b-btn> -->
        </div>
      </template>
    </v-client-table>
  </ContentWrapper>
</template>

<script src="./Clientes.js"></script>
