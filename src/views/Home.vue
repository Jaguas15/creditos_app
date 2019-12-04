<template>
    <ContentWrapper>
        <div class="content-heading">
            <div>{{title}}
                <small>Subtitle</small>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-3 col-md-6">
                <!-- START card-->
                <div class="card flex-row align-items-center align-items-stretch border-0">
                    <div class="col-4 d-flex align-items-center bg-primary-dark justify-content-center rounded-left">
                        <em class="icon-user fa-3x"></em>
                    </div>
                    <div class="col-8 py-3 bg-primary rounded-right">
                        <div class="h2 mt-0">1700</div>
                        <div class="text-uppercase">Clientes</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-md-6">
                <!-- START card-->
                <div class="card flex-row align-items-center align-items-stretch border-0">
                    <div class="col-4 d-flex align-items-center bg-purple-dark justify-content-center rounded-left">
                        <em class="icon-wallet fa-3x"></em>
                    </div>
                    <div class="col-8 py-3 bg-purple rounded-right">
                        <div class="h2 mt-0">700
                        </div>
                        <div class="text-uppercase">Créditos</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-12">
                <!-- START card-->
                <div class="card flex-row align-items-center align-items-stretch border-0">
                    <div class="col-4 d-flex align-items-center bg-danger-dark justify-content-center rounded-left">
                        <em class="fa fa-dollar-sign fa-3x"></em>
                    </div>
                    <div class="col-8 py-3 bg-danger rounded-right">
                        <div class="h2 mt-0">500</div>
                        <div class="text-uppercase">Pagos del día</div>
                    </div>
                </div>
            </div>            
        </div>
    </ContentWrapper>
</template>

<script>
export default {
    name: 'home',
    data () {
        return {
            title: 'Sistema de gestión de Préstamos'
        }
    }
}
</script>