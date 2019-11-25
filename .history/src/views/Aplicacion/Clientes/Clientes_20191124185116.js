
export default { 
  data() {
    return {
      options: {
        ajax: {
          url: 'https://jsonplaceholder.typicode.com/users',
          dataSrc: (json) => {
            return json
          }
        },
        buttons: ['copy', 'csv', 'print'],
/*eslint-disable */
        dom: "Btr<'row vdtnet-footer'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'pl>>",
/*eslint-enable */
        responsive: false,
        processing: true,
        searching: true,
        searchDelay: 1500,
        destroy: true,
        ordering: true,
        lengthChange: true,
        serverSide: true,
        fixedHeader: true,
        saveState: true
      },
      fields: {
        id: { label: 'ID', sortable: true },
        actions: {
          isLocal: true,
          label: 'Actions',
          defaultContent: '<a href="javascript:void(0);" data-action="edit" class="btn btn-primary btn-sm"><i class="mdi mdi-square-edit-outline"></i> Edit</a>' +
            '<span data-action="delete" class="btn btn-danger btn-sm"><i class="mdi mdi-delete"></i> Delete</span>'
        },
        name: { label: 'Name', sortable: true, searchable: true, defaultOrder: 'desc' },
        username: { label: 'Username', sortable: false, searchable: true  },
        email: { label: 'Email' },
        address1: {
          label: 'Address1',
          data: 'address',
          template: '{{ data.street }}, {{ data.suite }}'
        },
        address2: {
          label: 'Address2',
          data: 'address'
        },
        phone: { label: 'Phone' },
        website: {
          label: 'Website',
          render: (data) => {
            return `https://${ data }`
          }
        }
      },
      quickSearch: '',
      details: {}
    }
  },

methods: {
  doLoadTable(cb) {
    $.getJSON( 'https://jsonplaceholder.typicode.com/users', function( data ) {
      cb(data)
    })
  }
}