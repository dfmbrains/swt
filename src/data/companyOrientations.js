import MedicalImg from '../assets/imgs/medic.jpg';
import EnergeticImg from '../assets/imgs/energetic.jpg';
import AviaImg from '../assets/imgs/avia.png';
import AutoImg from '../assets/imgs/auto.jpg';

export const companyOrientations = [
   {
      title: {ru: 'Медицинская промышленность', en: ''},
      subtitle: {ru: 'производства медицинской электроники', en: ''},
      img: MedicalImg
   },
   {
      title: {ru: 'Автомобильная промышленность', en: ''},
      subtitle: {ru: 'Поставка электронных компонентов для автомобильной промышленности', en: ''},
      img: EnergeticImg
   },
   {
      title: {ru: 'Авиационная промышленность', en: ''},
      subtitle: {ru: 'Электронные компоненты для авиационного космического оборудования', en: ''},
      img: AviaImg
   },
   {
      title: {ru: 'Энергетика', en: ''},
      subtitle: {ru: 'Промышленная электроника и электротехническая линия продукций', en: ''},
      img: AutoImg
   }
]