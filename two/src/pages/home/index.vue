<template>
  <div class="pages-home">
    <el-button @click="dialogVisible = true" type="primary">添加供应商</el-button>
    <el-dialog title="添加" :visible.sync="dialogVisible" width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <el-table :data="list" border style="width: 100%">
      <el-table-column prop="supplierName" label="供应商名称" width="180"></el-table-column>
      <el-table-column prop="supplierContact" label="联系人" width="180"></el-table-column>
      <el-table-column prop="phone" label="联系电话"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column prop="description" label="描述信息"></el-table-column>
      <el-table-column label="操作">
        <el-button type="primary">编辑</el-button>
        <el-button type="danger">删除</el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: "Home",
    computed: {
      ...mapState(['list'])
    },

    data() {
      return {
        dialogVisible: false
      };
    },

    created () {
      this.$store.dispatch('SUPPLIER_LIST_ACTION');
    },

    methods: {

    }
  };
</script>
