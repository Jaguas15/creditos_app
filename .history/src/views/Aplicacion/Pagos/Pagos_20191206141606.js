export default {
    name: 'Pagos',
    data(){
        return {
            title: "Registro de pagos",
            credito_maestro: [],
            pagos_credito: [],
            pagos_maestro: [],
            loading: false,
            filters: {},
            datos_creditos_pgos: [],
            vlor_pagar: 0,
            valor_total: 0,
            datos_detalle: {}
        }
    }
}