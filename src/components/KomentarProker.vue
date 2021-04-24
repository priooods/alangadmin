<template>
  <div class="komen-proker">
      <div class="relative md:ml-6 md-mt-0 py-4" v-show="show == 3">
          <div class="flex cursor-pointer w-16 justify-start" @click="close">
            <i class='bx bx-left-arrow-alt bx-xs my-auto'></i>
            <p class="my-auto ml-2">Kembali</p>
          </div>
          <div class="md:flex md:mt-5">
              <div class="md:w-2/6">
                <h5 class="font-medium text-sm mb-2">{{data.judul}}</h5>
                <p v-if="datas.department">{{datas.department.departemen}}</p>
                <div class="md:mt-5 mt-4 grid md:grid-cols-2 md:gap-2">
                    <p>Penanggung Jawab</p>
                    <p>{{datas.ketua}}</p>
                    <p>Lokasi Proker</p>
                    <p>{{datas.lokasi}}</p>
                    <p>Deskripsi Proker</p>
                    <p>{{datas.desc}}</p>
                    <p>Tanggal Mulai</p>
                    <p>{{datas.tgl_mulai | moment('timezone','Asia/Jakarta', 'DD-MMMM-yyyy')}}</p>
                    <p>Tanggal Selesai</p>
                    <p>{{datas.tgl_selesai | moment('timezone','Asia/Jakarta', 'DD-MMMM-yyyy')}}</p>
                    <p>Tanggal Dibuat</p>
                    <p>{{datas.created_at | moment('timezone','Asia/Jakarta', 'DD-MMMM-yyyy, HH:mm z')}}</p>
                </div>
                <div v-if="datas.gol_point">
                    <p class="my-4 font-medium text-sm">Gol Point</p>
                    <div class="mt-2 grid md:grid-cols-2 md:gap-2" v-for="(data,i) in datas.gol_point" v-bind:key="i">
                        <p>Gol Point {{i + 1}}</p>
                        <p>{{data.title}}</p>
                    </div>
                </div>
              </div>
              <div class="md:w-4/6 md:ml-2 h-full md:pb-2">
                <h5 class="font-medium text-sm mb-2">Komentar</h5>
                <!-- <div v-for="(it)"></div> -->
                <div class="sticky bottom-0">
                    <div class="flex justify-start">
                        <vs-avatar circle size="30" class="avatar my-auto">
                            <img v-if="$store.state.users.user.avatar" :src="'https://jajandong.com/alangdatabase/public/images/' + $store.state.users.user.avatar" alt="avatar">
                            <img v-else src="../assets/avatar.png" alt="">
                        </vs-avatar>
                        <div class="my-auto ml-3">
                            <h5 class="font-medium">{{$store.state.users.user.fullname}}</h5>
                            <p>{{$store.state.users.user.departemen.departemen}}</p>
                        </div>
                    </div>
                    <Form class="mt-2">
                        <FormItem prop="comment">
                            <Input v-model="komen" type="textarea" placeholder="Komentar ku ..."/>
                        </FormItem>
                    </Form>
                    <div class="btn-prio float-right py-1 px-3">Kirim</div>
                </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "KomentarProker",
    props: {
        data: null,
        show: Number
    },
    data() {
        return {
            komen: '',
            formkomen: {
                comment : ''
            }
        }
    },
    computed:{
        datas(){
            return {...this.data}
        }
    },
    methods: {
        close(){
            return this.$emit('closeable', 1);
        }
    },
}
</script>

<style>

</style>