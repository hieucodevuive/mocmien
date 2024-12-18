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

// Costom slider cho sư kiện
function prevSlide() {
  const carousel = document.querySelector('#carouselExampleIndicators'); // ID của carousel
  const carouselInstance = bootstrap.Carousel.getInstance(carousel);
  carouselInstance.prev(); // Di chuyển về slide trước
}

function nextSlide() {
  const carousel = document.querySelector('#carouselExampleIndicators');
  const carouselInstance = bootstrap.Carousel.getInstance(carousel);
  carouselInstance.next(); // Di chuyển đến slide tiếp theo
}

// nav của tin tức

document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".news-nav-item");
  const containers = document.querySelectorAll(".news-container");

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

// hiệu ứng đẹp
document.addEventListener("DOMContentLoaded", () => {
  const target = document.querySelector(".recommend-intro");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        target.classList.add("visible");
      }
    });
  });

  observer.observe(target);
});

document.addEventListener("DOMContentLoaded", () => {
  const imgContainer = document.querySelector(".recommend-img-container");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        imgContainer.classList.add("visible");
      }
    });
  });

  observer.observe(imgContainer);
});

document.addEventListener("DOMContentLoaded", () => {
  const reviewContainer = document.querySelector(".review-container");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        reviewContainer.classList.add("visible");
      }
    });
  });

  observer.observe(reviewContainer);
});

document.addEventListener("DOMContentLoaded", () => {
  const storyContainer = document.querySelector(".story-container");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        storyContainer.classList.add("visible");
      }
    });
  });

  observer.observe(storyContainer);
});

document.addEventListener("DOMContentLoaded", () => {
  const legitContainer = document.querySelector(".legit-container");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        legitContainer.classList.add("visible");
      }
    });
  });

  observer.observe(legitContainer);
});

document.addEventListener("DOMContentLoaded", () => {
  const guideContainer = document.querySelector('.container-hint');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        guideContainer.classList.add('visible');
      }
    });
  });

  observer.observe(guideContainer);
});