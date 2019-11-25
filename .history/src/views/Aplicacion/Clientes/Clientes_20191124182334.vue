<template>
 <section class="section-container">
         <!-- Page content-->
         <div class="content-wrapper">
            <div class="content-heading">
               <div>Data Tables<small>Tables, one step forward.</small></div>
            </div>
            <div class="container-fluid">
               <!-- DATATABLE DEMO 1-->
               <div class="card">
                  <div class="card-header">
                     <div class="card-title">Zero configuration</div>
                     <div class="text-sm">DataTables has most features enabled by default, so all you need to do to use it with your own tables is to call the construction function: $().DataTable();.</div>
                  </div>
                  <div class="card-body">
                     <table  class="table table-striped my-4 w-100" id="datatable1">
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
                           <tr class="gradeX">
                              <td>Trident</td>
                              <td>Internet Explorer 4.0</td>
                              <td>Win 95+</td>
                              <td>4</td>
                              <td>X</td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
                </div>
                
 </section>
</template>

