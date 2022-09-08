<template>
  <div style="padding-bottom: 30px">
    <button @click="fnReset()">重置</button>
    <button @click="fnEmpty()">清空所有值</button>
  </div>
  <div
    v-for="(addressItem, index) in oTwAddress.addressList"
    :key="addressItem.id"
    data-test="addressList"
  >
    <div class="flex-container">
      <input
        type="text"
        v-model="addressItem.sZip"
        style="width: 40px"
        disabled
      />
      <select
        v-model="addressItem.sCity"
        @change="fnCityChange($event, index)"
        @blur="handleBlur($event, index, 'city', 'sCity', 'sErrorCityMessage')"
        data-test="address_city"
      >
        <option disabled value="">請選擇縣市</option>
        <option
          v-for="cityItem in addressItem.aCity"
          :key="cityItem.name"
          :value="cityItem.name"
        >
          {{ cityItem.name }}
        </option>
      </select>
      <select
        v-model="addressItem.sArea"
        @change="fnAreaChange($event, index)"
        @blur="handleBlur($event, index, 'area', 'sArea', 'sErrorAreaMessage')"
        data-test="address_area"
      >
        <option disabled value="">請選擇區域</option>
        <option
          v-for="AreaItem in addressItem.aArea"
          :key="AreaItem.zip"
          :value="AreaItem.name"
        >
          {{ AreaItem.name }}
        </option>
      </select>
      <input
        type="text"
        v-model="addressItem.sAddress"
        @blur="
          handleBlur(
            $event,
            index,
            'address',
            'sAddress',
            'sErrorAddressMessage'
          )
        "
        data-test="address_detail"
      />
      <img
        src="@/assets/images/plus.png"
        alt="增加"
        width="25"
        height="25"
        @click="addAddress()"
        data-test="address_add"
      />
      <img
        src="@/assets/images/minus.png"
        alt="刪除"
        style="width: 25px; height: 25px"
        @click="deleteAddress(index)"
        v-if="oTwAddress.addressList.length === 1 ? false : true"
        data-test="address_delete"
      />
      <div
        style="width: 25px; height: 25px"
        v-if="oTwAddress.addressList.length === 1 ? true : false"
      ></div>
    </div>
    <div :ref="(el) => setItemRef(el, index)">
      <span
        v-if="addressItem.sErrorCityMessage"
        class="warn-span"
        data-test="address_errorCity"
        >{{ addressItem.sErrorCityMessage }}</span
      >
      <span
        v-if="addressItem.sErrorAreaMessage"
        class="warn-span"
        data-test="address_errorArea"
        >{{ addressItem.sErrorAreaMessage }}</span
      >
      <span
        v-if="addressItem.sErrorAddressMessage"
        class="warn-span"
        data-test="address_errorAddress"
        >{{ addressItem.sErrorAddressMessage }}</span
      >
    </div>
  </div>
  <div style="padding-top: 30px">
    <button @click="fnLocalStorageSubmit()">localStorage暫存</button>
    <button @click="fnLocalStorageClear()">localStorage暫存清空</button>
    <button @click="fnSubmit()" data-test="address_summit">表單送出</button>
  </div>
</template>

<script>
export default {
  name: "AddressForCrud",
};
</script>

