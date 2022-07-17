<template>
  <div class="xxcj">
    <el-table :data="bodyInfoList"
              style="width: 100%">
      <el-table-column type="index"
                       label="排序"
                       width="180">
      </el-table-column>
      <el-table-column prop="bjmc"
                       label="班级"
                       width="180">
      </el-table-column>
      <el-table-column prop="xm"
                       label="姓名">
      </el-table-column>
      <el-table-column prop="pjcj"
                       label="平均成绩">
      </el-table-column>
      <el-table-column prop="pjxfjd"
                       label="平均绩点">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Xxcj',
  data () {
    return {
      headerList: "排序,班级,姓名,平均成绩,平均绩点", // 注意：逗号是英文的逗号
      bodyInfoList: []
    }
  },
  mounted () {
    this.axios.post("http://ecampus.nfu.edu.cn:2929/jw-amsi/AmsJxbXsZgcj/listXsjd?jwloginToken=" + this.$store.state.token + "&pageSize=65536&sznj=" + this.$store.state.sznj + "&xyId=" + this.$store.state.xyId + "&pg=1&"
    ).then((result) => {
      if (result.data.msg != false) {
        console.log(result.data);
        let dd = result.data.msg.list;
        this.bodyInfoList = dd.reverse()

      } else {
        console.log(" erorr!");
      }
    }).catch((err) => {
      console.log(err);
    });
  }
}
</script>

