export const utilidades = {
    es: {
        firstDayOfWeek: 1,
        dayNames: [ "Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado" ],
        dayNamesShort: [ "Dom","Lun","Mar","Mié","Jue","Vie","Sáb" ],
        dayNamesMin: [ "D","L","M","Mi","J","V","S" ],
        monthNames: [ "Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre" ],
        monthNamesShort: [ "Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic" ],
        today: 'Hoy',
        clear: 'Borrar',
        weekHeader: 'Sm'
    },
    formatDate(date) {
        var d = new Date(date),
          month = "" + (d.getMonth() + 1),
          day = "" + d.getDate(),
          year = d.getFullYear();
  
        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;
  
        return [year, month, day].join("-");
      }
}