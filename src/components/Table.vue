<template lang="html">
  <div class="z-table-wraper">
    <table class="z-table">
      <caption v-if="title">{{title}}</caption>
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
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    ths: {
      type: Array,
      required: true
    },
    trs: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="css" scoped>
.z-table-wraper {
  max-width: 100%;
  overflow-x: auto;
}

.z-table {
  max-width: 100%;
  border: 1px solid #ddd;
  border-collapse: collapse;
}

.z-table>caption {
  padding-top: 8px;
  padding-bottom: 8px;
  color: #777;
  text-align: left;
}

.z-table>thead>tr>th,
.z-table>tbody>tr>td,
.z-table>tfoot>tr>td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.z-table>thead>tr>th {
  border-bottom-width: 2px;
}
</style>
