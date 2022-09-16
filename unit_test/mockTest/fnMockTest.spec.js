const calculateThePrice = (goods, checkDiscount) => {
  let totalPrice = 0;
  goods.forEach((item) => {
    // 先計算原價
    let price = Number(item.price) * Number(item.count);

    // 如果有折扣要半價
    if (checkDiscount(item.name)) {
      price *= 0.5;
    }

    // 將價格加到總合上
    totalPrice += price;
  });
  return totalPrice;
};

describe('Test calculate the price', () => {
  // 創建一個產品物件提供測試
  const shoppingCart = [
    { name: 'milk', price: 39, count: 2 },
    { name: 'apple', price: 25, count: 3 },
  ];

  // 建立 Mock 取代 CheckDiscount
  const mockCheckDiscount = vi.fn();
  // 設定回傳值
  mockCheckDiscount.mockReturnValueOnce(true).mockReturnValue(false);

  test('Test can return expect price', () => {
    // 確認期望是否正確
    expect(calculateThePrice(shoppingCart, mockCheckDiscount)).toBe(114);
  });

  test('Test execute several times of checkDiscount', () => {
    // 確認判斷折扣這件事確實執行了兩次
    expect(mockCheckDiscount.mock.calls.length).toBe(2);
  });

  test('Test mock receive goods name is real', () => {
    // 確認 Mock 接收到正確的產品名稱( calls[第幾次執行][第幾個參數] )
    expect(mockCheckDiscount.mock.calls[0][0]).toBe('milk');
    // 確認 Mock 接收到回傳值
    expect(mockCheckDiscount.mock.results[1].value).toBe(false);
  });
});

it('測試vi.fn()調用', () => {
  const mockFn = vi.fn();
  const result = mockFn(1, 2, 3);

  //斷言mockFn執行後會返回undefined
  expect(result).toBeUndefined();
  //斷言mockFn被調用
  expect(mockFn).toBeCalled();
  //斷言mockFn被調用了一次
  expect(mockFn).toBeCalledTimes(1);
  //斷言mockFn傳入的參數為1,2,3
  expect(mockFn).toHaveBeenCalledWith(1, 2, 3);
});

it('測試vi.fn()調用mockReturnValueOnce,mockReturnValuec回傳值', () => {
  const mockFunction = vi.fn();

  //mockReturnValueOnce指定一次回傳值
  //mockReturnValue指定永久回傳值
  mockFunction.mockReturnValueOnce(true).mockReturnValueOnce(false).mockReturnValue(true);

  expect(mockFunction()).toBe(true);
  expect(mockFunction()).toBe(false);
  expect(mockFunction()).toBe(true);
});
