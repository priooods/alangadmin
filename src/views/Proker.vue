<template>
    <div class="proker">
        <div v-show="showing == 1">
            <h1 class="font-bold text-xl hidden md:block">Proker</h1>
            <p class="hidden md:block">Tap item untuk melihat detail dan memberi komentar</p>
            <div class="md:flex md:mt-7">
                <div class="md:w-5/6 md:pb-5">
                    <div class="grid grid-cols-3 gap-2">
                        <div v-for="(item,index) in $store.state.proker.prokerall" v-bind:key="index">
                            <div class="cards-box md:p-3 h-auto" @click="showdetail(item); showing = 3">
                                <h5 class="font-bold text-sm">{{item.judul}}</h5>
                                <p class="md:mt-1">{{item.department.departemen}}</p>
                                <p class="md:mt-2">{{item.ketua}}</p>
                                <p>
                                    {{item.tgl_mulai | moment('timezone','Asia/Jakarta', 'DD-MMMM-yyyy')}} - 
                                    {{item.tgl_selesai | moment('timezone','Asia/Jakarta', 'DD-MMMM-yyyy')}}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-1/6 md:ml-4 h-full sticky top-15" v-if="$store.state.users.user.access_id == 2 
                || $store.state.users.user.access_id == 4 || $store.state.users.user.access_id == 5 || $store.state.users.user.access_id == 1">
                    <div class="btn-prio py-2" @click="showing = 2">Tambah Proker</div>
                </div>
            </div>
        </div>
      <TambahProker :show="showing" @closeform="closeform"></TambahProker>
      <KomentarProker :show="showing" @closeable="closekomen" :data="dataproker"></KomentarProker>
    </div>
</template>

<script>
import TambahProker from '../components/TambahProker';
import KomentarProker from '../components/KomentarProker';
export default {
    name: 'Proker',
    components: {TambahProker, KomentarProker},
    data() {
        return {
            showing: 1,
            dataproker: []
        }
    },
    methods: {
        closeform(value){
            return this.showing = value;
        },
        closekomen(value){
            return this.showing = value;
        },
        showdetail(value){
            return this.dataproker = value;
        }
    },
    created() {
        this.$store.dispatch('proker/ProkerAll');
    },
}
</script>

<style>

</style>