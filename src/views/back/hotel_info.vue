<template>
  <div class="page-info">
    <el-row :gutter="20">
      <el-col :lg="18">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>酒店简介</span>
          </div>
          <el-row>
            <el-col :lg="15">
              <section class="intro">
                <span class="intro_item">
                  <span class="label">酒店名字</span>
                  <span class="content">{{hotel_info.name}}</span>
                </span>
                <span class="intro_item">
                  <span class="label">酒店等级</span>
                  <span class="content">
                    <el-rate
                      v-model="value"
                      disabled
                      show-score
                      text-color="#ff9900"
                      score-template="{value}"
                    ></el-rate>
                  </span>
                </span>
                <span class="intro_item">
                  <span class="label">酒店标签</span>
                  <span class="content">
                    <template v-for="item in hotel_info.tag">
                      <el-tag :key="item" size="small" closable type="success">{{item}}</el-tag>
                    </template>
                  </span>
                </span>
                <span class="intro_item">
                  <span class="label">酒店地址</span>
                  <span class="content">{{hotel_info.address}}</span>
                </span>
              </section>
            </el-col>
            <el-col :lg="9">
              <section class="img_box">
                <img :src="hotel_info.img" alt>
              </section>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :lg="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>
              酒店信箱
              <span class="infor_badge">{{3}}</span>
            </span>
          </div>
          <span class="intro_item">1</span>
          <span class="intro_item">2</span>
          <span class="intro_item">3</span>
          <span class="intro_item">4</span>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="margin-top:20px;">
      <el-col :lg="18">
        <el-card>
          <el-table
            class="show_table"
            :data="hotel_info.guest"
            style="width: 100%"
            :row-class-name="tableBystatusChangeClassName"
          >
            <el-table-column prop="gsize" label="规格"></el-table-column>
            <el-table-column prop="gdetail" label="简介" width="250"></el-table-column>
            <el-table-column prop="status" label="状态"></el-table-column>
            <el-table-column prop="gorderdet" label="预定时间" width="230"></el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text">查看</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 3,
      hotel_info: {
        name: "话莱顿五星酒店",
        level: 5,
        img:
          "http://img4.imgtn.bdimg.com/it/u=2813996958,1618626128&fm=26&gp=0.jpg",
        tag: ["高端大气", "经济实惠", "快速入住"],
        address: "九江市浔阳区九江职业技术学院1188号4栋142",
        intro:
          "独具风格的杭州华辰国际饭店距离西湖约有10分钟步行路程，提供现代化住宿、2间餐厅、免费停车场和带免费网络连接的客房。 客房拥有充足的自然光线，配有水壶和有线电视。独立浴室配有免费洗浴用品和吹风机",
        guest: [
          {
            gimg: "",
            gdetail: "别于其他普通标准间的两或三张床，大床房只设一张大床',",
            gsize: "标间",
            gorderdet:
              "入住时间：14:00以后。离店时间：12:00以前且只接受一周内的预定",
            status: "可入住"
          },
          {
            gimg: "",
            gdetail: "别于其他普通标准间的两或三张床，大床房只设一张大床',",
            gsize: "标间",
            gorderdet:
              "入住时间：14:00以后。离店时间：12:00以前且只接受一周内的预定",
            status: "可入住"
          },
          {
            gimg: "",
            gdetail: "别于其他普通标准间的两或三张床，大床房只设一张大床',",
            gsize: "标间",
            gorderdet:
              "入住时间：14:00以后。离店时间：12:00以前且只接受一周内的预定",
            status: "可入住"
          },
          {
            gimg: "",
            gdetail: "别于其他普通标准间的两或三张床，大床房只设一张大床',",
            gsize: "标间",
            gorderdet:
              "入住时间：14:00以后。离店时间：12:00以前且只接受一周内的预定",
            status: "可入住"
          }
        ]
      }
    };
  },
  methods: {
    tableBystatusChangeClassName(row, index) {
      console.log(row);
    },
    handleClick() {}
  }
};
</script>

<style lang="scss" scoped>
.page-info {
  padding: 20px;
  .img_box {
    img {
      width: 100%;
      height: 100%;
    }
  }
  .infor_badge {
    min-width: 16px;
    height: 16px;
    background: red;
    text-align: center;
    line-height: 16px;
    display: inline-block;
  }
  .show_table {
    font-size: 13px;
  }
  .intro {
    .intro_item {
      display: flex;
      min-height: 50px;
      * {
        padding: 3px;
        font-size: 13px;
        line-height: 20px;
      }
      .label {
        height: 20px;
        border: 1px solid #ccc;
        background: orange;
      }
      .content {
        padding-left: 20px;
      }
    }
  }
}
</style>
