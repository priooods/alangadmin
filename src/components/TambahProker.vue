<template>
  <div class="add-proker">
      <div class="relative md:ml-6 md-mt-0 py-4" v-show="show == 2">
          <div class="flex cursor-pointer w-16 justify-start" @click="close">
            <i class='bx bx-left-arrow-alt bx-xs my-auto'></i>
            <p class="my-auto ml-2">Kembali</p>
          </div>
          <div class="md:mt-7 mt-6">
              <p>Harap untuk mengisi semua form yang tersedia untuk menambah proker baru</p>
              <div class="md:mt-6 mt-5">
                  <Form ref="formproker" :rules="proker.formValidation" class="flex-col flex md:w-3/6" label-position="top" :model="proker.formproker">
                        <FormItem prop="department" label="Department Proker">
                            <Input type="text" v-model="proker.departemen" :readonly="true" placeholder="Department Proker"></Input>
                        </FormItem>
                        <FormItem prop="judul" class="md:w-4/6" label="Judul Proker">
                            <Input type="text" v-model="proker.formproker.judul" placeholder="Judul Proker"></Input>
                        </FormItem>
                        <FormItem prop="ketua" class="md:w-4/6" label="Ketua Pelaksana Proker">
                            <Input type="text" v-model="proker.formproker.ketua" placeholder="Ketua Pelaksana Proker"></Input>
                        </FormItem>
                        <FormItem prop="desc" label="Deskripsi Proker">
                            <Input v-model="proker.formproker.desc" type="textarea" :autosize="true" placeholder="...."/>
                        </FormItem>
                        <FormItem prop="lokasi" class="md:w-5/6" label="Lokasi Proker">
                            <Input type="text" v-model="proker.formproker.lokasi" placeholder="Lokasi Proker"></Input>
                        </FormItem>
                        <div class="md:flex md:gap-4">
                            <FormItem prop="tgl_mulai" label="Mulai Proker">
                                <DatePicker class="md:w-auto w-full" format="dd-MMMM-yyyy" type="date" placeholder="Mulai Proker" v-model="proker.formproker.tgl_mulai"></DatePicker>
                            </FormItem>
                            <FormItem prop="tgl_selesai" label="Selesai Proker">
                                <DatePicker class="md:w-auto w-full" format="dd-MMMM-yyyy" type="date" placeholder="Selesai Proker" v-model="proker.formproker.tgl_selesai"></DatePicker>
                            </FormItem>
                        </div>
                        <FormItem v-for="(item, index) in gol" 
                            v-bind:key="index"
                            :label="'Gol point ' + (index + 1)"
                            >
                            <Row>
                                <Col span="18">
                                    <Input type="text" v-model="item.title" placeholder="Gol Point Proker..."></Input>
                                </Col>
                                <Col span="4" offset="1">
                                    <Button @click="handleRemove(index)">Hapus</Button>
                                </Col>
                            </Row>
                        </FormItem>
                        <FormItem>
                            <Row>
                                <Col span="8">
                                    <Button type="dashed" long @click="handleAdd" icon="md-add">Tambah Gol Point</Button>
                                </Col>
                            </Row>
                        </FormItem>
                        <Checkbox v-model="check">Data Proker yang dimasukan sudah benar & disetujui</Checkbox>
                  </Form>
                  <div class="btn-prio mt-6 md:w-1/6 py-2" @click="savedProker">
                      Simpan Proker
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import Notifikasi from '../model/Notifikasi';
import Form from '../model/Form.js';
export default {
    mixins: [Form, Notifikasi],
    props:{
        show: Number
    },
    name: 'TambahProker',
    data() {
        return {
            gol: [],
            check: false
        }
    },
    methods: {
        close(){
            return this.$emit('closeform', 1);
        },
        handleRemove (index) {
            return this.gol.splice(index,1);
        },
        handleAdd () {
            return this.gol.push({
                title: '',
            });
        },
        savedProker(){
            if(this.check){
                this.helper_loading("Menyimpan Proker...");
                return this.$refs['formproker'].validate((valid) => {
                    if(valid){
                        this.proker.formproker.gol_point = this.gol;
                        this.$store.dispatch('proker/AddProker', this.proker.formproker);
                        this.helper_request('Proker Baru Berhasil Disimpan');
                        return true;
                    } else {
                        this.loading.close();
                        return false;
                    }
                });
            }
            return false;
        }
    },
}
</script>

<style>

</style>