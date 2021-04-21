<template>
    <div class="table table-anggota">
        <Table border stripe :columns="columns" size="small" :data="data"></Table>
        <div style="margin: 10px;overflow: hidden">
            <div style="float: right;">
                <Page :total="totalpage" :current="1" size="small"  @on-change="setPage"></Page>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TableGlobal",
    props:{
        columns: null,
        datas: Array,
        totalpage: Number,
    },
    data(){
        return{
            data: []
        }
    },
    methods:{
        setPage(val){
            return this.data = this.datas.slice((val - 1) * 5, val * 5);
        },
    },
    mounted() {
        this.setPage(1);
    },
}
</script>

<style lang="scss">

</style>