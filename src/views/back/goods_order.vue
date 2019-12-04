<template>
  <div class="page-goods-admin">
    <template>
      <el-tabs v-model="activeName" @tab-click="handleClick" type="card">
        <el-tab-pane label="所有订单" name="all_order">
          <el-table :data="alrealy_pay" border style="width: 100%">
            <el-table-column prop="order_num" label="订单号"></el-table-column>
            <el-table-column prop="order_date" label="日期" width="180"></el-table-column>
            <el-table-column prop="user_name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="guestId" label="房间号"></el-table-column>
            <el-table-column prop="price" label="价格"></el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane v-model="activeName" label="待支付" name="wait_pay_order">
          <el-table :data="wait_m_pay" border style="width: 100%">
            <el-table-column prop="order_num" label="订单号"></el-table-column>
            <el-table-column prop="order_date" label="日期" width="180"></el-table-column>
            <el-table-column prop="user_name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="guestId" label="房间号"></el-table-column>
            <el-table-column prop="price" label="价格"></el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane v-model="activeName" label="售后处理" name="buy_ofter_order">
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="order_num" label="订单号"></el-table-column>
            <el-table-column prop="order_date" label="日期" width="180"></el-table-column>
            <el-table-column prop="user_name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="guestId" label="房间号"></el-table-column>
            <el-table-column prop="price" label="价格"></el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "all_order",
      alrealy_pay: [
        {
          order_num: 20191204308111,
          order_date: "2016-05-02",
          user_name: "王小权",
          guestId: 308,
          price: 198
        },
        {
          order_num: 20191204309111,
          order_date: "2016-05-02",
          user_name: "王荣",
          guestId: 308,
          price: 198
        },
        {
          order_num: 20191204310111,
          order_date: "2016-05-02",
          user_name: "黎辉",
          guestId: 308,
          price: 198
        },
        {
          order_num: 20191204311111,
          order_date: "2016-05-02",
          user_name: "周志强",
          guestId: 308,
          price: 198
        },
        {
          order_num: 20191204312111,
          order_date: "2016-05-02",
          user_name: "黄河",
          guestId: 308,
          price: 198
        },
        {
          order_date: "2016-05-02",
          order_num: 201912043013111,
          user_name: "王小磊",
          guestId: 308,
          price: 198
        }
      ],
      wait_m_pay: [{}]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>




<style>
.page-goods-admin {
  padding: 10px;
}
</style>
