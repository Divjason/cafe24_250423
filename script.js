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
