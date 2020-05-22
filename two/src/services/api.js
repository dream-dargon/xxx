export default {
  //登录接口 post 参数{ username: "admin"， password: "123456" }
  loginAccount: 'http://49.235.147.95:3001/api/user/login',
  //获取供应商列表 get
  supplierList: 'http://49.235.147.95:3001/api/supplier/list',
  //添加供应商 post
  //参数 supplierName,supplierContact,phone,address,status,description
  addSupplier: 'http://49.235.147.95:3001/api/supplier/add',
  //编辑供应商 post
  editSupplier: 'http://49.235.147.95:3001/api/supplier/update',
  //删除供应商 post 参数id
  deleteSupplier: 'http://49.235.147.95:3001/api/supplier/delete',

}