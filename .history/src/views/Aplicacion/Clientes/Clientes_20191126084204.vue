<template>
  <ContentWrapper>
    <div class="content-heading">
            <div>DataTables
                <small>jQuery Datatables plugins using a custom VUE component wrapper.</small>
            </div>
        </div>
        <div class="container-fluid">
            <!-- DATATABLE DEMO 1-->
            <div class="card">
                <div class="card-header">
                    <div class="card-title">Zero configuration</div>
                    <div class="text-sm">DataTables has most features enabled by default, so all you need to do to use it with your own tables is to call the construction function: $().DataTable();.</div>
                </div>
                <div class="card-body">
                    <Datatable :options="dtOptions1" class="table table-striped my-4 w-100" id="datatable1">
                        <thead>
                            <tr>
                                <th data-priority="1">Engine</th>
                                <th>Browser</th>
                                <th>Platform(s)</th>
                                <th class="sort-numeric">Engine version</th>
                                <th class="sort-alpha" data-priority="2">CSS grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="gradeX" v-for="(cl, index) in clientes" :key="index">
                                <td>{{ cl.nombres }} {{ cl.apellidos}}</td>
                                <td>{{ cl.n_formato }}</td>
                                <td>{{ cl.direccion }}</td>
                                <td>{{ cl.telefono }}</td>
                                <td>{{ cl.n_identificacion }}</td>
                            </tr>                            
                        </tbody>
                    </Datatable>
                </div>
            </div>
        </div>
  </ContentWrapper>
</template>

<script src="./Clientes.js"></script>
