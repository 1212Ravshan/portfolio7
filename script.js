let language = document.querySelector(".language"),
     link = document.querySelectorAll("a"),
     head = document.querySelector(".head"),
     head2 = document.querySelector(".head2"),
     button = document.querySelector(".button"),
     aboutme = document.querySelector(".aboutme"),
     title = document.querySelector(".title"),
     imgtext = document.querySelector(".imgtext"),
     imgtitle = document.querySelector(".imgtitle"),
     imgtexd = document.querySelector(".imgtexd"),
     imdtitle = document.querySelector(".imdtitle"),
     imdtext = document.querySelector(".imdtext"),
     hre = document.querySelector(".hre"),
     per = document.querySelector(".per"),
     soc = document.querySelector(".soc"),
     raush = document.querySelector(".raush");
     rausd = document.querySelector(".rausd");
     rausb = document.querySelector(".rausb");
     rauss = document.querySelector(".rauss");



link.forEach(el=>{
     el.addEventListener("click", ()=>{
          language.querySelector(".active").classList.remove("active");
          el.classList.add("active");

          let attr = el.getAttribute("language")

          head.textContent = data[attr].head
          head2.textContent = data[attr].head2
          button.textContent = data[attr].button
          aboutme.textContent = data[attr].aboutme
          title.textContent = data[attr].title
          imgtext.textContent = data[attr].imgtext
          imgtitle.textContent = data[attr].imgtitle
          imgtexd.textContent = data[attr].imgtexd
          imdtitle.textContent = data[attr].imdtitle
          imdtext.textContent = data[attr].imdtext
          hre.textContent = data[attr].hre
          per.textContent = data[attr].per
          soc.textContent = data[attr].soc
          raush.textContent = data[attr].raush
          rausd.textContent = data[attr].rausd
          rausb.textContent = data[attr].rausb
          rauss.textContent = data[attr].rauss
        })
})

let data = {
     english: {
          head: "GRAPHIC DESIGNER, WEBDESIGNER & WEBFLOW EXPERT",
          head2: "Impactful branding and high-end Webflow websites for creatives.",
          button: "Lets start project together",
          aboutme: "Hi I'm Ravshan.Creative visual thinker.Take a look at my graphic design work, learn about me,or get in touch to chat.I can craft your graphic identiy, edit a corporate brand book, create your entire webdesign and develop your website : I ensure the continuity of your brandidentity and support you during each key step of your project.",
          title: "Play football",
          imgtext: "Without football my life is worth nothing",
          imgtitle: "Reading books",
          imgtexd: "A room without book is a like body without soul",
          imdtitle: "Play chess",
          imdtext: "Life is like a game of chess you don't want to waste a move",
          hre: "Say hello",
          per: "If you are interested in working with us or just want to say hello simply drop me as a linel omurbekuulravshan@gmail.com",
          soc: "Social Medias",
          raush: "About",
          rausd: "Contacts", 
          rausb: "Form",
          rauss: "Hobby",
        },
     russian: {
          head: "ГРАФИЧЕСКИЙ ДИЗАЙНЕР, ВЕБ-ДИЗАЙНЕР и ЭКСПЕРТ WEBFLOW",
          head2: "Эффектный брендинг и высокое качество Сайты Webflow для креативщиков.",
          button: "Начнем проект вместе",
          aboutme: "Привет я Равшан. Творческий визуальный мыслитель. Взгляните на мои работы по графическому дизайну, узнайте обо мне или свяжитесь с нами, чтобы пообщаться. Я могу создать вашу графику айдентика, отредактируйте корпоративный брендбук, создайте весь свой веб-дизайн и разработайте свой сайт: я обеспечиваю преемственность вашего брендаидентифицировать и поддерживать вас на каждом ключевом этапе вашего проекта.",
          title: "Играть футбол",
          imgtext: "Без футбола моя жизнь ничего не стоит",
          imgtitle: "Читать книги",
          imgtexd: "Комната без книги, как тело без души",
          imdtitle: "Играть в шахматы",
          imdtext: "Жизнь похожа на игру в шахматы, вы не хотите терять ни одного хода",
          hre: "Скажи привет",
          per: "Если вы заинтересованы в сотрудничестве с нами или просто хотите поздороваться, просто напишите мне письмо omurbekuulravshan@gmail.com",
          soc: "Социальные сети",
          raush: "Обо мне",
          rausd: "Контакты",
          rausb: "Форма",
          rauss: "Хобби",
        }
}



function scrolll() {
    var left = document.querySelector(".scroll-images");
    left.scrollBy(350, 0)
}
function scrollr() {
    var right = document.querySelector(".scroll-images");
    right.scrollBy(-350, 0)
}