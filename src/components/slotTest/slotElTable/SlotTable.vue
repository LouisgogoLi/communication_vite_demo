<template>
  <div>
    <el-table
      :data="props.propsTableData"
      class="normalElTable"
      :header-cell-style="props.propsHeaderCellStyle"
      :header-cell-class-name="props.propsHeaderCellClassName"
      :row-class-name="props.propsTableRowClassName"
      :default-sort="props.propsDefaultSort"
    >
      <slot name="tableDefault"></slot>
      <template #empty>
        <span>{{ props.propsEmptyValue }}</span>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "SlotTable",
};
</script>

<script setup>
const props = defineProps({
  propsTableData: {
    type: Array,
    default: () => [],
  },
  propsHeaderCellStyle: {
    type: Function,
    default: ({ row, column, rowIndex, columnIndex }) => {
      if (column.order) {
        return { color: "#1e8ece" };
      }
    },
  },
  propsHeaderCellClassName: {
    type: Function,
    default: ({ row, column, rowIndex, columnIndex }) => {
      return "headerCellClass";
    },
  },
  propsTableRowClassName: {
    type: Function,
    default: ({ row, column, rowIndex, columnIndex }) => {
      if (rowIndex % 2 === 0) {
        return "oddrow";
      } else {
        return "evenrow";
      }
    },
  },
  propsDefaultSort: {
    type: Object,
    default: () => {
      return {};
    },
  },
  propsEmptyValue: {
    type: String,
    default: "查無資料",
  },
});
</script>

<style lang="scss" scoped>
.normalElTable {
  width: 100%;
  :deep(th) {
    padding-top: 10px;
    padding-bottom: 10px;
    text-shadow: 0 1px 0 rgb(204 204 204 / 70%);
  }
  :deep(tr) {
    border-spacing: 0;
    border-collapse: collapse;
    border: solid 1px #e6ecef;
    td {
      padding-top: 15px;
      padding-bottom: 15px;
      @media screen and (max-width: 1100px) {
        padding-top: 10px;
        padding-bottom: 10px;
      }
    }
  }
  /* 設置header class */
  :deep(.headerCellClass) {
    background: #e5ebf3;
    color: #566374;
  }
  /* 設置單數行 class */
  :deep(.oddrow) {
    background-color: #f6f6f6;
    &:hover td {
      background-color: transparent !important;
    }
  }
  /* 設置雙數行 class */
  :deep(.evenrow) {
    background-color: #f8fafb;
    &:hover td {
      background-color: transparent !important;
    }
  }
  :deep(.el-table__empty-block) {
    min-height: 50px;
    background: #f6f6f6;
    @media screen and (max-width: 1100px) {
      min-height: 40px;
    }
  }
  :deep(.el-table__empty-text) {
    line-height: 50px;
    color: #d54a3c;
    font-weight: bold;
    font-size: 1.25em;
    @media screen and (max-width: 1100px) {
      line-height: 40px;
    }
  }
}
</style>
