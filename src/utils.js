export const utils = {
    FormatoMoneda: function(vlor) {

        //console.log('valor sin formato' + vlor);
        // tslint:disable-next-line: use-isnan
        if (vlor > 0) {
            // tslint:disable-next-line: radix
            return parseFloat(vlor).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
            console.log('valor con formato:' + parseFloat(vlor).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'));
        } else {
            return '';
        }
    }
}