<script setup>
import cityList from "@/api/json/publicJson/cityList.json";
import { reactive, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

let sTime = Date.now().toString();

//初始宣告地址陣列
const oTwAddress = reactive({
  addressList: [
    {
      id: sTime,
      aCity: cityList.twzip.city,
      aArea: [],
      sCity: "",
      sArea: "",
      sZip: "",
      sAddress: "",
      sErrorCityMessage: "",
      sErrorAreaMessage: "",
      sErrorAddressMessage: "",
      warnRef: null,
    },
  ],
});

//選擇縣市
const fnCityChange = (event, index) => {
  const areaFilter = oTwAddress.addressList[index].aCity.filter(
    (list) => list.name === event.target.value
  );
  oTwAddress.addressList[index].sArea = "";
  oTwAddress.addressList[index].sAddress = "";
  oTwAddress.addressList[index].sErrorCityMessage = "";
  oTwAddress.addressList[index].sErrorAreaMessage = "";
  oTwAddress.addressList[index].sErrorAddressMessage = "";
  oTwAddress.addressList[index].aArea = areaFilter[0].area;
};

//選擇區域
const fnAreaChange = (event, index) => {
  oTwAddress.addressList[index].aArea.forEach((item) => {
    if (item.name === event.target.value) {
      oTwAddress.addressList[index].sZip = item.zip;
    }
  });
  oTwAddress.addressList[index].sAddress = "";
  oTwAddress.addressList[index].sErrorAreaMessage = "";
  oTwAddress.addressList[index].sErrorAddressMessage = "";
};

//新增地址
const addAddress = () => {
  sTime = Date.now().toString();
  oTwAddress.addressList.push({
    id: sTime,
    aCity: cityList.twzip.city,
    aArea: [],
    sCity: "",
    sArea: "",
    sZip: "",
    sAddress: "",
    sErrorCityMessage: "",
    sErrorAreaMessage: "",
    sErrorAddressMessage: "",
    warnRef: null,
  });
};

//刪除地址
const deleteAddress = (index) => {
  oTwAddress.addressList.splice(index, 1);
};

//重置
const fnReset = () => {
  sTime = Date.now().toString();
  oTwAddress.addressList = [
    {
      id: sTime,
      aCity: cityList.twzip.city,
      aArea: [],
      sCity: "",
      sArea: "",
      sZip: "",
      sAddress: "",
      sErrorCityMessage: "",
      sErrorAreaMessage: "",
      sErrorAddressMessage: "",
      warnRef: null,
    },
  ];
};

//清空所有值
const fnEmpty = () => {
  oTwAddress.addressList.forEach((item) => {
    item.aArea = [];
    item.sCity = "";
    item.sArea = "";
    item.sZip = "";
    item.sAddress = "";
    item.sErrorCityMessage = "";
    item.sErrorAreaMessage = "";
    item.sErrorAddressMessage = "";
  });
};

//全部驗證
const fnValidator = () => {
  let oRule = {
    city: "",
    area: "",
    address: "",
  };

  let bErrorHappen = false;
  for (let element of oTwAddress.addressList) {
    oRule.city = element.sCity;
    oRule.area = element.sArea;
    oRule.address = element.sAddress;
    validator.validate(oRule, (errors, fields) => {
      if (errors && fields.city) {
        element.sErrorCityMessage = fields.city[0].message;
        bErrorHappen = true;
      }
      if (errors && fields.area) {
        element.sErrorAreaMessage = fields.area[0].message;
        bErrorHappen = true;
      }
      if (errors && fields.address) {
        element.sErrorAddressMessage = fields.address[0].message;
        bErrorHappen = true;
      }
    });
  }

  return bErrorHappen;
};

//個別驗證
import Schema from "async-validator";
const rules = {
  city: [{ required: true, message: "請選擇縣市" }],
  area: [{ required: true, message: "請選擇區域" }],
  address: [
    { required: true, message: "請輸入詳細地址" },
    { required: true, min: 5, message: "地址字數為5以上" },
  ],
};
const validator = new Schema(rules);
const handleBlur = (event, index, rule, value, errorValue) => {
  let oRule = {};
  oRule[rule] = oTwAddress.addressList[index][value];
  validator.validate(oRule, (errors, fields) => {
    if (errors && fields[rule]) {
      oTwAddress.addressList[index][errorValue] = fields[rule][0].message;
    } else {
      oTwAddress.addressList[index][errorValue] = "";
    }
  });
};

//迴圈丟入陣列塞入ref
const setItemRef = (el, index) => {
  if (el) {
    oTwAddress.addressList[index].warnRef = el;
  }
};

//localStorage暫存
const fnLocalStorageSubmit = () => {
  localStorage.setItem("twAddressKey", JSON.stringify(oTwAddress.addressList));
};

//localStorage暫存清空
const fnLocalStorageClear = () => {
  localStorage.clear();
};

//表單送出
const fnSubmit = async () => {
  const bValidator = await !fnValidator();
  if (bValidator) {
    let addressUrl = router.resolve({
      name: "address_list",
      query: { showUI: false },
    });
    let addressListUrl = window.open(addressUrl.href);
    addressListUrl.addEventListener("load", () => {
      addressListUrl.postMessage(
        {
          acrossPages: true,
          showHeaderFooter: false,
          addressList: JSON.parse(JSON.stringify(oTwAddress.addressList)),
        },
        "*"
      );
    });
  }
};

onMounted(() => {
  if (localStorage.getItem("twAddressKey")) {
    oTwAddress.addressList.length = 0;
    JSON.parse(localStorage.getItem("twAddressKey")).forEach((item) => {
      oTwAddress.addressList.push(item);
    });
  }
});
</script>

<style scoped>
.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
}
.warn-span {
  padding-left: 5px;
  padding-right: 5px;
  color: red;
}
</style>
