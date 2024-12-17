document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".collection-nav-item");
  const containers = document.querySelectorAll(".collection-container");

  // Thêm sự kiện click cho từng danh mục
  navItems.forEach(item => {
    item.addEventListener("click", () => {
      // Xóa class active khỏi tất cả nav items
      navItems.forEach(nav => nav.classList.remove("active"));
      item.classList.add("active");

      // Lấy giá trị data-target từ nav item
      const targetCategory = item.getAttribute("data-target");

      // Hiển thị cụm dữ liệu tương ứng
      containers.forEach(container => {
        if (container.getAttribute("data-category") === targetCategory) {
          container.classList.remove("d-none");
        } else {
          container.classList.add("d-none");
        }
      });
    });
  });
});
