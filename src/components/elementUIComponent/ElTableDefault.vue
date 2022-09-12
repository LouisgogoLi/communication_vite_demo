<template>
  <div style="margin-bottom: 30px">
    <el-table
      :data="tableData"
      class="normalElTable"
      style="width: 100%"
      :header-cell-style="headerCellStyle"
      :header-cell-class-name="headerCellClassName"
      :row-class-name="tableRowClassName"
      :default-sort="{ prop: 'accountDate', order: 'ascending' }"
    >
      <el-table-column prop="simpleShow" label="" align="center" min-width="5%">
        <template #default="data">
          <div v-html="data.row.simpleShow"></div>
        </template>
      </el-table-column>
      <el-table-column type="index" label="序號" min-width="5%" width="60px">
      </el-table-column>
      <el-table-column
        sortable
        prop="accountDate"
        label="帳務日期"
        head-align="center"
        align="left"
        min-width="8%"
      >
      </el-table-column>
      <el-table-column
        sortable
        prop="transactionDate"
        label="交易日期"
        head-align="center"
        align="left"
        min-width="8%"
      >
      </el-table-column>
      <el-table-column
        prop="transactionTime"
        label="交易時間"
        align="center"
        min-width="7%"
      >
      </el-table-column>
      <el-table-column
        prop="transactionDirections"
        label="交易說明"
        align="center"
        min-width="7%"
      >
      </el-table-column>
      <el-table-column
        prop="payoutAmount"
        label="支出金額"
        align="right"
        min-width="7%"
      >
      </el-table-column>
      <el-table-column
        prop="deposits"
        label="存入金額"
        align="right"
        min-width="7%"
      >
      </el-table-column>
      <el-table-column
        prop="accountBalance"
        label="帳面餘額"
        align="right"
        min-width="7%"
      >
      </el-table-column>
      <el-table-column
        prop="ticketNumber"
        label="票據號碼"
        align="center"
        min-width="7%"
      >
      </el-table-column>
      <el-table-column prop="note" label="備註" min-width="17%">
      </el-table-column>

      <template #empty>
        <span>查無資料</span>
      </template>
    </el-table>
  </div>
</template>

<script setup>
const tableData = [
  {
    simpleShow: "<span class='transferType'>入</span>",
    accountDate: "2022/02/07",
    transactionDate: "2022/01/30",
    transactionTime: "11:32:00",
    transactionDirections: "ＡＴＭ轉",
    payoutAmount: "",
    deposits: "8",
    accountBalance: "8",
    ticketNumber: "",
    note: "0022012648498651 941門轉綁定紅包",
  },
  {
    simpleShow: "<span class='transferType'>入</span>",
    accountDate: "2022/02/07",
    transactionDate: "2022/01/31",
    transactionTime: "01:31:53",
    transactionDirections: "ＡＴＭ轉",
    payoutAmount: "",
    deposits: "888",
    accountBalance: "896",
    ticketNumber: "",
    note: "8004000028000721 004",
  },
  {
    simpleShow: "<span class='transferType'>入</span>",
    accountDate: "2022/02/07",
    transactionDate: "2022/01/31",
    transactionTime: "01:32:59",
    transactionDirections: "ＡＴＭ轉",
    payoutAmount: "",
    deposits: "888",
    accountBalance: "	1,784",
    ticketNumber: "",
    note: "8004000028000721 004",
  },
  {
    simpleShow: "<span class='transferType'>入</span>",
    accountDate: "2022/02/07",
    transactionDate: "2022/01/31",
    transactionTime: "01:33:50",
    transactionDirections: "ＡＴＭ轉",
    payoutAmount: "",
    deposits: "888",
    accountBalance: "2,672",
    ticketNumber: "",
    note: "8004000028000721 004",
  },
  {
    simpleShow: "<span class='transferType'>入</span>",
    accountDate: "2022/02/07",
    transactionDate: "2022/01/31",
    transactionTime: "01:34:35",
    transactionDirections: "ＡＴＭ轉",
    payoutAmount: "",
    deposits: "888",
    accountBalance: "3,560",
    ticketNumber: "",
    note: "8004000028000721 004",
  },
  {
    simpleShow: "<span class='transferType'>入</span>",
    accountDate: "2022/02/07",
    transactionDate: "2022/01/31",
    transactionTime: "01:35:27",
    transactionDirections: "ＡＴＭ轉",
    payoutAmount: "",
    deposits: "888",
    accountBalance: "4,448",
    ticketNumber: "",
    note: "8004000028000721 004",
  },
  {
    simpleShow:
      "<span class='transferType' style='background: #cc3e03;'>出</span>",
    accountDate: "2022/02/07",
    transactionDate: "2022/01/31",
    transactionTime: "01:37:43",
    transactionDirections: "電支轉帳",
    payoutAmount: "4,448",
    deposits: "",
    accountBalance: "",
    ticketNumber: "",
    note: "0020992000988559 icash Pay",
  },
];

//row為某一行的除操作外的全部數據
//column為某一列的屬性
//rowIndex為某一行(從0開始數起)
//columnIndex為某一列(從0開始數起)
// eslint-disable-next-line no-unused-vars
const headerCellStyle = ({ row, column, rowIndex, columnIndex }) => {
  if (column.order) {
    return { color: "#1e8ece" };
  }
};

// eslint-disable-next-line no-unused-vars
const headerCellClassName = ({ row, column, rowIndex, columnIndex }) => {
  return "headerCellClass";
};

// eslint-disable-next-line no-unused-vars
const tableRowClassName = ({ row, column, rowIndex, columnIndex }) => {
  if (rowIndex % 2 === 0) {
    return "oddrow";
  } else {
    return "evenrow";
  }
};
</script>

<style lang="scss" scoped>
.normalElTable :deep(.transferType) {
  display: inline-block;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: #fff;
  background: #06c5c5;
  border-radius: 15px;
}
.normalElTable :deep(th) {
  padding-top: 10px;
  padding-bottom: 10px;
  text-shadow: 0 1px 0 rgb(204 204 204 / 70%);
}
.normalElTable :deep(th > div) {
  padding-left: 10px;
  padding-right: 10px;
  text-shadow: 0 1px 0 rgb(204 204 204 / 70%);
}
.normalElTable :deep(tr) {
  border-spacing: 0;
  border-collapse: collapse;
  border: solid 1px #e6ecef;
}
.normalElTable :deep(td) {
  padding-top: 15px;
  padding-bottom: 15px;
  @media screen and (max-width: 1100px) {
    padding-top: 10px;
    padding-bottom: 10px;
  }
}
//設置header class
.normalElTable :deep(.headerCellClass) {
  background: #e5ebf3;
  color: #566374;
}
/* 設置單數行 class */
.normalElTable :deep(.oddrow) {
  background-color: #f6f6f6;
}
/* 設置雙數行 class */
.normalElTable :deep(.evenrow) {
  background-color: #f8fafb;
}
</style>
