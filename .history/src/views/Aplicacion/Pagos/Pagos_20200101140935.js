import Credito_service from "./../../../_services/creditos_service";
import Pagosmaestro_service from "./../../../_services/pagosmaestro_service";

export default {
  name: "Pagos",
  data() {
    return {
      title: "Registro de pagos",
      credito_maestro: [],
      pagos_credito: [],
      pagos_maestro: [],
      datos_pagos_cliente:[],
      loading: false,
      filters: {},
      datos_creditos_pgos: [],
      vlor_pagar: 0,
      valor_total: 0,
      cols: [
        {
          key: "id_credito",
          label: "No.Crédito"
        },
        {
          key: "nro_coutas",
          label: "No.Cuota"
        },
        {
          key: "fecha_credito",
          label: "Fecha Cuota"
        },
        {
          key: "vlor_couta",
          label: "Valor_Cuota"
        },
        {
          key: "vlor_saldo",
          label: "Deuda"
        },
        {
          key: "vlor_pago",
          label: "Valor_Pago"
        },
        {
          key: "estado",
          label: "Acciones"
        }
      ],
      datos_detalle: {}
    };
  },
  mounted() {
    this.listado_pagos_credito()
    this.listado_pagos_clientes();
    this.loading = true;
   
    //this.dibujar_totalizador();
  },
 
  computed: {
    rows() {
      return this.datos_creditos_pgos.length;
    
    }
  },
  methods: {
 
    onRowSelected(row) {
      console.log(row)
     this.listado_pagos_clientes(row[0].id_credito);
    },

    listado_pagos_credito() {
      let datos_creditos_pgos = new Pagosmaestro_service();

      datos_creditos_pgos
        .get_credito_pagos()
        .then(response => {
          this.datos_creditos_pgos = response.data;
          this.loading = false;
        })
        .catch(error => {
          console.log(error.data);
        });
    },

  

   listado_pagos_clientes(p_credito){
      let datos_pagos_cliente = new Pagosmaestro_service();
     console.log('pagos_cliente '&&this.datos_creditos_pgos)
      datos_pagos_cliente
      .get_pagos_cliente('76')
      .then(response => {
        this.datos_pagos_cliente = response.data; 
        
        this.loading = false;
        console.log('pagos'&&this.datos_pagos_cliente)
      })
      .catch(error => {
        console.log(error.data);
      });
    },
    /*dibujar_totalizador() {
          let div_paginator = document.querySelector(
            ".p-paginator.p-component.p-unselectable-text.p-paginator-bottom"
          );
    
          let div = document.createElement("DIV");
          let text = document.createTextNode("Total: 0");
    
          div.setAttribute("class", "totalizador");
          div.setAttribute("id", "totalizador");
    
          div.appendChild(text);
          div_paginator.appendChild(div);
        },
        generar_totalizado() {
          let datos = this.datos_creditos_pgos;
          this.valor_total = 0;
          for (let i = 0; i < datos.length; i++) {
            this.valor_total += Number(
              document.getElementsByName("monto_pago")[i].value
            );
          }
    
          let element = document.getElementById("totalizador");
    
          element.innerHTML = "Total: " + this.valor_total;
        },*/

    guardar_pagos_maestro(maestro_data, detalle_data) {
      //guardar pagos maestro //
      let datos_pagos = new Pagosmaestro_service();

      datos_pagos
        .pagosmaestro_create(maestro_data)
        .then(response => {
          //Capturamos el "id" registrado por cada maestro de pago
          let id_pago = response.data.id_inserted;

          console.log("id_pago para detalle ->" + id_pago);

          /*
                Una vez guardado el maestro y luego de capturar su "id" 
                del registro, enviamos a registrar su detalle asociado
              */
          this.guardar_pagos_detalle(id_pago, detalle_data);
        })
        .catch(error => {
          console.log(error.data);
        });
    },
    guardar_pagos_detalle(id_pago, datos_detalle) {
      let datos_pagos_dtlle = new Pagosmaestro_service();

      datos_pagos_dtlle
        .pagosdetalle_create(id_pago, datos_detalle)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error.data);
        });
    },
    guardado_masivo_pagos() {
      let datos = this.datos_creditos_pgos;

      //Asignacion de valor pagado por cada registro de pago
      for (let i = 0; i < datos.length; i++) {
        Object.assign(datos[i], {
          valor_pagado: document.getElementsByName("monto_pago")[i].value
        });
      }

      this.datos_creditos_pgos = datos;

      let sysdate = new Date();

      this.datos_detalle = {};

      for (let i = 0; i < datos.length; i++) {
        if (datos[i].valor_pagado > 0) {
          //Obtenemos los datos que irán al maestro de pagos
          let datos_maestro = {
            id_credito: datos[i].id_credito,
            fecha_pago: this.$utility.formatDate(sysdate),
            estado: "S",
            valor_pagado: datos[i].valor_pagado,
            cta_bncaria: 0,
            frma_pago: 1
          };

          //Preparamos los datos que irán al detalle de pagos
          this.datos_detalle = {
            id_credito: datos[i].id_credito,
            mnto_pagado: datos[i].valor_pagado
          };

          /*
              El método que guarda el maestro recibe los datos asociados 
              así mismo junto con los datos que irán al detalle
            */
          this.guardar_pagos_maestro(datos_maestro, this.datos_detalle);
        }
      }
    }
  }
};
