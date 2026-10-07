document.addEventListener('DOMContentLoaded', () => {
  const carouselImagesWithoutOptimizedVersions = new Set([
    'Carousels/Funtertainment 2014/DSC_0072.JPG',
    'Carousels/IMGS funtertainment 2013/DSC_0235.JPG',
    'Carousels/Teacher Training - Kindle School Kaduna-May 2016/DSC04282.JPG',
  ]);

  const year = new Date().getFullYear();
  const footer = document.querySelector('.site-footer p');
  if (footer) {
    footer.textContent = `© ${year} Vichi Resources Consults (VRC)`;
  }

  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  menuToggle?.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
    mainNav?.classList.toggle('is-open', !isOpen);
  });

  mainNav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle?.setAttribute('aria-expanded', 'false');
      menuToggle?.setAttribute('aria-label', 'Open navigation');
      mainNav.classList.remove('is-open');
    });
  });

  const homeShowcaseImages = [
    { title: 'Abuja School', src: 'Carousels/Abuja School/20190729_105231.jpg' },
    { title: "Children's Church - Global Fame Ministry Abuja-May 2019", src: 'Carousels/Children\'s Church - Global Fame Ministry Abuja-May 2019/20190518_155337.jpg' },
    { title: "Children's church Hangout Global Flame-April 2019", src: 'Carousels/Children\'s church Hangout Global Flame-April 2019/20190427_100527.jpg' },
    { title: 'Children\'s Church Teachers Training - Global Flame Abuja-January 2019', src: 'Carousels/Children\'s Church Teachers Training - Global Flame Abuja-January 2019/20190126_094717.jpg' },
    { title: 'Fatima School - Teacher Training- May 2019', src: 'Carousels/Fatima School - Teacher Training- May 2019/20190502_095308.jpg' },
    { title: 'IMGS funtertainment 2013', src: 'Carousels/IMGS funtertainment 2013/DSC_0021 - Copy - Copy.JPG' },
    { title: 'Funtertainment 2013', src: 'Carousels/Funtertainment 2013/DSC_0068.JPG' },
    { title: 'Funtertainment 2014', src: 'Carousels/Funtertainment 2014/DSC_0001 - Crop.jpg' },
    { title: 'Funtertainment- House of Recab', src: 'Carousels/Funtertainment- House of Recab/DSC03792.jpg' },
    { title: 'Matrix International Academy, Gombe', src: 'Carousels/Matrix International Academy/20190925_151236.jpg' },
    { title: 'NITAD-June 2019', src: 'Carousels/NITAD-June 2019/20190611_130848.jpg' },
    { title: 'Our Lady Queen of Peace School Jos', src: 'Carousels/Our Lady Queen of Peace School Jos/FB_IMG_1563465455093.jpg' },
    { title: 'Session with PTA Fatima School Utako Abuja', src: 'Carousels/Session with PTA Fatima School Utako Abuja/20190622_105309.jpg' },
    { title: 'Story Time Session with displaced children- May 2016', src: 'Carousels/Story Time Session with displaced children- May 2016/20161103_103356.jpg' },
    { title: 'Teacher Training - Buken School Jos- January 2017', src: 'Carousels/Teacher Training - Buken School Jos- January 2017/20170125_134044.jpg' },
    { title: 'Teacher Training - Kindle School Kaduna September 2016', src: 'Carousels/Teacher Training - Kindle School Kaduna September 2016/20160902_121415.jpg' },
    { title: 'Teacher Training - Kindle School Kaduna-May 2016', src: 'Carousels/Teacher Training - Kindle School Kaduna-May 2016/DSC04282.JPG' },
    { title: 'Teacher Training Fatima School Utako Abuja-October 2019', src: 'Carousels/Teacher Training Fatima School Utako Abuja-October 2019/20191026_102055.jpg' },
    { title: 'Widows Mentoring and Empowerment Programme- September 2018', src: 'Carousels/Widows Mentoring and Empowerment Programme- September 2018/20180908_105152.jpg' },
  ];

  const homeShowcase = document.getElementById('homeShowcaseCarousel');
  if (homeShowcase) {
    const viewport = document.createElement('div');
    viewport.className = 'home-showcase-viewport';

    const track = document.createElement('div');
    track.className = 'home-showcase-track';

    const slides = homeShowcaseImages.map((item, index) => {
      const slide = document.createElement('div');
      slide.className = `home-showcase-slide${index === 0 ? ' active' : ''}`;

      const img = document.createElement('img');
      img.dataset.src = getOptimizedCarouselPath(item.src);
      img.alt = item.title;
      img.loading = 'lazy';
      img.decoding = 'async';
      slide.appendChild(img);

      const caption = document.createElement('div');
      caption.className = 'home-showcase-caption';
      caption.textContent = item.title;
      slide.appendChild(caption);

      return slide;
    });

    slides.forEach((slide) => track.appendChild(slide));

    const prevBtn = document.createElement('button');
    prevBtn.type = 'button';
    prevBtn.className = 'home-showcase-btn prev';
    prevBtn.setAttribute('aria-label', 'Previous project slide');
    prevBtn.textContent = '‹';

    const nextBtn = document.createElement('button');
    nextBtn.type = 'button';
    nextBtn.className = 'home-showcase-btn next';
    nextBtn.setAttribute('aria-label', 'Next project slide');
    nextBtn.textContent = '›';

    const dots = document.createElement('div');
    dots.className = 'home-showcase-dots';

    homeShowcaseImages.forEach((item, index) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = `home-showcase-dot${index === 0 ? ' active' : ''}`;
      dot.setAttribute('aria-label', `Show slide ${index + 1} for ${item.title}`);
      dot.addEventListener('click', () => updateHomeShowcase(index));
      dots.appendChild(dot);
    });

    viewport.appendChild(track);
    viewport.appendChild(prevBtn);
    viewport.appendChild(nextBtn);
    homeShowcase.appendChild(viewport);
    homeShowcase.appendChild(dots);

    const updateHomeShowcase = (activeIndex) => {
      loadSlideImage(slides[activeIndex]);
      slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === activeIndex);
      });

      [...dots.children].forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndex);
      });
    };

    loadSlideImage(slides[0]);

    prevBtn.addEventListener('click', () => {
      const currentIndex = slides.findIndex((slide) => slide.classList.contains('active'));
      const prevIndex = currentIndex <= 0 ? slides.length - 1 : currentIndex - 1;
      updateHomeShowcase(prevIndex);
    });

    nextBtn.addEventListener('click', () => {
      const currentIndex = slides.findIndex((slide) => slide.classList.contains('active'));
      const nextIndex = currentIndex >= slides.length - 1 ? 0 : currentIndex + 1;
      updateHomeShowcase(nextIndex);
    });

    setInterval(() => {
      if (document.hidden) return;
      const currentIndex = slides.findIndex((slide) => slide.classList.contains('active'));
      const nextIndex = currentIndex >= slides.length - 1 ? 0 : currentIndex + 1;
      updateHomeShowcase(nextIndex);
    }, 5000);
  }

  const companyProfileData = [
    {
      title: 'Abuja School',
      images: [
        'Carousels/Abuja School/20190729_105231.jpg',
        'Carousels/Abuja School/20190729_110647.jpg',
        'Carousels/Abuja School/20190729_112403.jpg',
        'Carousels/Abuja School/20190729_114952.jpg',
      ],
    },
    {
      title: "Children's Church - Global Fame Ministry Abuja-May 2019",
      images: [
        'Carousels/Children\'s Church - Global Fame Ministry Abuja-May 2019/20190518_155337.jpg',
        'Carousels/Children\'s Church - Global Fame Ministry Abuja-May 2019/20190527_113937.jpg',
        'Carousels/Children\'s Church - Global Fame Ministry Abuja-May 2019/20190527_113946.jpg',
      ],
    },
    {
      title: "Children's church Hangout Global Flame-April 2019",
      images: [
        'Carousels/Children\'s church Hangout Global Flame-April 2019/20190427_100527.jpg',
        'Carousels/Children\'s church Hangout Global Flame-April 2019/20190427_101729.jpg',
        'Carousels/Children\'s church Hangout Global Flame-April 2019/20190427_101737.jpg',
        'Carousels/Children\'s church Hangout Global Flame-April 2019/20190427_105023.jpg',
      ],
    },
    {
      title: 'Children\'s Church Teachers Training - Global Flame Abuja-January 2019',
      images: [
        'Carousels/Children\'s Church Teachers Training - Global Flame Abuja-January 2019/20190126_094717.jpg',
        'Carousels/Children\'s Church Teachers Training - Global Flame Abuja-January 2019/20190126_101824.jpg',
        'Carousels/Children\'s Church Teachers Training - Global Flame Abuja-January 2019/20190126_101821.jpg',
        'Carousels/Children\'s Church Teachers Training - Global Flame Abuja-January 2019/20190126_102626.jpg',
      ],
    },
    {
      title: 'Fatima School - Teacher Training- May 2019',
      images: [
        'Carousels/Fatima School - Teacher Training- May 2019/20190502_095308.jpg',
        'Carousels/Fatima School - Teacher Training- May 2019/20190502_095346.jpg',
        'Carousels/Fatima School - Teacher Training- May 2019/20190502_104851.jpg',
        'Carousels/Fatima School - Teacher Training- May 2019/20190502_110728.jpg',
      ],
    },
    {
      title: 'Matrix International Academy, Gombe',
      images: [
        'Carousels/Matrix International Academy/20190925_151236.jpg',
        'Carousels/Matrix International Academy/20190925_151247.jpg',
        'Carousels/Matrix International Academy/20190925_151257.jpg',
        'Carousels/Matrix International Academy/IMG_20190927_122017_629.jpg',
      ],
    },
    {
      title: 'NITAD-June 2019',
      images: [
        'Carousels/NITAD-June 2019/20190611_130848.jpg',
        'Carousels/NITAD-June 2019/20190611_130904.jpg',
        'Carousels/NITAD-June 2019/20190611_130907.jpg',
      ],
    },
    {
      title: 'Our Lady Queen of Peace School Jos',
      images: [
        'Carousels/Our Lady Queen of Peace School Jos/FB_IMG_1563465455093.jpg',
        'Carousels/Our Lady Queen of Peace School Jos/FB_IMG_1563465485517.jpg',
        'Carousels/Our Lady Queen of Peace School Jos/FB_IMG_1563465495398.jpg',
        'Carousels/Our Lady Queen of Peace School Jos/FB_IMG_1563465523237.jpg',
      ],
    },
    {
      title: 'Session with PTA Fatima School Utako Abuja',
      images: [
        'Carousels/Session with PTA Fatima School Utako Abuja/20190622_105309.jpg',
        'Carousels/Session with PTA Fatima School Utako Abuja/20190622_112727.jpg',
        'Carousels/Session with PTA Fatima School Utako Abuja/20190622_113141.jpg',
        'Carousels/Session with PTA Fatima School Utako Abuja/20190622_113827.jpg',
      ],
    },
    {
      title: 'Story Time Session with displaced children- May 2016',
      images: [
        'Carousels/Story Time Session with displaced children- May 2016/20161103_103356.jpg',
        'Carousels/Story Time Session with displaced children- May 2016/20161103_105012.jpg',
        'Carousels/Story Time Session with displaced children- May 2016/20161103_123620.jpg',
        'Carousels/Story Time Session with displaced children- May 2016/20161103_140011.jpg',
      ],
    },
    {
      title: 'Teacher Training - Buken School Jos- January 2017',
      images: [
        'Carousels/Teacher Training - Buken School Jos- January 2017/20170125_134044.jpg',
        'Carousels/Teacher Training - Buken School Jos- January 2017/20170125_140916.jpg',
        'Carousels/Teacher Training - Buken School Jos- January 2017/20170125_154643.jpg',
        'Carousels/Teacher Training - Buken School Jos- January 2017/20170125_170138.jpg',
      ],
    },
    {
      title: 'Teacher Training - Kindle School Kaduna September 2016',
      images: [
        'Carousels/Teacher Training - Kindle School Kaduna September 2016/20160902_121415.jpg',
        'Carousels/Teacher Training - Kindle School Kaduna September 2016/20160902_122123.jpg',
        'Carousels/Teacher Training - Kindle School Kaduna September 2016/20160902_122919.jpg',
        'Carousels/Teacher Training - Kindle School Kaduna September 2016/20160902_123127.jpg',
      ],
    },
    {
      title: 'Teacher Training - Kindle School Kaduna-May 2016',
      images: [
        'Carousels/Teacher Training - Kindle School Kaduna-May 2016/DSC04282.JPG',
        'Carousels/Teacher Training - Kindle School Kaduna-May 2016/DSC04285.JPG',
        'Carousels/Teacher Training - Kindle School Kaduna-May 2016/DSC04291.JPG',
        'Carousels/Teacher Training - Kindle School Kaduna-May 2016/DSC04336.JPG',
      ],
    },
    {
      title: 'Teacher Training Fatima School Utako Abuja-October 2019',
      images: [
        'Carousels/Teacher Training Fatima School Utako Abuja-October 2019/20191026_102055.jpg',
        'Carousels/Teacher Training Fatima School Utako Abuja-October 2019/20191026_103704.jpg',
        'Carousels/Teacher Training Fatima School Utako Abuja-October 2019/20191026_110111.jpg',
        'Carousels/Teacher Training Fatima School Utako Abuja-October 2019/20191026_112945.jpg',
      ],
    },
    {
      title: 'Widows Mentoring and Empowerment Programme- September 2018',
      images: [
        'Carousels/Widows Mentoring and Empowerment Programme- September 2018/20180908_105152.jpg',
        'Carousels/Widows Mentoring and Empowerment Programme- September 2018/20180908_105937.jpg',
        'Carousels/Widows Mentoring and Empowerment Programme- September 2018/20180908_110210.jpg',
        'Carousels/Widows Mentoring and Empowerment Programme- September 2018/20180908_125953.jpg',
      ],
    },
    {
      title: 'IMGS funtertainment 2013',
      images: [
        'Carousels/IMGS funtertainment 2013/DSC_0021 - Copy - Copy.JPG',
        'Carousels/IMGS funtertainment 2013/DSC_0028.JPG',
        'Carousels/IMGS funtertainment 2013/DSC_0141.JPG',
        'Carousels/IMGS funtertainment 2013/DSC_0228.JPG',
        'Carousels/IMGS funtertainment 2013/DSC_0229.JPG',
        'Carousels/IMGS funtertainment 2013/DSC_0235.JPG',
        'Carousels/IMGS funtertainment 2013/DSC_0264.JPG',
        'Carousels/IMGS funtertainment 2013/DSC_0328.JPG',
      ],
    },
    {
      title: 'Funtertainment 2013',
      images: [
        'Carousels/Funtertainment 2013/DSC_0068.JPG',
        'Carousels/Funtertainment 2013/DSC_0072.JPG',
        'Carousels/Funtertainment 2013/DSC_0073 - Copy.JPG',
        'Carousels/Funtertainment 2013/DSC_0073 - crop.jpg',
        'Carousels/Funtertainment 2013/DSC_0103 - Copy.JPG',
        'Carousels/Funtertainment 2013/DSC_0140.JPG',
        'Carousels/Funtertainment 2013/DSC_0196.JPG',
        'Carousels/Funtertainment 2013/DSC_0235.jpg',
        'Carousels/Funtertainment 2013/DSC_0250.JPG',
      ],
    },
    {
      title: 'Funtertainment 2014',
      images: [
        'Carousels/Funtertainment 2014/DSC_0001 - Crop.jpg',
        'Carousels/Funtertainment 2014/DSC_0006.JPG',
        'Carousels/Funtertainment 2014/DSC_0043.JPG',
        'Carousels/Funtertainment 2014/DSC_0056.JPG',
        'Carousels/Funtertainment 2014/DSC_0064.JPG',
        'Carousels/Funtertainment 2014/DSC_0070.JPG',
        'Carousels/Funtertainment 2014/DSC_0071.JPG',
        'Carousels/Funtertainment 2014/DSC_0072.JPG',
      ],
    },
    {
      title: 'Funtertainment- House of Recab',
      images: [
        'Carousels/Funtertainment- House of Recab/DSC03792.jpg',
        'Carousels/Funtertainment- House of Recab/DSC03943.jpg',
        'Carousels/Funtertainment- House of Recab/DSC03945.jpg',
        'Carousels/Funtertainment- House of Recab/DSC03948.jpg',
        'Carousels/Funtertainment- House of Recab/DSC03957.jpg',
        'Carousels/Funtertainment- House of Recab/DSC03984.jpg',
        'Carousels/Funtertainment- House of Recab/DSC04028.jpg',
        'Carousels/Funtertainment- House of Recab/DSC04030.jpg',
        'Carousels/Funtertainment- House of Recab/DSC04200.jpg',
        'Carousels/Funtertainment- House of Recab/DSC04239.jpg',
        'Carousels/Funtertainment- House of Recab/DSC04282.jpg',
        'Carousels/Funtertainment- House of Recab/DSC04303.jpg',
      ],
    },
  ];

  const profileGrid = document.getElementById('companyProfileGrid');

  if (profileGrid) {
    companyProfileData.forEach((group) => {
      const card = document.createElement('article');
      card.className = 'profile-carousel-card';

      const heading = document.createElement('h3');
      heading.textContent = group.title;
      card.appendChild(heading);

      const carousel = document.createElement('div');
      carousel.className = 'carousel';
      carousel.dataset.index = '0';

      const track = document.createElement('div');
      track.className = 'carousel-track';

      group.images.forEach((imageSrc, idx) => {
        const slide = document.createElement('div');
        slide.className = `carousel-slide${idx === 0 ? ' active' : ''}`;

        const img = document.createElement('img');
        img.dataset.src = getOptimizedCarouselPath(imageSrc);
        img.alt = `${group.title} image ${idx + 1}`;
        img.loading = 'lazy';
        img.decoding = 'async';

        slide.appendChild(img);
        if (idx === 0) loadSlideImage(slide);
        track.appendChild(slide);
      });

      const btnPrev = document.createElement('button');
      btnPrev.type = 'button';
      btnPrev.className = 'carousel-btn prev';
      btnPrev.setAttribute('aria-label', `Previous slide for ${group.title}`);
      btnPrev.textContent = '‹';

      const btnNext = document.createElement('button');
      btnNext.type = 'button';
      btnNext.className = 'carousel-btn next';
      btnNext.setAttribute('aria-label', `Next slide for ${group.title}`);
      btnNext.textContent = '›';

      const dots = document.createElement('div');
      dots.className = 'carousel-dots';

      group.images.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = `carousel-dot${idx === 0 ? ' active' : ''}`;
        dot.setAttribute('aria-label', `Go to slide ${idx + 1} for ${group.title}`);
        dot.addEventListener('click', () => {
          updateCarousel(carousel, idx);
        });
        dots.appendChild(dot);
      });

      carousel.appendChild(track);
      carousel.appendChild(btnPrev);
      carousel.appendChild(btnNext);
      carousel.appendChild(dots);
      card.appendChild(carousel);
      profileGrid.appendChild(card);

      btnPrev.addEventListener('click', () => {
        const currentIndex = Number(carousel.dataset.index || 0);
        const prevIndex = (currentIndex - 1 + group.images.length) % group.images.length;
        updateCarousel(carousel, prevIndex);
      });

      btnNext.addEventListener('click', () => {
        const currentIndex = Number(carousel.dataset.index || 0);
        const nextIndex = (currentIndex + 1) % group.images.length;
        updateCarousel(carousel, nextIndex);
      });

      let autoplayTimer;
      const carouselObserver = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && !autoplayTimer) {
          autoplayTimer = setInterval(() => {
            if (document.hidden) return;
            const currentIndex = Number(carousel.dataset.index || 0);
            const nextIndex = (currentIndex + 1) % group.images.length;
            updateCarousel(carousel, nextIndex);
          }, 5000);
        } else if (!entry.isIntersecting && autoplayTimer) {
          clearInterval(autoplayTimer);
          autoplayTimer = undefined;
        }
      }, { threshold: 0.25 });
      carouselObserver.observe(carousel);
    });
  }

  function updateCarousel(carousel, activeIndex) {
    const slides = carousel.querySelectorAll('.carousel-slide');
    const dots = carousel.querySelectorAll('.carousel-dot');

    loadSlideImage(slides[activeIndex]);
    slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === activeIndex);
    });

    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === activeIndex);
    });

    carousel.dataset.index = String(activeIndex);
  }

  function loadSlideImage(slide) {
    const img = slide?.querySelector('img');
    if (img && !img.hasAttribute('src')) {
      img.src = img.dataset.src;
    }
  }

  function getOptimizedCarouselPath(src) {
    if (carouselImagesWithoutOptimizedVersions.has(src)) return src;
    return src
      .replace(/^Carousels\//, 'carousel-optimized/')
      .replace(/\.(?:jpe?g)$/i, '.webp');
  }

  const form = document.getElementById('contactForm');

  form?.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get('name')?.toString().trim() || 'Not provided';
    const phone = formData.get('phone')?.toString().trim() || 'Not provided';
    const email = formData.get('email')?.toString().trim() || 'Not provided';
    const message = formData.get('message')?.toString().trim() || 'Not provided';

    const subject = encodeURIComponent('New Consultation / Inquiry');
    const body = encodeURIComponent(
      `Name: ${name}\nPhone Number: ${phone}\nEmail: ${email}\n\nNature of Consultation / Inquiry:\n${message}`
    );

    window.location.href = `mailto:vichiconsult@gmail.com?subject=${subject}&body=${body}`;
    form.reset();
  });
});
