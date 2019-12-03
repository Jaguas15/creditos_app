// CSS Loaders
import "loaders.css/loaders.css";
import "spinkit/css/spinkit.css";

import inputPrice from "./../../../components/inputPrice/inputPrice";

import Clientes_service from "./../../../_services/clientes_service";
import Credito_service from "./../../../_services/creditos_service";

export default {
  name: "Creditos",
  components: {
    "input-price": inputPrice
  },
  data() {
    return {
      titulo: "Registro de Créditos",
      loading: false,
      cedula_buscar: null,
      col_clientes: [
        {
          key: "id_cliente",
          label: "Código"
        },
        {
          key: "n_identificacion",
          label: "Identificación"
        },
        {
          key: "nombres",
          label: "Nombre"
        },
        {
          key: "apellidos",
          label: "Apellidos"
        }
      ],
      col_detalle: [
        {
          key: "fecha_couta",
          label: "Fecha Cuota",
          formatter: value => {
            return this.$utility.formatDate(value);
          }
        },
        {
          key: "numero_couta",
          label: "No. Cuota"
        },
        {
          key: "valor_couta",
          label: "Vr. Cuota"
        },
        {
          key: "v_capital",
          label: "Vr. Capital"
        },
        {
          key: "v_interes",
          label: "Vr. Interés"
        },
        {
          key: "v_saldo",
          label: "Vr. Saldo"
        }
      ],
      clientes: [],
      estado_seleccion_cliente: false,
      cliente_seleccionado: {
        id_clientes: 0
      },
      periodos: [
        { value: "SEMANAL", text: "Semanal" },
        { value: "QUINCENAL", text: "Quincenal" }
      ],
      fecha: new Date(),
      periodo: "SEMANAL",
      n_cuotas: 0,
      tasa: null,
      vr_capital: 0,
      estudios: 0,
      credito_maestro: {},
      detalle_credito: [],      
      datos_detalle: [],
      perPage: 10,
      currentPage: 1,
      isInputActive: false
    };
  },
  computed: {
    rows() {
      return this.detalle_credito.length;
    }
  },
  methods: {
    fn_buscar_cliente() {
      let cli = new Clientes_service();

      this.loading = true;

      cli
        .cliente_x_cedula_get(this.cedula_buscar)
        .then(response => {
          this.clientes = response.data;
          this.loading = false;
        })
        .catch(error => {
          console.log(error.data);
        });
    },
    onRowSelected(record) {
      this.estado_seleccion_cliente = !this.estado_seleccion_cliente;
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    pad(n, width, z) {
      z = z || "0";
      n = n + "";
      return n.length >= width
        ? n
        : new Array(width - n.length + 1).join(z) + n;
    },

    fnCalcularDiferido() {
      Date.prototype.addDay = function(days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
      };

      let fecha = new Date(this.fecha);
      let sum_dias = 30;
      let v_interes = 0;
      let v_capital = 0;
      let v_tasa = 0;
      let v_couta = 0;
      let v_saldo = 0;
      let v_estudios = 0;
      let v_v1 = 0;
      //console.log(p_fecha_ini);

      if (this.periodo == "SEMANAL") {
        sum_dias = 7;
      } else if (this.periodo == "QUINCENAL") {
        sum_dias = 15;
      }

      this.detalle_credito = [];

      for (let i = 0; i <= this.n_cuotas; i++) {
        fecha = fecha.addDay(sum_dias);
        v_v1 = this.vr_capital; //replaceAll(p_valor, ".", "");

        let formatDate =
          this.pad(fecha.getMonth() + 1, 2) +
          "/" +
          this.pad(fecha.getDate(), 2) +
          "/" +
          fecha.getFullYear();
        v_capital = v_v1;
        v_tasa = this.tasa;
        v_tasa = this.tasa / 100;
        v_estudios = this.estudios;

        if (i == 0) {
          v_interes = parseFloat(v_capital) * parseFloat(v_tasa);
          v_saldo =
            parseFloat(v_capital) +
            parseFloat(v_interes) +
            parseFloat(v_estudios);
          v_interes = 0;
          v_couta = parseFloat(v_saldo) / parseFloat(this.n_cuotas);
        } else {
          v_interes =
            parseFloat(v_capital / this.n_cuotas) * parseFloat(v_tasa);
          v_capital = parseFloat(v_couta) - parseFloat(v_interes);
          v_saldo = parseFloat(v_saldo) - parseFloat(v_couta);
        }
        let registro = {
          fecha_couta: formatDate,
          numero_couta: i,
          valor_couta: v_couta,
          v_capital: v_capital,
          v_interes: v_interes,
          v_saldo: v_saldo
        };

        this.detalle_credito.push(registro);
      }
    },
    fn_valida_form(event) {
      if (this.cedula_buscar == "" || this.cedula_buscar == null) {
        //Valida si la cedula es nula

        document
          .querySelector("#cedula")
          .setAttribute("class", "form-control is-invalid");
        document.querySelector("#cedula").setAttribute("aria-invalid", true);

        setTimeout(function() {
          document
            .querySelector("#cedula")
            .setAttribute("class", "form-control");
        }, 3000);

        this.$bvToast.toast("No ha ingresado una cedula.", {
          title: "Error!",
          variant: "danger",
          solid: true
        });

        event.preventDefault();
      } else if (this.detalle_credito.length == 0) {
        //Valida si la fecha es nula

        this.$bvToast.toast("No ha realizado cálculo del crédito.", {
          title: "Error!",
          variant: "danger",
          solid: true
        });

        event.preventDefault();
      } else {
        this.fnGuardarCredito(); // Esta funcion no se llama hasta que deje de cumplir las condiciones de arriba
      }
    },
    fnLimpiar() {
        this.estado_seleccion_cliente = !this.estado_seleccion_cliente;
      this.cedula_buscar = null;
      (this.clientes = []), (this.fecha = new Date());
      (this.periodo = "SEMANAL"),
        (this.n_cuotas = 0),
        (this.tasa = 0),
        (this.vr_capital = 0),
        (this.estudios = 0);
      this.detalle_credito = [];
      
    },
    fnGuardarCredito() {
      let credito = new Credito_service();

      let fecha_vence = null;
      let total_capital = 0;
      let total_interes = 0;
      let valor_cuota = 0;
      let total_saldo = 0;

      for (let i = 0; i < this.detalle_credito.length; i++) {
        fecha_vence = this.detalle_credito[i].fecha_couta;
        valor_cuota = this.detalle_credito[i].valor_couta;
        total_capital += Number(this.detalle_credito[i].v_capital);
        total_interes += Number(this.detalle_credito[i].v_interes);
        total_saldo += Number(this.detalle_credito[i].v_saldo);
      }

      //console.log(this.formatDate(this.fecha));

      // Datos Maestro
      this.credito_maestro = {
        id_cliente: this.cliente_seleccionado.id_clientes,
        fecha_credito: this.$utility.formatDate(this.fecha),
        fecha_vencimiento: this.$utility.formatDate(fecha_vence),
        vlor_capital: total_capital,
        vlor_interes: total_interes,
        vlor_estudios: this.estudios,
        nro_coutas: this.n_cuotas,
        tasa: this.tasa,
        periodo: this.periodo,
        estado: "S",
        vlor_couta: valor_cuota,
        vlor_saldo: total_saldo
      };      

      credito
        .credito_create(this.credito_maestro)
        .then(response => {
          //console.log("Respuesta luego de insertar maestro: ", response.data);          
          this.fnGuardarDetalleCredito(response.data.id_inserted);
        })
        .catch(error => {
          console.log(error.data);
        });

        this.fnLimpiar();

      this.$bvToast.toast("El crédito ha sido creado.", {
        title: "Datos registrados!",
        variant: "success",
        solid: true
      });
    },
    fnGuardarDetalleCredito(id_credito) {
      let credito_det = new Credito_service();      
            
      for (let i = 0; i < this.detalle_credito.length; i++) {
          console.log('i', i)
        this.datos_detalle.push({
          id_credito: id_credito,
          nro_coutas: this.detalle_credito[i].numero_couta,
          fecha_credito: this.formatDate(this.detalle_credito[i].fecha_couta),
          vlor_capital: this.detalle_credito[i].v_capital,
          vlor_interes: this.detalle_credito[i].v_interes,
          vlor_couta: this.detalle_credito[i].valor_couta,
          vlor_saldo: this.detalle_credito[i].v_saldo
        });
      }

      console.log('detalle', this.datos_detalle);

      credito_det
        .credito_detalle_create(this.datos_detalle)
        .then(response => {})
        .catch(error => {
          console.log(error.data);
        });

        this.datos_detalle = [];
    }
  }
};
