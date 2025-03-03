import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss',
})
export class TestimonialComponent {
  data = [
    {
      src: './image/depoimentos/vasco-prado.jfif',
      text: 'Dentre os jovens escultores gaúchos, Maia se destaca por sua inventiva e - o que é muito im-portante para quem começa - sua incansável dedicação no aprender o artezanato da escultura.',
      title: 'Vasco Prado',
    },
    {
      src: './image/depoimentos/josue-guimaraes.jfif',
      text: 'Suas te rracotas recordam o gesto primordial da criação quando a água e o espírito se associaram ao pó, dando-lhes a vida". Armindo Trevisam "Um trabalho humilde e duro, incansável, buscando descobrir nas pessoas alguma coisa que os outros não enxergam".',
      title: 'Josué Guimarães',
    },
    {
      src: './image/depoimentos/luiz-fernando-verissimo.jfif',
      text: 'Só uma mente sofisticada, no comando de talento incomum conceberia esta mescla de simplicidade e ironia, do simples e do sugestivo, que existe em cada objeto mulher do Maia.',
      title: 'Luiz Fernando Veríssimo',
    },
    {
      src: './image/depoimentos/moacyr-scliar.jfif',
      text: 'Como em Di Cavalcanti, temos aqui uma arte essencialmente brasileira, o que o torna mais próximo de nossos sentimentos e emoções.',
      title: 'Moacir Scliar',
    },
    {
      src: './image/depoimentos/maria-amelia-bulhoes.jfif',
      text: 'Nilton Maia transforma matéria inerte em figuras cheias de vida, capturando a essência do cotidiano com sensibilidade. Suas esculturas revelam a beleza do simples, convidando-nos a enxergar além do óbvio.',
      title: 'Maria Amélia Bulhões',
    },
  ];
}
