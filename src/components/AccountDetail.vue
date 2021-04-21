<template>
  <div class="accountdetail">
      <Form :model="formdetail" label-position="top" class="md:grid md:grid-rows-3 md:grid-cols-2 md:gap-2">
        <FormItem label="Department">
          <Select :disabled="disable" v-model="formdetail.departemen">
            <Option v-for="item in department" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </FormItem>
        <FormItem label="Alamat">
            <Input :disabled="disable" v-model="formdetail.alamat" placeholder="alamat tinggal kamu..."></Input>
        </FormItem>
        <FormItem label="Motto">
            <Input :disabled="disable" v-model="formdetail.motto" placeholder="Motto kamu..."></Input>
        </FormItem>
        <FormItem label="Pendidikan">
            <Input :disabled="disable" v-model="formdetail.pendidikan" placeholder="pendidikan kamu..."></Input>
        </FormItem>
        <FormItem label="Pekerjaan">
            <Input :disabled="disable" v-model="formdetail.pekerjaan" placeholder="pekerjaan kamu..."></Input>
        </FormItem>
        <FormItem label="Instagram">
            <Input :disabled="disable" v-model="formdetail.sosmed" placeholder="ex: @instagramku."></Input>
        </FormItem>
      </Form>
      <div class="btn-prio md:w-2/6 px-4 py-1 mt-4" v-show="showedit == false" @click="enables">Enable Editing</div>
      <div class="md:flex grid grid-rows-1 grid-cols-2 gap-2" v-show="showedit">
        <div class="btn-prio px-4 py-1 mt-4">Send Update</div>
        <div class="btn-prio px-4 py-1 mt-4" @click="closeedit">Cancel</div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        formdetail: null,
        disable: Boolean
    },
    data() {
    return {
      showedit: false,
      department: [
        { value: 'Chief Exceutive Organizational', label: 'Chief Exceutive Organizational' },
        { value: 'Chief Financial Officer', label: 'Chief Financial Officer' },
        { value: 'Chief Operating Organizational', label: 'Chief Operating Organizational' },
        { value: 'Human and Organizational Resource Development', label: 'Human and Organizational Resource Development' },
        { value: 'Learning and Curriculum Development', label: 'Learning and Curriculum Development' },
        { value: 'Media and Design Management', label: 'Media and Design Management' },
      ]
    }
  },
  methods: {
      enables(){
        this.showedit = true;
        return this.$emit('enableedit', false);
      },
      closeedit(){
        this.showedit = false;
        return this.$emit('disableedit', true);
      }
    },
}
</script>

<style>

</style>