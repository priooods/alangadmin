<template>
  <div class="komen-proker">
      <div class="relative md:ml-6 md-mt-0 py-4" v-show="show == 3">
          <div class="flex cursor-pointer w-16 justify-start" @click="close">
            <i class='bx bx-left-arrow-alt bx-xs my-auto'></i>
            <p class="my-auto ml-2">Kembali</p>
          </div>
          <div class="md:flex md:mt-5 mt-4">
              <div class="md:w-3/6 md:sticky top-10 h-full">
                <h5 class="font-medium text-sm mb-2">{{data.judul}}</h5>
                <p v-if="datas.department">{{datas.department.departemen}}</p>
                <div class="md:mt-5 mt-4 grid grid-cols-2 gap-2">
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
                    <div class="mt-2 grid grid-cols-2 gap-2" v-for="(data,i) in datas.gol_point" v-bind:key="i">
                        <p>Gol Point {{i + 1}}</p>
                        <p>{{data.title}}</p>
                    </div>
                </div>
              </div>
              <div class="md:w-3/6 md:ml-2 h-full md:pb-2 mt-5">
                <h5 class="font-medium text-sm mb-3">Komentar</h5>
                <div v-if="datas.komentar">
                    <div class="block mb-5" v-for="(items, index) in datas.komentar" v-bind:key="index">
                        <div class="flex justify-start" v-if="items.user_name">
                            <vs-avatar circle size="30" class="avatar my-auto">
                                <img v-if="items.user_name.avatar != null" :src="'http://priodwisembodo.online/alangdatabase/public/images/user/' + items.user_name.avatar" alt="avatar">
                                <img v-else src="../assets/avatar.png" alt="">
                            </vs-avatar>
                            <div class="my-auto ml-3">
                                <p class="font-medium">{{items.user_name.fullname}}</p>
                                <p>{{items.created_at | moment('timezone', 'Asia/Jakarta', 'DD MMMM yyyy')}}</p>
                            </div>
                        </div>
                        <div class="mt-2">
                            <p>{{items.komentar}}</p>
                        </div>
                    </div>
                </div>
                <div v-if="datas.komentar == null || datas.komentar.length == 0" class="flex justify-center md:my-7 my-5">
                    <p>Belum ada Komentar. Tambah komentar untuk jadi yang pertama</p>
                </div>
                <div class="md:sticky relative bottom-0 z-10 py-3 bg-koment">
                    <div class="flex justify-start">
                        <vs-avatar circle size="30" class="avatar my-auto">
                            <img v-if="$store.state.users.user.avatar != null" :src="'http://priodwisembodo.online/alangdatabase/public/images/user/' + $store.state.users.user.avatar" alt="avatar">
                            <img v-else src="../assets/avatar.png" alt="">
                        </vs-avatar>
                        <div class="my-auto ml-3">
                            <h5 class="font-medium">{{$store.state.users.user.fullname}}</h5>
                            <p>{{$store.state.users.user.departemen.departemen}}</p>
                        </div>
                    </div>
                    <Form class="md:mt-2 mt-4" ref="formkomen" :model="formkomen" :rules="formvalidator">
                        <FormItem prop="komentar">
                            <Input :maxlength="800" v-model="formkomen.komentar" type="textarea" placeholder="Komentar ku ..."/>
                        </FormItem>
                    </Form>
                    <div class="flex justify-end">
                        <div class="btn-prio py-2 md:w-1/6 w-2/6 px-3" @click="KirimKomentar">Kirim</div>
                    </div>
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
            formkomen: {
                komentar : '',
                user_id: this.$store.state.users.user.id,
                proker_id: null
            },
            formvalidator: {
                komentar: [
                    {
                        required: true,
                        message: "Harap Masukan Komentar Kamu Untuk Proker",
                        trigger: "blur",
                    },
                ],
            }
        }
    },
    computed:{
        datas(){
            return {...this.data}
        },
        komentars(){
            return {...this.data.komen};
        }
    },
    methods: {
        close(){
            this.formkomen.komentar = '';
            return this.$emit('closeable', 1);
        },
        KirimKomentar(){
            this.$refs['formkomen'].validate((valid) => {
                if(valid){
                    this.formkomen.proker_id = this.datas.id;
                    this.$store.dispatch('proker/AddKomentar', this.formkomen);
                    this.formkomen.komentar = '';
                    return this.$Message.success({
                        content: "Berhasil disimpan, Refresh halaman untuk melihat komen terbaru",
                        duration: 6,
                    });
                } else {
                    return false;
                }
            })
        }
    },
}
</script>

<style>

</style>