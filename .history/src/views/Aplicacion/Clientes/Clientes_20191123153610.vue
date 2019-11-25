<template>
  <ContentWrapper>
    <div class="content-heading">
            <div>Vue Tables
                <small>Vue.js 2 grid components</small>
            </div>
        </div>
        <div class="text-right">
            <b-btn @click="clear()" class="mr-2">Clear Table</b-btn>
            <b-btn @click="reload()">Reload Table</b-btn>
        </div>

        <v-client-table :data="tableData" :columns="columns" :options="options">
          <template slot="action" slot-scope="props">
            <div>
              <b-btn variant="outline-info mr-2" class="btn-xs" @click.prevent="edit(props.row)">edit</b-btn>
              <b-btn variant="outline-danger" class="btn-xs" @click.prevent="remove(props.row)">remove</b-btn>
            </div>
          </template>
          <template slot="child_row" slot-scope="props">
            <div><strong>Platform:</strong> {{props.row.platform}}</div>
            <div><strong>Grade:</strong> {{props.row.grade}}</div>
          </template>
        </v-client-table>
  </ContentWrapper>
</template>

<script src="./Clientes.js"></script>
