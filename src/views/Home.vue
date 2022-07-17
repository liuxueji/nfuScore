<template>
  <div class="home">
    <el-row class="top">
      <span>学院：{{xy}}</span>
      <span>专业：{{zy}}</span>
      <span>姓名：{{xm}}</span>
      <span>学号：{{xh}}</span>
    </el-row>
    <hr>
    平均成绩：{{avgcj}}
    平均绩点：{{avgjd}}
    已选学分:{{endxf}}
    已获得学分：{{getxf}}
    <el-table :data="bodyInfoList"
              style="width: 100%">
      <el-table-column prop="yjkcmc"
                       label="课程名称"
                       width="180">
      </el-table-column>
      <el-table-column prop="zpcj"
                       label="综合成绩"
                       width="180">
      </el-table-column>
      <el-table-column prop="qzcj"
                       label="期中成绩">
      </el-table-column>
      <el-table-column prop="pscj"
                       label="平时成绩">
      </el-table-column>
      <el-table-column prop="qmcj"
                       label="期末成绩">
      </el-table-column>
      <el-table-column prop="jdVal"
                       label="绩点">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      xy: "",
      zy: "",
      xm: "",
      xh: "",
      avgcj: "",
      avgjd: "",
      endxf: "",
      getxf: "",
      headerList: "课程名称,综合成绩,期中成绩,平时成绩,期末成绩,绩点", // 注意：逗号是英文的逗号
      bodyInfoList: [
      ]
    }
  },
  mounted () {
    this.axios.post("http://ecampus.nfu.edu.cn:2929/jw-amsi/AmsJxbXsZgcj/listXs?jwloginToken=" + this.$store.state.token + "&id=" + this.$store.state.userid
    ).then((result) => {
      if (result.data.msg != false) {
        console.log(result.data);
        this.xy = result.data.msg.list[0].yxmc;
        this.zy = result.data.msg.list[0].bjmc;
        this.xm = result.data.msg.list[0].xm;
        this.xh = result.data.msg.list[0].xh;

        this.avgcj = result.data.msg.list[0].avg;
        this.avgjd = result.data.msg.list[0].avgJd;
        this.endxf = result.data.msg.list[0].yxxf;
        this.getxf = result.data.msg.list[0].yhdxf;

        this.$store.commit('setsz', { sznj: result.data.msg.list[0].sznj, zyId: result.data.msg.list[0].zyId, yxId: result.data.msg.list[0].yxId, xyId: result.data.msg.list[0].xyId });

      } else {
        console.log(" erorr!");
      }
    }).catch((err) => {
      console.log(err);
    });

    this.axios.post("http://ecampus.nfu.edu.cn:2929/jw-amsi/AmsJxbXsZgcj/r-list?jwloginToken=" + this.$store.state.token + "&pageSize=65536&deleted=false"
    ).then((result) => {
      if (result.data.msg != false) {
        console.log(result.data);
        this.bodyInfoList = result.data.msg.list;
      } else {
        console.log(" erorr!");
      }
    }).catch((err) => {
      console.log(err);
    });
  }
}
</script>
