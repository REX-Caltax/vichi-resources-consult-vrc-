document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  const footer = document.querySelector('.site-footer p');
  if (footer) {
    footer.textContent = `© ${year} Vichi Resources Consults (VRC)`;
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
      title: 'Matrix International Academy',
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
        img.src = imageSrc;
        img.alt = `${group.title} image ${idx + 1}`;

        slide.appendChild(img);
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

      setInterval(() => {
        if (document.hidden) return;
        const currentIndex = Number(carousel.dataset.index || 0);
        const nextIndex = (currentIndex + 1) % group.images.length;
        updateCarousel(carousel, nextIndex);
      }, 5000);
    });
  }

  function updateCarousel(carousel, activeIndex) {
    const slides = carousel.querySelectorAll('.carousel-slide');
    const dots = carousel.querySelectorAll('.carousel-dot');

    slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === activeIndex);
    });

    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === activeIndex);
    });

    carousel.dataset.index = String(activeIndex);
  }

  const modal = document.getElementById('contactModal');
  const openButtons = document.querySelectorAll('.open-contact-modal');
  const closeButton = document.querySelector('.modal-close');
  const form = document.getElementById('contactForm');

  const emailTarget = 'Zaramson@gmail.com';

  const openModal = () => {
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
  };

  const closeModal = () => {
    if (!modal) return;
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
  };

  openButtons.forEach((button) => {
    button.addEventListener('click', openModal);
  });

  closeButton?.addEventListener('click', closeModal);
  modal?.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

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

    window.location.href = `mailto:${emailTarget}?subject=${subject}&body=${body}`;
    form.reset();
    closeModal();
  });
});
