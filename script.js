// ✅ 검색 이벤트
function handleSearch() {
  const input = document.getElementById("searchInput").value.trim();

  if (input !== "") {
    // ✅ GA4 이벤트 전송
    gtag("event", "search_button_clicked", {
      event_category: "engagement",
      event_label: input,
      search_term: input,
    });

    alert(`검색어 [${input}]에 대한 검색을 실행했습니다.`);
  } else {
    alert("검색어를 입력해주세요.");
  }
}

// ✅ 상품 보기 (view_item)
function viewItem() {
  gtag("event", "view_item", {
    currency: "KRW",
    value: 129000,
    items: [
      {
        item_id: "EP1001",
        item_name: "무선 이어폰",
        currency: "KRW",
        price: 129000,
        quantity: 1,
      },
    ],
  });
  alert("view_item 이벤트 발생!");
}

// ✅ 장바구니 담기 (add_to_cart)
function addToCart() {
  gtag("event", "add_to_cart", {
    currency: "KRW",
    value: 129000,
    items: [
      {
        item_id: "EP1001",
        item_name: "무선 이어폰",
        currency: "KRW",
        price: 129000,
        quantity: 1,
      },
    ],
  });
  alert("add_to_cart 이벤트 발생!");
}

// ✅ 구매 완료 (purchase)
function purchase() {
  gtag("event", "purchase", {
    transaction_id: "T12345",
    affiliation: "온라인몰",
    currency: "KRW",
    value: 129000,
    tax: 10000,
    shipping: 3000,
    items: [
      {
        item_id: "EP1001",
        item_name: "무선 이어폰",
        currency: "KRW",
        price: 129000,
        quantity: 1,
      },
    ],
  });
  alert("purchase 이벤트 발생!");
}
