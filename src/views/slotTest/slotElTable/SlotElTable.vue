<template>
  <div class="slotpageclass">
    <SlotTable
      class="slotElTable1"
      :propsTableData="tableData1"
      :propsDefaultSort="oDefaultSort1"
      v-loading="isLoading"
      element-loading-text="測試loading"
      element-loading-background="rgba(0, 0, 0, 0.3)"
      :element-loading-svg="svg"
      element-loading-svg-view-box="-10, -10, 50, 50"
    >
      <template #tableDefault>
        <el-table-column
          prop="simpleShow"
          label=""
          align="center"
          min-width="5%"
        >
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
          :formatter="fnNumberFormatter"
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
      </template>
    </SlotTable>
    <SlotTable class="slotElTable2" :propsTableData="tableData2">
      <template #tableDefault>
        <el-table-column prop="salaryItemName" label="薪資項目名稱">
        </el-table-column>
        <el-table-column prop="sentMoney" label="應發金額"> </el-table-column>
        <el-table-column prop="deductMoney" label="應扣金額"> </el-table-column>
        <el-table-column prop="note" label="備註"> </el-table-column>
      </template>
    </SlotTable>
    <SlotTable
      class="slotElTable3"
      :propsTableData="tableData3"
      :propsEmptyValue="sEmptyValue3"
    >
      <template #tableDefault>
        <el-table-column prop="note" label="備註"> </el-table-column>
      </template>
    </SlotTable>
    <SlotTable class="slotElTable4" :propsTableData="tableData4">
      <template #tableDefault>
        <el-table-column prop="salaryItemName" label="薪資項目名稱">
        </el-table-column>
        <el-table-column prop="sentMoney" label="應發金額"> </el-table-column>
        <el-table-column prop="deductMoney" label="應扣金額"> </el-table-column>
        <el-table-column prop="note" label="備註"> </el-table-column>
      </template>
    </SlotTable>
    <button @click="testPrint">列印pdf</button>
  </div>
</template>

<script setup>
import SlotTable from "@/components/slotTest/slotElTable/SlotTable.vue";

import { ref, reactive } from "vue";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const tableData1 = [
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
    accountBalance: "1784",
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
    accountBalance: "2672",
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
    accountBalance: "3560",
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
    accountBalance: "4448",
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

const oDefaultSort1 = reactive({ prop: "accountDate", order: "ascending" });

const svg = ref(`
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `);

const isLoading = ref(true);
setTimeout(() => {
  isLoading.value = false;
}, 2000);

// eslint-disable-next-line no-unused-vars
const fnNumberFormatter = (row, column, cellValue, index) => {
  const sNum = cellValue + "";
  const aNumArr = sNum.split("").reverse();
  const aOverArr = [];
  let i = 0;
  aNumArr.forEach((item) => {
    i++;
    if (i > 3) {
      i = 1;
      aOverArr.push(",");
    }
    aOverArr.push(item);
  });
  aOverArr.reverse();
  return aOverArr.join("");
};

const tableData2 = [
  {
    salaryItemName: "本薪",
    sentMoney: "87,000",
    deductMoney: "-",
    note: "我是備註文字1",
  },
  {
    salaryItemName: "健保費",
    sentMoney: "-",
    deductMoney: "3,500",
    note: "我是備註文字2",
  },
  {
    salaryItemName: "勞保費",
    sentMoney: "-",
    deductMoney: "3,600",
    note: "我是備註文字3",
  },
  {
    salaryItemName: "總計",
    sentMoney: "80,000",
    deductMoney: "-",
    note: "我是備註文字4",
  },
];

const tableData3 = [];
const sEmptyValue3 = ref("沒有備註資料");

const tableData4 = [
  {
    salaryItemName: "本薪",
    sentMoney: "87,000",
    deductMoney: "-",
    note: "我是備註文字1",
  },
  {
    salaryItemName: "健保費",
    sentMoney: "-",
    deductMoney: "3,500",
    note: "我是備註文字2",
  },
  {
    salaryItemName: "勞保費",
    sentMoney: "-",
    deductMoney: "3,600",
    note: "我是備註文字3",
  },
  {
    salaryItemName: "總計",
    sentMoney: "80,000",
    deductMoney: "-",
    note: "我是備註文字4",
  },
];

const testPrint = () => {
  html2canvas(document.querySelector("body")).then((canvas) => {
    document.body.appendChild(canvas);
    console.log(canvas.toDataURL("image/png"));

    let pdf = new jsPDF("p", "mm", "a4"); //A4紙，縱向

    let ctx = canvas.getContext("2d"),
      a4w = 190,
      a4h = 257, //A4大小，210mm x 297mm，左右保留10mm，上下保留20mm的邊距，顯示區域190x257
      imgHeight = Math.floor((a4h * canvas.width) / a4w), //按A4顯示比例換算一頁圖像的像素高度
      renderedHeight = 0;

    while (renderedHeight < canvas.height) {
      let page = document.createElement("canvas");
      page.width = canvas.width;
      page.height = Math.min(imgHeight, canvas.height - renderedHeight); //可能內容不足一頁

      //用getImageData剪裁指定區域，畫面到前面創建的canvas對象中
      page
        .getContext("2d")
        .putImageData(
          ctx.getImageData(
            0,
            renderedHeight,
            canvas.width,
            Math.min(imgHeight, canvas.height - renderedHeight)
          ),
          0,
          0
        );

      //添加圖像到頁面，保留10mm/20mm邊距
      pdf.addImage(
        page.toDataURL("image/jpeg", 1.0),
        "JPEG",
        10,
        20,
        a4w,
        Math.min(a4h, (a4w * page.height) / page.width)
      );

      //添加頁腳，位置和內容自己決定
      pdf.text("https://www.google.com/", 140, 288);

      renderedHeight += imgHeight;
      if (renderedHeight < canvas.height) {
        pdf.addPage();
      } //如果後面還有內容，添加一個空頁
    }
    pdf.save("content.pdf");
  });
};
</script>

<style lang="scss" scoped>
.slotpageclass {
  margin: 30px;
}
.slotElTable1 {
  :deep(.normalElTable) {
    margin-bottom: 10px;
    .transferType {
      display: inline-block;
      width: 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      color: #fff;
      background: #06c5c5;
      border-radius: 15px;
    }
  }
}
.slotElTable2 {
  margin-bottom: 30px;
  :deep(.normalElTable) {
    /* 設置單數行 class */
    .oddrow {
      background-color: #fff;
    }
    /* 設置雙數行 class */
    .evenrow {
      background-color: #f6f6f6;
    }
  }
}
.slotElTable3 {
  margin-bottom: 30px;
}
.slotElTable4 {
  margin-bottom: 60px;
  :deep(.normalElTable) {
    .headerCellClass {
      background: #cffcc9;
      color: #4808f8;
    }
    /* 設置單數行 class */
    .oddrow {
      background-color: rgb(223, 247, 7);
      color: rgb(17, 5, 5);
    }
    /* 設置雙數行 class */
    .evenrow {
      background-color: #be022b;
      color: #fff;
    }
  }
}
</style>
