<template lang="html">
  <table class="z-table">
    <thead>
      <tr>
        <th v-for="th in ths">{{th}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="tr in trs">
        <td v-for="td in tr">{{td}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: {
    ths: {
      type: Array,
      required: true
    },
    trs: {
      type: Array,
      required: true
    }
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {}
};
</script>

<style lang="css">
.z-table {
  max-width: 100%;
  border: 1px solid #ddd;
  border-collapse: collapse;
}

.z-table>thead>tr>th,
.z-table>tbody>tr>td,
.z-table>tfoot>tr>td {
  border: 1px solid #ddd;
  padding: 8px;
}

.z-table>thead>tr>th {
  border-bottom-width: 2px;
}
</style>
