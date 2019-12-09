<template>
    <ContentWrapper>
        <div class="card">
            <div class="card-header">
                {{title}}
            </div>
            <div class="card-body">
                <b-table striped hovered bordered responsive small :items="datos_creditos_pgos" :fields="cols" />
            </div>
        </div>
    </ContentWrapper>
</template>

<script src="./Pagos.js"></script>