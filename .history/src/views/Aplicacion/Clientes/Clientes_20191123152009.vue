<<template>
    <ContentWrapper>
        <div class="content-heading">
            <div>{{ title }}</div>
        </div>
        <div class="row">
            <div class="col-xl-12">
                <!-- Datatable Clientes -->
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
                            <tr class="gradeC">
                                <td>Misc</td>
                                <td>PSP browser</td>
                                <td>PSP</td>
                                <td>-</td>
                                <td>C</td>
                            </tr>
                            <tr class="gradeU">
                                <td>Other browsers</td>
                                <td>All others</td>
                                <td>-</td>
                                <td>-</td>
                                <td>U</td>
                            </tr>
                        </tbody>
                    </Datatable>
                </div>
            </div>            
        </div>
    </ContentWrapper>
</template>

<script src="./Clientes.js">
</script>