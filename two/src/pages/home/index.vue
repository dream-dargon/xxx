<template>
  <div class="pages-home">
    <el-button @click="dialogVisible = true" type="primary">添加供应商</el-button>
    <el-dialog :title='count' :visible.sync="dialogVisible" width="50%">
      <span>
        <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="供应商名称" prop="pass">
            <el-input type="text" v-model="ruleForm.supplierName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="联系人" prop="checkPass">
            <el-input type="text" v-model="ruleForm.supplierContact" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="联系电话" prop="phone">
            <el-input type="text" v-model.number="ruleForm.phone"></el-input>
          </el-form-item>
          <el-form-item label="地址" prop="address">
            <el-input type="text" v-model.number="ruleForm.address"></el-input>
          </el-form-item>
          <el-form-item label="状态" prop="status">
            <el-input type="text" v-model.number="ruleForm.status"></el-input>
          </el-form-item>
          <el-form-item label="描述" prop="description">
            <el-input type="text" v-model.number="ruleForm.description"></el-input>
          </el-form-item>
        </el-form>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="resetForm('ruleForm')">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
      </span>
    </el-dialog>
    <table width="100%" border='1' cellSpacing='0' cellPadding="0">
      <thead>
          <tr>
            <th>供应商名称</th>
            <th>联系人</th>
            <th>联系电话</th>
            <th>地址</th>
            <th>描述信息</th>
            <th>操作</th>
          </tr>
      </thead>
      <tbody>
        <tr v-for="(v) in list" :key='v.supplierId'>
          <td>{{v.supplierName}}</td>
          <td>{{v.supplierContact}}</td>
          <td>{{v.phone}}</td>
          <td>{{v.address}}</td>
          <td>{{v.description}}</td>
          <td>
            <el-button type="primary" @click="editFn(v.supplierId)">编辑</el-button>
            <el-button type="danger" @click="deleteFn(v.supplierId)">删除</el-button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import './style.less'
  export default {
    name: "Home",
    computed: {
      ...mapState(['list'])
    },

    data() {
      return {
        dialogVisible: false,
        count: '添加',
        ruleForm: {
          supplierName: '',
          supplierContact: '',
          phone: '',
          address: '',
          status: '',
          description: ''
        },
      };
    },

    created () {
      this.$store.dispatch('SUPPLIER_LIST_ACTION');
    },

    methods: {
      submitForm(formName) {
        this.dialogVisible = false;
        console.log(this.ruleForm)
        this['ADD_SUPPLIER_DATA'](this.ruleForm);
        this.$refs[formName].validate((valid) => {
          if (!valid) {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.dialogVisible = false
        this.$refs[formName].resetFields();
      },
      editFn (val) {
        this.dialogVisible = true;
        this.count = '编辑';
        console.log(val)
      },
      deleteFn (val) {
        let obj = {};
        obj.id = val;
        this['DELETE_SUPPLIER_DATA'](obj);
      },
      ...mapMutations(['ADD_SUPPLIER_DATA','DELETE_SUPPLIER_DATA'])
    }
  };
</script>
