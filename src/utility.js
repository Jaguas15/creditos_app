export const utility = {
  calendar_spanish: {
    firstDayOfWeek: 1,
    dayNames: [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado"
    ],
    dayNamesShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
    dayNamesMin: ["D", "L", "M", "Mi", "J", "V", "S"],
    monthNames: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre"
    ],
    monthNamesShort: [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic"
    ],
    today: "Hoy",
    clear: "Borrar",
    weekHeader: "Sm"
  },

  formatNumber(value) {
    let val = (value / 1).toFixed(0).replace('.', ',')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  },
  formatPrice(value) {
    let val = (value / 1).toFixed(0).replace('.', ',')
    return '$ ' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  },
  formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  },

  formatLocalDate(input) {
  
    var datePart = new Date(input).match(/\d+/g),
      year = datePart[0].substring(2), // get only two digits
      month = datePart[1], 
      day = datePart[2];

      console.log(day + '/' + month + '/' + year)

    return day + '/' + month + '/' + year;
  },
  AproximarAMilNum(valor) {
    var valor_redondeado;
    var res;

    if (valor != null) {
      res = valor % 1000;

      if (res != 0) {
        if (res < 501) {
          valor_redondeado = valor - res;
        } else {
          valor_redondeado = valor - res + 1000;
        }
      } else {
        valor_redondeado = valor;
      }
      return valor_redondeado;
    }
    return 0;
  },
}