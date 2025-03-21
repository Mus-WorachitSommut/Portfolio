// เลือกปุ่ม
const scrollTopBtn = document.getElementById("scrollTopBtn");

// แสดง/ซ่อนปุ่มเมื่อเลื่อนหน้า
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

// เลื่อนไปด้านบนเมื่อคลิกปุ่ม
scrollTopBtn.addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
});