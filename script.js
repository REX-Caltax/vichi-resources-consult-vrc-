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
    { title: 'Funtertainment UK', src: 'carousel-optimized/Funtertainment UK/02b2e793-d329-476d-8509-0f255e7e8951_result.jpg' },
    { title: 'Funtertainment UK', src: 'carousel-optimized/Funtertainment UK/02dff3b7-3122-4371-8ac2-699662447ff4_result.jpg' },
    { title: "Professional Development for Educators tagged, 'Hands Up for Excellence'", src: "carousel-optimized/Professional Development for Educators tagged, 'Hands Up for Excellence' -June 2015/DSC01716_result.jpg" },
    { title: "Professional Development for Educators tagged, 'Hands Up for Excellence'", src: "carousel-optimized/Professional Development for Educators tagged, 'Hands Up for Excellence' -June 2015/DSC01730_result.jpg" },
    { title: "Professional Development for Educators tagged, 'Hands Up for Excellence'", src: "carousel-optimized/Professional Development for Educators tagged, 'Hands Up for Excellence' June 1-4/DSC00889.jpg" },
    { title: "Professional Development for Educators tagged, 'Hands Up for Excellence'", src: "carousel-optimized/Professional Development for Educators tagged, 'Hands Up for Excellence' June 1-4/DSC01003.jpg" },
    { title: 'Abuja School', src: 'Carousels/Abuja School/20190729_105231.jpg' },
    { title: "Children's Church - Global Flame Ministry Abuja", src: 'Carousels/Children\'s Church - Global Fame Ministry Abuja-May 2019/20190518_155337.jpg' },
    { title: "Children's church Hangout Global Flame", src: 'Carousels/Children\'s church Hangout Global Flame-April 2019/20190427_100527.jpg' },
    { title: 'Children\'s Church Teachers Training - Global Flame Abuja', src: 'Carousels/Children\'s Church Teachers Training - Global Flame Abuja-January 2019/20190126_094717.jpg' },
    { title: 'Fatima School - Teacher Training', src: 'Carousels/Fatima School - Teacher Training- May 2019/20190502_095308.jpg' },
    { title: 'Funtertainment', src: 'Carousels/IMGS funtertainment 2013/DSC_0021 - Copy - Copy.JPG' },
    { title: 'Funtertainment', src: 'Carousels/Funtertainment 2013/DSC_0068.JPG' },
    { title: 'Funtertainment', src: 'Carousels/Funtertainment 2014/DSC_0001 - Crop.jpg' },
    { title: 'Funtertainment- House of Recab', src: 'Carousels/Funtertainment- House of Recab/DSC03792.jpg' },
    { title: 'Matrix International Academy, Gombe', src: 'Carousels/Matrix International Academy/20190925_151236.jpg' },
    { title: 'NITAD', src: 'Carousels/NITAD-June 2019/20190611_130848.jpg' },
    { title: 'Our Lady Queen of Peace School Jos', src: 'Carousels/Our Lady Queen of Peace School Jos/FB_IMG_1563465455093.jpg' },
    { title: 'Story Time Session with displaced children', src: 'Carousels/Story Time Session with displaced children- May 2016/20161103_103356.jpg' },
    { title: 'Teacher Training - Buken School Jos', src: 'Carousels/Teacher Training - Buken School Jos- January 2017/20170125_134044.jpg' },
    { title: 'Teacher Training - Kindle School Kaduna', src: 'Carousels/Teacher Training - Kindle School Kaduna September 2016/20160902_121415.jpg' },
    { title: 'Teacher Training - Kindle School Kaduna', src: 'Carousels/Teacher Training - Kindle School Kaduna-May 2016/DSC04282.JPG' },
    { title: 'Teacher Training Fatima School Abuja', src: 'Carousels/Teacher Training Fatima School Utako Abuja-October 2019/20191026_102055.jpg' },
    { title: 'Widows Mentoring and Empowerment Programme', src: 'Carousels/Widows Mentoring and Empowerment Programme- September 2018/20180908_105152.jpg' },
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

  const funtertainmentAroundTheWorldCaseStudy = {
    title: 'Around the World: Learning through Culture and Celebration',
    subtitle: 'Funtertainment | Abuja and Jos, Nigeria',
    need: 'Children and adults benefit from opportunities to learn about different cultures, appreciate one another and promote peaceful coexistence. Funtertainment created a Children’s Day celebration where children could explore cultures from around the world through fun and participation.',
    contribution: 'Vichi Resources Consult’s CEO, Vivian Kachollom Rwang, organised the annual Funtertainment celebration in collaboration with Naija Pikin and schools in the community. The Abuja event was held at Sheraton Hotel on 24 May, and the Jos event at Hill Station Hotel on 27 May.',
    focusAreas: [
      ['Around The World theme', 'Introducing children and adults to cultures from around the world and encouraging appreciation and peaceful coexistence.'],
      ['Cultural performances and displays', 'Children presented Indian, Scottish, Egyptian, Nigerian and Hawaiian cultures.'],
      ['Community participation', 'Schools taking part included Fatima School, Utako, Abuja; Living Fountain International School, Abuja; Fatima Private School, Jos; Government Secondary School, West of Mines, Jos; and St. Louis College, Jos.'],
      ['Celebrating children’s talents', 'Creating a platform for children to showcase their skills, learn through fun and think about their futures.'],
    ],
    result: 'Children were excited to take part in the celebration, and participants received gifts donated by supporting organisations through a raffle draw. The event brought schools and communities together for a shared celebration of culture, learning and children’s talents.',
  };

  const kindleSchoolCaseStudy = {
    title: 'Building Strong Foundations for Teaching and Learning',
    subtitle: 'School Setup & Teacher Development | Kindle School, Kaduna, Nigeria',
    need: 'As a new school, Kindle School needed support to establish its provision and equip teachers with the knowledge, skills and professional practices required to create effective learning environments.',
    contribution: 'Vichi Resources Consult supported Kindle School from its inception, contributing to the school’s setup and providing periodic professional development for approximately 20 teachers. Training covered:',
    focusAreas: [
      ['Classroom practice', 'Classroom management, practical teaching strategies and the qualities of an effective teacher.'],
      ['Early years provision', 'Understanding and planning within the Early Years Foundation Stage (EYFS), circle time and classroom displays.'],
      ['Language and literacy', 'Teaching reading through Jolly Phonics and engaging children through storytelling.'],
      ['Professional development', 'Work ethics, team building and creative thinking.'],
    ],
    reflection: 'Beyond the training sessions, VRC continued to mentor teachers and followed up through classroom observations to review how they applied their learning in practice.',
    result: [
      'Teachers benefited from sustained support that connected professional learning with their everyday work. Follow-up classroom observations provided evidence that teachers were applying approaches explored during training, with improvements reflected in their classroom practice and teaching outputs.',
      'The partnership demonstrates VRC’s approach to school development: combining support at the setup stage with ongoing training, mentoring and observation to help professional learning translate into practice.',
    ],
  };

  const companyProfileData = [
    {
      title: 'Funtertainment UK',
      caseStudy: {
        title: 'Celebrating Young Talent through Funtertainment UK',
        subtitle: 'Children, Young People & Families | Southampton, July 2026',
        need: 'Children and young people need welcoming spaces where they can explore their talents, express their creativity and feel valued. Opportunities to perform, participate and connect with others allow them to share their strengths and receive encouragement from their community.',
        contribution: [
          'Vichi Resources Consult organised the inaugural Funtertainment UK event in Southampton in July 2026. Under the theme “All Things Bright & Beautiful”, the event brought children, young people and families together to celebrate creativity, individuality and community.',
          'Building on programmes that had reached hundreds of children in Nigeria, VRC brought Funtertainment’s “Discover. Develop. Shine.” ethos to a new setting. The celebration created opportunities for young participants to showcase their talents, express themselves and enjoy shared experiences with families and the wider community.',
        ],
        result: [
          'Children and young people shared their talents through performances and participation, with families and community members coming together to celebrate their contributions.',
          'The event marked Funtertainment’s first UK chapter, extending VRC’s work from Nigeria to Southampton and providing a foundation for future celebrations of young talent.',
        ],
      },
      images: [
        'carousel-optimized/Funtertainment UK/02b2e793-d329-476d-8509-0f255e7e8951_result.jpg',
        'carousel-optimized/Funtertainment UK/02dff3b7-3122-4371-8ac2-699662447ff4_result.jpg',
        'carousel-optimized/Funtertainment UK/21e10e4c-7d80-459e-83ee-48223bb2d6a1_result.jpg',
        'carousel-optimized/Funtertainment UK/28f4cbad-aed1-443a-bce3-5c0118d293f9_result.jpg',
        'carousel-optimized/Funtertainment UK/979b929f-b61d-447d-955d-72339b23b8ec_result.jpg',
        'carousel-optimized/Funtertainment UK/736621cc-0207-4011-a76c-400bbf321519_result.jpg',
        'carousel-optimized/Funtertainment UK/901202bf-baed-463f-b0c5-aa423a9db578_result.jpg',
        'carousel-optimized/Funtertainment UK/IMG_5033_result.png',
        'carousel-optimized/Funtertainment UK/IMG_5034_result.png',
        'carousel-optimized/Funtertainment UK/e9291866-b80a-4566-8db3-32f7557bf2fe_result.jpg',
        'carousel-optimized/Funtertainment UK/fb204969-8b5d-44e5-b7b9-cb856bea1f96_result.jpg',
        'carousel-optimized/Funtertainment UK/fc8014c0-4574-45b7-bce0-e318dc653009_result.jpg',
      ],
    },
    {
      title: "Professional Development for Educators tagged, 'Hands Up for Excellence'",
      caseStudy: {
        title: 'Hands Up for Excellence: Professional Development for Educators',
        subtitle: 'Broadening perspectives. Strengthening teaching. Inspiring action.',
        need: 'School owners and teachers need opportunities to refresh their knowledge, explore inclusive teaching approaches and connect professional learning with classroom practice.',
        contribution: 'Vichi Resources Consult organised an intensive, one-week professional development programme in the UK for school owners and teachers from schools across Nigeria. Facilitated sessions and school visits explored:',
        focusAreas: [
          ['Special Educational Needs (SEN)', 'Recognising learning difficulties and using teaching strategies to overcome barriers to learning and participation.'],
          ['Early Years Foundation Stage (EYFS)', 'Approaches to supporting young children’s learning and development.'],
          ['Key Stages 1 and 2', 'Assessment for learning, integrating technology and creative lesson design.'],
          ['Families, education and society', 'Understanding the influence of family life on education and the wider community.'],
        ],
        result: 'Participants described the programme as rewarding. They valued observing inclusive classroom practice, the facilitators’ knowledge and professionalism, and the welcoming reception at the schools visited. One participant said the experience renewed their motivation to make a difference in their school, family and wider community.',
        quote: [
          'I loved observing teachers and pupils in the classroom, especially the attention given to children with special educational needs.',
          'I particularly valued the final session on the family and its influence on education and society. The video Vivienne shared touched me and strengthened my motivation to make an impact in my school, my family and the wider community.',
          'The facilitators generously shared their knowledge to deepen ours. They were punctual, clear and focused. I also appreciated the respect and warm welcome we received from the facilitators and teachers at the schools we visited. Thumbs up!',
        ],
      },
      images: [
        "carousel-optimized/Professional Development for Educators tagged, 'Hands Up for Excellence' -June 2015/DSC01716_result.jpg",
        "carousel-optimized/Professional Development for Educators tagged, 'Hands Up for Excellence' -June 2015/DSC01730_result.jpg",
        "carousel-optimized/Professional Development for Educators tagged, 'Hands Up for Excellence' -June 2015/DSC01764_result.jpg",
        "carousel-optimized/Professional Development for Educators tagged, 'Hands Up for Excellence' -June 2015/DSC01767_result.jpg",
        "carousel-optimized/Professional Development for Educators tagged, 'Hands Up for Excellence' -June 2015/DSC01802_result.jpg",
        "carousel-optimized/Professional Development for Educators tagged, 'Hands Up for Excellence' -June 2015/DSC01823_result.jpg",
        "carousel-optimized/Professional Development for Educators tagged, 'Hands Up for Excellence' -June 2015/DSC01824_result.jpg",
      ],
    },
    {
      title: "Professional Development for Educators tagged, 'Hands Up for Excellence'",
      caseStudy: {
        title: 'Hands Up for Excellence UK',
        subtitle: 'Broadening perspectives. Strengthening teaching. Inspiring action.',
        need: 'School owners and teachers need opportunities to refresh their knowledge, explore inclusive teaching approaches and connect professional learning with classroom practice.',
        contribution: 'Vichi Resources Consult organised an intensive, one-week professional development programme in the UK for school owners and teachers from schools across Nigeria. Through facilitated sessions and school visits, participants explored:',
        focusAreas: [
          ['Special Educational Needs (SEN)', 'Recognising learning difficulties and using teaching strategies to overcome barriers to learning and participation.'],
          ['Early Years Foundation Stage (EYFS)', 'Approaches to supporting young children’s learning and development.'],
          ['Key Stages 1 and 2', 'Assessment for learning, integrating technology and creative lesson design.'],
          ['Families, education and society', 'Understanding the influence of family life on education and the wider community.'],
        ],
        result: 'Participants described the programme as a rewarding experience. Feedback highlighted the value of observing inclusive classroom practice, the facilitators’ knowledge and professionalism, and the welcoming reception at the schools visited. One participant expressed renewed motivation to make a difference within their school, family and wider community.',
        quote: [
          'I loved observing teachers and pupils in the classroom, especially the attention given to children with special educational needs.',
          'I particularly valued the final session on the family and its influence on education and society. The video Vivienne shared touched me and strengthened my motivation to make an impact in my school, my family and the wider community.',
          'The facilitators generously shared their knowledge to deepen ours. They were punctual, clear and focused. I also appreciated the respect and warm welcome we received from the facilitators and teachers at the schools we visited. Thumbs up!',
        ],
      },
      images: [
        "carousel-optimized/Professional Development for Educators tagged, 'Hands Up for Excellence' June 1-4/DSC00889.jpg",
        "carousel-optimized/Professional Development for Educators tagged, 'Hands Up for Excellence' June 1-4/DSC01003.jpg",
        "carousel-optimized/Professional Development for Educators tagged, 'Hands Up for Excellence' June 1-4/DSC01004.JPG",
        "carousel-optimized/Professional Development for Educators tagged, 'Hands Up for Excellence' June 1-4/DSC01032.jpg",
        "carousel-optimized/Professional Development for Educators tagged, 'Hands Up for Excellence' June 1-4/DSC01040.jpg",
        "carousel-optimized/Professional Development for Educators tagged, 'Hands Up for Excellence' June 1-4/DSC01074.jpg",
      ],
    },
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
      title: "Children's Church - Global Flame Ministry Abuja",
      caseStudy: {
        title: 'Nurturing Faith, Developing Talents and Building Connections',
        subtitle: 'Voluntary Service | Children’s Church, Global Flame Ministry, Abuja, Nigeria',
        need: 'Children and teenagers benefit from supportive environments where they can explore their faith, develop their talents and build meaningful friendships. Within a church community, this includes biblical teaching alongside opportunities for creative expression and social connection.',
        contribution: 'As part of its commitment to giving back to society, Vichi Resources Consult provided voluntary service through its CEO, Dr Vivienne Kachollom Rwang, who oversaw the children’s and teenagers’ provision at Global Flame Ministry, a Christian organisation in Abuja.',
        focusAreas: [
          ['Biblical teaching and coaching', 'Guiding children and teenagers through learning rooted in Christian beliefs and values.'],
          ['Performance preparation', 'Coaching participants for presentations and performances within the ministry and at external events.'],
          ['Social activities', 'Leading hangouts and shared experiences that encouraged interaction, friendship and a sense of belonging.'],
        ],
        result: 'Children and teenagers received biblical guidance and opportunities to develop and share their talents with different audiences. Performances provided a platform for participation and creative expression, while hangouts strengthened friendships and connections within the group. This voluntary service reflected VRC’s commitment to contributing its time and expertise to the development of children, young people and communities.',
      },
      images: [
        'Carousels/Children\'s Church - Global Fame Ministry Abuja-May 2019/20190518_155337.jpg',
        'Carousels/Children\'s Church - Global Fame Ministry Abuja-May 2019/20190527_113937.jpg',
        'Carousels/Children\'s Church - Global Fame Ministry Abuja-May 2019/20190527_113946.jpg',
      ],
    },
    {
      title: "Children's church Hangout Global Flame",
      images: [
        'Carousels/Children\'s church Hangout Global Flame-April 2019/20190427_100527.jpg',
        'Carousels/Children\'s church Hangout Global Flame-April 2019/20190427_101729.jpg',
        'Carousels/Children\'s church Hangout Global Flame-April 2019/20190427_101737.jpg',
        'Carousels/Children\'s church Hangout Global Flame-April 2019/20190427_105023.jpg',
      ],
    },
    {
      title: 'Children\'s Church Teachers Training - Global Flame Abuja',
      caseStudies: [
        {
          title: 'Equipping Teachers to Nurture Children and Teenagers',
          subtitle: 'Children’s Ministry Teacher Training | Global Flame Ministry, Abuja, Nigeria',
          need: 'Teachers supporting the children’s and teenagers’ church needed practical skills to plan engaging sessions, manage their classes effectively and respond thoughtfully to young people’s needs.',
          contribution: 'Vichi Resources Consult delivered training that combined biblical perspectives with practical teaching approaches. The sessions focused on:',
          focusAreas: [
            ['Rethinking children’s ministry', 'Examining existing perceptions and encouraging a purposeful approach to working with children and teenagers.'],
            ['A biblical view of children', 'Exploring what Scripture teaches about children’s value and adults’ responsibility to nurture them.'],
            ['Understanding discipline', 'Considering discipline as guidance that supports learning, positive behaviour and personal growth.'],
            ['Effective classroom management', 'Exploring approaches to establishing expectations, encouraging participation and responding constructively to challenging behaviour.'],
            ['Structuring sessions', 'Planning clear, organised sessions with purposeful activities and opportunities for engagement.'],
          ],
          result: 'The training provided dedicated time for teachers to reflect on their roles and explore practical approaches to teaching within the ministry. It connected biblical principles with session planning, discipline and classroom management, giving teachers ideas to apply in their work with children and teenagers.',
        },
      ],
      images: [
        'Carousels/Children\'s Church Teachers Training - Global Flame Abuja-January 2019/20190126_094717.jpg',
        'Carousels/Children\'s Church Teachers Training - Global Flame Abuja-January 2019/20190126_101824.jpg',
        'Carousels/Children\'s Church Teachers Training - Global Flame Abuja-January 2019/20190126_101821.jpg',
        'Carousels/Children\'s Church Teachers Training - Global Flame Abuja-January 2019/20190126_102626.jpg',
      ],
    },
    {
      title: 'Fatima School - Teacher Training',
      caseStudy: {
        title: 'Teacher Professional Development | Fatima School, Abuja, Nigeria',
        need: 'A school needs analysis identified priorities for strengthening teamwork, professional work ethics and practical teaching strategies. These priorities informed a tailored programme to support teachers’ development and classroom practice.',
        contribution: 'Vichi Resources Consult organised and facilitated professional development sessions for approximately 40 teachers, focusing on:',
        focusAreas: [
          ['Team building', 'Strengthening collaboration and shared responsibility within the school.'],
          ['Professional work ethics', 'Exploring professional conduct, responsibilities and standards.'],
          ['Practical teaching strategies', 'Sharing approaches that teachers could adapt to their classroom contexts.'],
        ],
        reflection: 'The sessions created opportunities for teachers to reflect on challenges, exchange experiences and consider how to apply new ideas in their work.',
        pta: 'VRC also facilitated sessions with the school’s Parent–Teacher Association (PTA), updating parents on improvements made and providing opportunities to ask questions and discuss their children’s education.',
        result: 'Teachers benefited from dedicated time for professional learning and collaboration, exploring approaches relevant to the needs identified by their school. They identified practical ideas to take back to their classrooms, while the PTA sessions provided a forum for dialogue between parents and the school.',
      },
      images: [
        'Carousels/Fatima School - Teacher Training- May 2019/20190502_095308.jpg',
        'Carousels/Fatima School - Teacher Training- May 2019/20190502_095346.jpg',
        'Carousels/Fatima School - Teacher Training- May 2019/20190502_104851.jpg',
        'Carousels/Fatima School - Teacher Training- May 2019/20190502_110728.jpg',
      ],
    },
    {
      title: 'Matrix International Academy, Gombe',
      caseStudy: {
        title: 'Strengthening Early Years Teaching through Play and Purposeful Planning',
        subtitle: 'Teacher Professional Development | Matrix International Academy, Gombe, Nigeria',
        need: 'Effective early years provision requires an understanding of how young children learn, alongside practical approaches to planning, play and early literacy. The training focused on these foundations to support teachers’ classroom practice.',
        contribution: 'Vichi Resources Consult delivered professional development covering:',
        focusAreas: [
          ['An overview of the Early Years Foundation Stage (EYFS)', 'Introducing its principles and approach to children’s learning and development.'],
          ['Planning in the EYFS', 'Exploring how to plan purposeful learning experiences that respond to children’s interests and developmental needs.'],
          ['The role of play in learning', 'Examining how play supports exploration, communication, creativity and social development.'],
          ['Practical early years teaching strategies', 'Considering approaches to making learning engaging and accessible.'],
          ['Circle time', 'Exploring opportunities to encourage listening, participation and positive relationships.'],
          ['Jolly Phonics', 'Introducing approaches to supporting early reading through systematic phonics teaching.'],
        ],
        result: 'The training provided teachers with opportunities to connect early years principles with everyday classroom practice. It brought together planning, play, group interaction and early literacy, offering practical ideas for creating purposeful and engaging learning experiences for young children.',
      },
      images: [
        'Carousels/Matrix International Academy/20190925_151236.jpg',
        'Carousels/Matrix International Academy/20190925_151247.jpg',
        'Carousels/Matrix International Academy/20190925_151257.jpg',
        'Carousels/Matrix International Academy/IMG_20190927_122017_629.jpg',
      ],
    },
    {
      title: 'NITAD',
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
      title: 'Story Time Session with displaced children',
      images: [
        'Carousels/Story Time Session with displaced children- May 2016/20161103_103356.jpg',
        'Carousels/Story Time Session with displaced children- May 2016/20161103_105012.jpg',
        'Carousels/Story Time Session with displaced children- May 2016/20161103_123620.jpg',
        'Carousels/Story Time Session with displaced children- May 2016/20161103_140011.jpg',
      ],
    },
    {
      title: 'Teacher Training - Buken School Jos',
      images: [
        'Carousels/Teacher Training - Buken School Jos- January 2017/20170125_134044.jpg',
        'Carousels/Teacher Training - Buken School Jos- January 2017/20170125_140916.jpg',
        'Carousels/Teacher Training - Buken School Jos- January 2017/20170125_154643.jpg',
        'Carousels/Teacher Training - Buken School Jos- January 2017/20170125_170138.jpg',
      ],
    },
    {
      title: 'Teacher Training - Kindle School Kaduna',
      caseStudy: kindleSchoolCaseStudy,
      images: [
        'Carousels/Teacher Training - Kindle School Kaduna September 2016/20160902_121415.jpg',
        'Carousels/Teacher Training - Kindle School Kaduna September 2016/20160902_122123.jpg',
        'Carousels/Teacher Training - Kindle School Kaduna September 2016/20160902_122919.jpg',
        'Carousels/Teacher Training - Kindle School Kaduna September 2016/20160902_123127.jpg',
      ],
    },
    {
      title: 'Teacher Training - Kindle School Kaduna',
      caseStudy: kindleSchoolCaseStudy,
      images: [
        'Carousels/Teacher Training - Kindle School Kaduna-May 2016/DSC04282.JPG',
        'Carousels/Teacher Training - Kindle School Kaduna-May 2016/DSC04285.JPG',
        'Carousels/Teacher Training - Kindle School Kaduna-May 2016/DSC04291.JPG',
        'Carousels/Teacher Training - Kindle School Kaduna-May 2016/DSC04336.JPG',
      ],
    },
    {
      title: 'Teacher Training Fatima School Abuja',
      images: [
        'Carousels/Teacher Training Fatima School Utako Abuja-October 2019/20191026_102055.jpg',
        'Carousels/Teacher Training Fatima School Utako Abuja-October 2019/20191026_103704.jpg',
        'Carousels/Teacher Training Fatima School Utako Abuja-October 2019/20191026_110111.jpg',
        'Carousels/Teacher Training Fatima School Utako Abuja-October 2019/20191026_112945.jpg',
      ],
    },
    {
      title: 'Widows Mentoring and Empowerment Programme',
      caseStudy: {
        title: 'Renewing Hope and Planning for the Future',
        subtitle: 'Widows’ Mentoring & Empowerment Programme | Jos, Nigeria',
        need: 'Widowhood can bring emotional challenges and uncertainty about the future. The programme offered participants a supportive space to reflect on their aspirations, draw strength from their faith and consider practical steps towards a more secure future.',
        contribution: 'Vichi Resources Consult was invited to deliver a mentoring session for a group of widows in Jos. The session combined emotional encouragement, faith-based reflection and practical guidance, focusing on:',
        focusAreas: [
          ['Renewing hope and confidence', 'Encouraging participants to recognise their strengths and believe in their capacity to pursue meaningful goals.'],
          ['Rediscovering aspirations', 'Revisiting dreams and ambitions they had set aside through fear or uncertainty.'],
          ['Planning for the future', 'Exploring how clear goals, manageable steps and supportive structures could help turn aspirations into action.'],
          ['Individual support', 'Providing opportunities to ask questions and receive counselling in areas of personal concern.'],
        ],
        result: 'Participants testified that the session lifted their spirits and renewed their motivation. Some expressed a readiness to revisit aspirations they had abandoned because they doubted their ability to achieve them. Their reflections highlighted the value of encouragement alongside practical planning: helping participants recognise possibilities for the future and feel more confident about taking the next step.',
      },
      images: [
        'Carousels/Widows Mentoring and Empowerment Programme- September 2018/20180908_105152.jpg',
        'Carousels/Widows Mentoring and Empowerment Programme- September 2018/20180908_105937.jpg',
        'Carousels/Widows Mentoring and Empowerment Programme- September 2018/20180908_110210.jpg',
        'Carousels/Widows Mentoring and Empowerment Programme- September 2018/20180908_125953.jpg',
      ],
    },
    {
      title: 'Funtertainment',
      caseStudy: funtertainmentAroundTheWorldCaseStudy,
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
      title: 'Funtertainment',
      caseStudy: funtertainmentAroundTheWorldCaseStudy,
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
      title: 'Funtertainment',
      caseStudy: funtertainmentAroundTheWorldCaseStudy,
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
      caseStudy: {
        title: 'Bringing Learning, Creativity and Joy to Displaced Children',
        subtitle: 'Community Learning & Funtertainment Outreach | Nigeria',
        need: 'Displacement can disrupt children’s education and limit their access to books, creative activities and supportive learning spaces. Alongside educational opportunities, children affected by conflict need time to play, express themselves and enjoy being children.',
        contribution: [
          'Vichi Resources Consult brought together literacy, creative expression and celebration through activities for displaced children.',
          'In May 2016, VRC delivered a story-time session, giving children opportunities to engage with stories, interact with others and participate in a shared learning experience.',
          'VRC also brought its Funtertainment initiative to displaced children through “Christmas at Recab”, a celebration attended by approximately 200 children. The event included puppet shows, singing and presentations by the children themselves, creating opportunities for them to showcase their talents as well as enjoy performances. Each child also received a present from Father Christmas.',
        ],
        result: [
          'The activities provided opportunities for children to participate in literacy, share their creativity and enjoy a community celebration. Story time offered a space for engagement and expression, while “Christmas at Recab” gave children a platform to perform, be entertained and receive gifts.',
          'Together, these experiences reflected VRC’s commitment to inclusion: recognising displaced children as learners with talents, interests and aspirations, and creating space for learning, connection and joy.',
        ],
      },
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
    {
      title: 'Kindle School Training',
      caseStudy: kindleSchoolCaseStudy,
      images: [
        'carousel-optimized/Kindle School Training/357f54c1-78c6-428c-8923-cef66446d43a.JPG',
        'carousel-optimized/Kindle School Training/3ab8ee72-86e8-45f0-aaf1-a67f1f2956d4.JPG',
        'carousel-optimized/Kindle School Training/55263783-8291-40c1-b918-84c780d0943d.JPG',
        'carousel-optimized/Kindle School Training/7288c5e9-66c4-4906-b33e-54fe44ea6fd1.JPG',
        'carousel-optimized/Kindle School Training/83470d72-158c-46c9-a06a-3556a5a27d31.JPG',
        'carousel-optimized/Kindle School Training/9f647c1e-1b54-40ef-81ce-b10362fe7d5c.JPG',
        'carousel-optimized/Kindle School Training/bf4aa36e-8d09-4c3d-b1a9-555071d1b564.JPG',
      ],
    },
    {
      title: 'Blooming Heritage School, Abuja, Nigeria',
      caseStudy: {
        title: 'Leading School Development and Supporting Pupil Progress',
        subtitle: 'School Headship & Consultancy | Blooming Heritage School, Abuja, Nigeria',
        need: 'Effective school leadership brings together curriculum delivery, teacher development and strong relationships with families. At Blooming Heritage School, VRC’s support focused on these connected priorities to strengthen teaching and respond to pupils’ learning needs.',
        contribution: 'Vichi Resources Consult provided school leadership and consultancy through its CEO, Dr Vivienne Kachollom Rwang, who served as Head Teacher and Consultant. Her responsibilities included:',
        focusAreas: [
          ['Curriculum leadership', 'Leading curriculum delivery and supporting teachers with planning and classroom practice.'],
          ['Weekly professional development', 'Delivering continuing professional development (CPD) sessions and mentoring teachers.'],
          ['Classroom observation', 'Observing teaching to identify strengths and areas for development, informing feedback and professional support.'],
          ['Pupil progress monitoring', 'Reviewing pupils’ progress and working with teachers to understand and address learning needs.'],
          ['Parent–school partnerships', 'Working with families and staff to share concerns, discuss progress and support pupils’ learning.'],
        ],
        result: 'The consultancy brought school leadership, weekly CPD, teacher mentoring and pupil progress monitoring into a coordinated approach. Classroom observations informed staff development, while collaboration with families helped connect support at school with pupils’ individual learning needs. The work demonstrated VRC’s practical approach to school improvement: supporting leaders, developing teachers and keeping pupils’ learning at the centre of decision-making.',
      },
      images: [
        'carousel-optimized/Heritage School,Abuja, Nigeria/49b82491-dd78-487b-8d2b-56dbc9f2b1d6.JPG',
        'carousel-optimized/Heritage School,Abuja, Nigeria/761c88ad-ce84-471c-8a71-314323cc059a.JPG',
        'carousel-optimized/Heritage School,Abuja, Nigeria/7709ecfe-202f-4b07-881e-ab6ab01ebf73.JPG',
        'carousel-optimized/Heritage School,Abuja, Nigeria/7d5590ad-8b71-4d83-a632-73639625c44f.JPG',
        'carousel-optimized/Heritage School,Abuja, Nigeria/980ac328-37f9-467d-acc1-2c15fe7a7658.JPG',
        'carousel-optimized/Heritage School,Abuja, Nigeria/ca6e4545-78bb-459b-a525-d2b3ddbb61fc.JPG',
      ],
    },
    {
      title: 'Kindle School',
      caseStudy: kindleSchoolCaseStudy,
      images: [
        'carousel-optimized/Kindle School/0283bd96-4a3c-4168-ada4-531090a09a41.JPG',
        'carousel-optimized/Kindle School/19288de7-c4ec-4806-a727-aeee65deda3c.JPG',
        'carousel-optimized/Kindle School/3972404d-74fd-4e53-8e40-4425d09eb6fe.JPG',
        'carousel-optimized/Kindle School/c087dab7-b738-41dd-9bb1-276fb7ddc941.JPG',
      ],
    },
    {
      title: 'Our Lady Queen of Peace, Jos',
      images: [
        'carousel-optimized/Our Lady Queen of Peace, Jos/1995b558-709b-4ba5-91c3-6acce126df30.JPG',
        'carousel-optimized/Our Lady Queen of Peace, Jos/208b8a8c-350b-4d80-9463-4d46d596f136.JPG',
        'carousel-optimized/Our Lady Queen of Peace, Jos/7899b9e9-d7a3-4db3-8fdd-2598c5846fe3.JPG',
        'carousel-optimized/Our Lady Queen of Peace, Jos/a1ba1cc2-a6f5-4ca6-986a-48d8fff17022.JPG',
        'carousel-optimized/Our Lady Queen of Peace, Jos/b256d58a-fd05-4d55-8040-5cbda6c5b39c.JPG',
        'carousel-optimized/Our Lady Queen of Peace, Jos/b2d92dbc-5ce5-45e1-9997-472c25fd9804.JPG',
        'carousel-optimized/Our Lady Queen of Peace, Jos/d18c6bbe-498f-408e-a016-4b54274d4622.JPG',
        'carousel-optimized/Our Lady Queen of Peace, Jos/eefb36ee-f522-4608-93df-a90cb4c633e9.JPG',
      ],
    },
    {
      title: 'Kindle School -Training',
      caseStudy: kindleSchoolCaseStudy,
      images: [
        'carousel-optimized/Kindle School -Training/0eb45ef0-40c6-423d-8ce2-452744e7faf4.JPG',
        'carousel-optimized/Kindle School -Training/1addd392-222a-4463-b145-caa33bd800f0.JPG',
        'carousel-optimized/Kindle School -Training/1e86757c-07dd-4606-9472-5761df673531.JPG',
        'carousel-optimized/Kindle School -Training/4d7ea2c2-3bf0-4a00-af39-a83f3d327740.JPG',
        'carousel-optimized/Kindle School -Training/aa76792a-6951-43d8-ae03-302c7a9e618a.JPG',
        'carousel-optimized/Kindle School -Training/f93b5a49-09ad-497c-abf2-eecb071c80d0.JPG',
      ],
    },
  ];

  const profileGrid = document.getElementById('companyProfileGrid');

  if (profileGrid) {
    const orderedCompanyProfileData = companyProfileData
      .filter((group) => group.caseStudy || group.caseStudies?.length)
      .concat(companyProfileData.filter((group) => !group.caseStudy && !group.caseStudies?.length));

    orderedCompanyProfileData.forEach((group) => {
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

      const caseStudies = group.caseStudies || (group.caseStudy ? [group.caseStudy] : []);
      card.classList.toggle('carousel-only', caseStudies.length === 0);
      if (caseStudies.length) {
        caseStudies.forEach((caseStudy) => {
          const caseStudyPlaceholder = document.createElement('div');
          caseStudyPlaceholder.className = 'case-study-placeholder';

          const caseStudyHeading = document.createElement('h4');
          caseStudyHeading.textContent = caseStudy.title;
          caseStudyPlaceholder.appendChild(caseStudyHeading);

          if (caseStudy.subtitle) {
            const caseStudySubtitle = document.createElement('h5');
            caseStudySubtitle.className = 'case-study-subtitle';
            caseStudySubtitle.textContent = caseStudy.subtitle;
            caseStudyPlaceholder.appendChild(caseStudySubtitle);
          }

          const appendCaseStudySection = (heading, text) => {
            const section = document.createElement('section');
            section.className = 'case-study-section';

            if (heading) {
              const sectionHeading = document.createElement('h5');
              sectionHeading.textContent = heading;
              section.appendChild(sectionHeading);
            }

            (Array.isArray(text) ? text : [text]).forEach((paragraphText) => {
              const paragraph = document.createElement('p');
              paragraph.textContent = paragraphText;
              section.appendChild(paragraph);
            });
            caseStudyPlaceholder.appendChild(section);
          };

          appendCaseStudySection('The need', caseStudy.need);
          appendCaseStudySection('Our contribution', caseStudy.contribution);

          if (caseStudy.focusAreas?.length) {
            const focusAreas = document.createElement('ul');
            caseStudy.focusAreas.forEach(([area, description]) => {
              const item = document.createElement('li');
              const strong = document.createElement('strong');
              strong.textContent = `${area}: `;
              item.appendChild(strong);
              item.appendChild(document.createTextNode(description));
              focusAreas.appendChild(item);
            });
            caseStudyPlaceholder.appendChild(focusAreas);
          }

          if (caseStudy.reflection) {
            appendCaseStudySection(null, caseStudy.reflection);
          }
          if (caseStudy.pta) {
            appendCaseStudySection('PTA engagement', caseStudy.pta);
          }
          if (caseStudy.result) {
            appendCaseStudySection('The result', caseStudy.result);
          }
          if (caseStudy.quote) {
            const reflection = document.createElement('section');
            reflection.className = 'case-study-section';

            const reflectionHeading = document.createElement('h5');
            reflectionHeading.textContent = 'A participant’s reflection';
            reflection.appendChild(reflectionHeading);

            const quote = document.createElement('blockquote');
            caseStudy.quote.forEach((text) => {
              const paragraph = document.createElement('p');
              paragraph.textContent = text;
              quote.appendChild(paragraph);
            });
            reflection.appendChild(quote);
            caseStudyPlaceholder.appendChild(reflection);
          }
          card.appendChild(caseStudyPlaceholder);
        });
      }

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
    if (src.startsWith('carousel-optimized/')) return src;
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
