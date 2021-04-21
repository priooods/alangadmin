<template>
  <div class="account">
      <Form :model="formItem" label-position="top" class="md:grid md:grid-rows-2 md:grid-cols-2 md:gap-2">
        <FormItem label="Username">
            <Input :disabled="disable" v-model="formItem.username" placeholder="username kamu..."></Input>
        </FormItem>
        <FormItem label="Password">
            <Input :disabled="disable" type="password" v-model="formItem.password" placeholder="password kamu..."></Input>
        </FormItem>
        <FormItem label="Fullname">
            <Input :disabled="disable" v-model="formItem.fullname" placeholder="Fullname kamu..."></Input>
        </FormItem>
        <FormItem label="gender">
          <Select :disabled="disable" v-model="formItem.gender">
            <Option v-for="item in gender" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
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
  name: "AccountInfo",
  props:{
    formItem: null,
    disable: Boolean
  },
  data() {
    return {
      showedit: false,
      gender: [
        {
            value: 'Pria',
            label: 'Pria'
        },
        {
            value: 'Wanita',
            label: 'Wanita'
        },
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