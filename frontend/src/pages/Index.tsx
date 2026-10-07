import React from 'react';

// --- INTERFACES ---
export interface MenuItem {
  name: string;
  price: number;
  medPrice: number;
  largePrice: number;
  desc: string;
  image: string;
  theme: 'primary' | 'secondary';
}

// --- DATOS ---
const menuItems: MenuItem[] = [
  {
    name: "Jupichino Menta",
    price: 141,
    medPrice: 141,
    largePrice: 158,
    desc: "Frappé refrescante de menta cósmica coronado con crema batida y perlas crujientes de menta.",
    image: "https://lh3.googleusercontent.com/aida/AEtjO1W4yeDPUV2Dod6xMZDaiBfpwPAv3ufyliErcjoyqynxcRKGC11LX86AeLhzc9rCEFFNl1u-JcQ91GKLM9ijB81bKIIoku0h7dBApYPA_tVWY3_F_2n5Z45tHCqWdPzjwTmMSd4GSMV-XknYDjaBtWrOwnYLVt1IDja1I1ThAJ2gIqMB9Y-2GV_0jDaDot-qAnGF_eX-DSIsNxyvSTnzlrMeUL00SpSMPAcANblV3EzWaQ",
    theme: "primary"
  },
  {
    name: "Jupichino Gansito",
    price: 149,
    medPrice: 149,
    largePrice: 165,
    desc: "Frappé de moka chocolate con espirales de jarabe, crema batida, chispas de colores y pastelito Gansito entero.",
    image: "https://lh3.googleusercontent.com/aida/AEtjO1Uthn342aYIEOOckW5d4jHbpA3apaV_V3EURNy3XPsfXCXPHFGGCHgLllmZIlIZYeA4pfO22pbhUt244AKKf6VmRiPE0c9pyMamIUZo11rwBo9C0vG_wJKwbyXnzpq8Kwe-5zCq-MbudSNMJkgayVu_ni-ymI4vNjC4GYsS9v116veTA4kKxfG9ypKDHKszx0FNM8BZwjJaWihAz_U676wmy8G6-y1d8hmEw2hVcR85",
    theme: "secondary"
  },
  {
    name: "Jupichino Pingüino",
    price: 149,
    medPrice: 149,
    largePrice: 165,
    desc: "Frappé de vainilla cremosa con fudge de chocolate, chispitas multicolores y pastelito estilo Pingüino glaseado.",
    image: "https://lh3.googleusercontent.com/aida/AEtjO1XrUyrj064hJakqN5YS6AHYPERisgxwpxonxmo7MekrDzbuUSyqkhDiba-d2ytqbyt0_EL5yeZtOfT7Vawv3Y9BmoIfb_MIQDpLHh1zJXpYpLIW0cuLZ_x-ZRYL9-xXQLX_yWVuwPdYNa-mI-65xG7nBhrEKnLjrnwUCoKF-nPuEHVjZOZ9gNU2ewhHI20ULNRsMhpDN9kGIVX954bkqOssKPew3DOSTgBjeAwfku2w2Q",
    theme: "primary"
  },
  {
    name: "Jupichino Brownie",
    price: 154,
    medPrice: 154,
    largePrice: 170,
    desc: "Frappé cremoso de chocolate y caramelo con jarabe fundido y un suculento brownie de chocolate entero.",
    image: "https://lh3.googleusercontent.com/aida/AEtjO1VXewFeLjguIQQQ8TnoxWOC_QeIawjpS_zpD1DGI05YzeMykIsHeRWANB5p0QnhYZiln7rynAili5jr-vai2Gt9M5pClnkqLu65OWaaXxQrQgq930MMdy-vGYq0yMG48IQJmQaXQ5rk9oisKIeeQfcd2GKQ8r9VvJ6SXe3i7eRa28S79IfmMFprmWfV00jpPCVA73fQukn4f4sPuyaTqYV47yfhg2RBc_brK7FzCdl5",
    theme: "secondary"
  },
  {
    name: "Jupichino Ferrero",
    price: 142,
    medPrice: 142,
    largePrice: 158,
    desc: "Frappé cremoso de avellanas tostadas, crema batida, almendras fileteadas, drizzle de caramelo y bombón Ferrero Rocher.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlT1nn-zUUQk3AlOX8nUrUrwYcEPAJ3JJSLBNgK-pCNPVM1z2NaTWWn8OzSjQoXGqgPHYDtWk8QaQkqvk7pqSl5zv5iiTRdCSY_4XaGAbBkcqQrWBwzXcTBqJEemzmBv7Sk2QhImqpxHFNr3U-IjP8Cw93hF2IyinLE7bVUwq0i5yH8MULsuZQVzSSf9ZMbIA5air0CQVexvrgQiOyceGY4JkhiJnswkwlm4_Z1lXh",
    theme: "primary"
  },
  {
    name: "Jupichino Zero Sugar",
    price: 141,
    medPrice: 141,
    largePrice: 158,
    desc: "Frappé ligero sin azúcar con crema batida zero y discos de chocolate sin azúcar añadida. Sabor estelar sin culpa.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsId7XbDfuqKGBJ6MDRT0uo2V5PP9IECAYUrddW0xrHVsaARhLfaS4jcGosq_cEOJvMLpHD-oTuE7a9hXZPPhhzPhiowwofjizGMbZguyhXxcI97sA5Z_Q7dE5kpNSHkBLWwnllDPDm1sflJp6N_NKIA_199OxGrJEiYGJsaIkK83OYGPAgUVThtnK3v-12oCbtFbdikKK5ogPdUWQ5AJuGL57b0P1eFtDimaaReMq",
    theme: "secondary"
  }
];

const scheduleItems = [
  { day: 'Lunes', hours: '7:30 a.m. – 8:00 p.m.', isSunday: false },
  { day: 'Martes', hours: '7:30 a.m. – 8:00 p.m.', isSunday: false },
  { day: 'Miércoles', hours: '7:30 a.m. – 8:00 p.m.', isSunday: false },
  { day: 'Jueves', hours: '7:30 a.m. – 8:00 p.m.', isSunday: false },
  { day: 'Viernes', hours: '7:30 a.m. – 8:00 p.m.', isSunday: false },
  { day: 'Sábado', hours: '8:00 a.m. – 8:00 p.m.', isSunday: false },
  { day: 'Domingo', hours: '10:00 a.m. – 6:00 p.m.', isSunday: true },
];

// --- COMPONENTES ---

const AmbientBackdrop: React.FC = () => (
  <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
    <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full bg-primary-container/10 blur-[130px]"></div>
    <div className="absolute top-[40%] right-[-10%] w-[550px] h-[550px] rounded-full bg-secondary-container/15 blur-[140px]"></div>
    <div className="absolute bottom-10 left-[-5%] w-[500px] h-[500px] rounded-full bg-tertiary-container/10 blur-[120px]"></div>
  </div>
);

const TopNavBar: React.FC = () => (
  <header className="bg-surface/80 dark:bg-surface/80 backdrop-blur-md text-primary dark:text-primary docked full-width top-0 sticky z-50 border-b border-outline-variant/30 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
    <div className="flex justify-between items-center w-full px-6 md:px-12 max-w-7xl mx-auto h-20">
      <a className="flex items-center gap-3 group active:scale-95 transition-transform duration-150" href="#">
        <div className="w-11 h-11 rounded-full p-1 bg-surface-container-high/90 border border-primary/40 flex items-center justify-center overflow-hidden shadow-[0_0_12px_rgba(76,215,246,0.4)] group-hover:rotate-12 transition-transform duration-300">
          <img alt="Planeta Café Logo" className="w-full h-full object-contain rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVa5WZvTool4e5-rWlY02H1qXmihAaYlzScb1u5c4u9PGlOW0P-kh3DHdgc4xFBGYKdlu6RXiLMob6GgWDYHeqfBpKFO_YqXRAGBPMeDzt2Y4NzeWRS7PgNZmqvaeZCmaFPH3fi6zm0vEwelRMtM4Ij0CE9i5MKFL4uTjUAL2L6PZqpRvjkPCwmIGDOO9Qy9aRivyw0xJtrUHZmjczuyi4r5zbSlds0zg_9q3nxXaQ7dZKYxR6deLEdg" />
        </div>
        <span className="font-headline-md text-headline-md tracking-tight text-primary dark:text-primary font-bold">Planeta Café</span>
      </a>
      <nav className="hidden md:flex items-center space-x-8">
        <a className="font-label-lg text-label-lg text-primary dark:text-primary border-b-2 border-primary pb-1 font-semibold transition-all duration-200" href="#menu">Menú Galáctico</a>
        <a className="font-label-lg text-label-lg text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface transition-colors hover:text-primary dark:hover:text-primary" href="#experiencia">Laboratorio</a>
        <a className="font-label-lg text-label-lg text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface transition-colors hover:text-primary dark:hover:text-primary" href="#ubicacion">Ubicación</a>
       
      </nav>
      <div className="flex items-center gap-3">
        <a className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/40 bg-surface-container/60 hover:bg-surface-container-high text-primary hover:text-primary font-label-md text-label-md transition-all active:scale-95" href="https://wa.me/528139785447?text=Hola%20Planeta%20Café!%20Quiero%20hacer%20un%20pedido%20cósmico%20🚀" rel="noopener noreferrer" target="_blank">
          <span className="material-symbols-outlined text-[18px]">chat</span>
          <span>WhatsApp</span>
        </a>
        <a className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-secondary-container to-primary-container text-white font-label-md text-label-md shadow-[0_0_24px_-4px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_0px_rgba(219,39,119,0.6)] active:scale-95 transition-all duration-200" href="https://www.didi-food.com/es-MX/food/store/5764615546105236394/Planeta-Caf%C3%A9/?channel=10&cityId=52140500&lat=20.741819&lng=-103.385078&ddlCode=q9TJD0&area=MX&lang=es-MX&appKey=ds&dp_sub2=googlemap&redirectType=2&params=dp_sub1%3D5764615546105236394%26dp_sub2%3Dgooglemap%26dp_sub3%3Des-MX%26dp_sub4%3D10%26dp_sub5%3D52140500%26dp_sub6%3D20.741819%26dp_sub7%3D-103.385078" target="_blank" rel="noopener noreferrer">
          <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_bag</span>
          <span>Ordenar Ahora</span>
        </a>
      </div>
    </div>
  </header>
);

const HeroSection: React.FC = () => (
  <section className="relative pt-12 md:pt-20 pb-20 md:pb-28 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <h1 className="font-display text-display font-bold text-on-surface leading-[1.08] tracking-tight">
            ¡Una nueva experiencia aterrizó desde <span className="bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">otra galaxia!</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Explora café de especialidad y bebidas galácticas en Guadalajara donde cada sorbo desafía la gravedad. Granos de altura mexicana infusionados con alquimia cósmica.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a className="px-7 py-3.5 rounded-full bg-gradient-to-r from-secondary-container via-[#d946ef] to-primary-container text-white font-label-lg text-label-lg font-semibold shadow-[0_0_32px_-4px_rgba(219,39,119,0.55)] hover:shadow-[0_0_40px_rgba(6,182,212,0.7)] active:scale-95 transition-all duration-200 flex items-center gap-2" href="#menu">Explorar Menú Cósmico</a>
            <a className="px-6 py-3.5 rounded-full bg-surface-container/70 border border-primary/50 text-on-surface hover:text-primary font-label-lg text-label-lg active:scale-95 transition-all duration-150 flex items-center gap-2 backdrop-blur-sm" href="https://wa.me/528139785447?text=Hola%20Planeta%20Café!%20Quiero%20hacer%20un%20pedido%20cósmico%20🚀" rel="noopener noreferrer" target="_blank">
              <span className="material-symbols-outlined text-primary text-[20px]">chat</span>
              <span>Chatear por WhatsApp</span>
            </a>
          </div>
        </div>
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[340px] h-[340px] rounded-full border border-primary/20 animate-spin" style={{ animationDuration: '25s' }}></div>
            <div className="w-[420px] h-[420px] rounded-full border border-secondary/20 border-dashed animate-spin" style={{ animationDuration: '40s', animationDirection: 'reverse' }}></div>
            <div className="w-[280px] h-[280px] rounded-full bg-secondary-container/20 blur-[80px]"></div>
          </div>
          <div className="relative z-10 w-full max-w-sm">
            <div className="relative rounded-3xl overflow-hidden bg-surface-container/60 backdrop-blur-xl border border-outline-variant/40 p-4 shadow-[0_0_50px_-10px_rgba(6,182,212,0.3)] group">
              <div className="overflow-hidden rounded-2xl relative aspect-square">
                <img alt="Bebidas Galácticas Planeta Café" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkBCIRB77Qva33XvOwY_EOeEzUrZ6wMZzueytP5azLstW3lH0NB7xhTW0XkV3Eg4se18LoFCIeQJr4gAWh4Ksw_2BNxjSYF2qIsqcmiXjJ13VvWz8oumoq_a-kXtnh654CQlRqDp4xW3ZobuHm4eUssr7iAOrtAIPPD7GTpSiU3Ct9NzniuT7gm32JGQWHPKu38Y6rRNnvgoiLfhNA8qSivswPPzzI2qyONutrfR-aH2QSOE2EgxZ8kA" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent"></div>
              </div>
              <div className="mt-4 px-2 pb-1 flex justify-between items-center">
                <div>
                  <h4 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Frappés Galácticos</h4>
                  <p className="font-body-sm text-body-sm text-primary">Ven y conocenos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const MenuItemCard: React.FC<{ item: MenuItem }> = ({ item }) => {
  const isPrimary = item.theme === 'primary';
  const shadowColor = isPrimary ? 'rgba(76,215,246,0.35)' : 'rgba(219,39,119,0.35)';
  const hoverTextClass = isPrimary ? 'group-hover:text-primary' : 'group-hover:text-secondary';
  const priceColorClass = isPrimary ? 'text-primary' : 'text-secondary';
  const hoverBgClass = isPrimary ? 'hover:bg-primary-container hover:text-on-primary' : 'hover:bg-secondary-container hover:text-white';
  const wpMessage = `Hola! Quiero pedir un ${item.name} 🚀`;

  return (
    <div className={`cosmic-gradient-border rounded-3xl bg-surface-container/70 backdrop-blur-md p-6 flex flex-col justify-between hover:shadow-[0_0_35px_-5px_${shadowColor}] transition-all duration-300 group`}>
      <div>
        <div className="relative overflow-hidden rounded-2xl h-60 bg-surface-container-lowest mb-5 flex items-center justify-center p-2">
          <img alt={item.name} className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500 rounded-xl" src={item.image} />
        </div>
        <div className="flex justify-between items-start mb-2">
          <h3 className={`font-headline-md text-headline-md font-bold text-on-surface ${hoverTextClass} transition-colors`}>{item.name}</h3>
          <div className="text-right">
            <span className={`font-display font-bold text-headline-md ${priceColorClass}`}>${item.price}</span>
            <span className="text-body-sm text-on-surface-variant block">MXN</span>
          </div>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">{item.desc}</p>
        <div className="flex items-center gap-2 mb-6 p-2 rounded-xl bg-surface-container-high/40 border border-outline-variant/20 font-label-sm text-label-sm text-on-surface-variant">
          <span className={`font-semibold ${priceColorClass}`}>Mediano: ${item.medPrice} MXN</span>
          <span>•</span>
          <span>Grande: ${item.largePrice} MXN</span>
        </div>
      </div>
      <a className={`w-full py-3 rounded-xl bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold transition-all duration-200 flex items-center justify-center gap-2 border border-outline-variant/30 active:scale-95 ${hoverBgClass}`} href={`https://wa.me/528139785447?text=${encodeURIComponent(wpMessage)}`} rel="noopener noreferrer" target="_blank">
        <span className="material-symbols-outlined text-[18px]">chat</span>
        <span>Pedir por WhatsApp</span>
      </a>
    </div>
  );
};

const ExperienceSection: React.FC = () => (
  <section className="py-20 md:py-28 relative overflow-hidden" id="experiencia">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 relative flex items-center justify-center py-6">
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 via-secondary/15 to-transparent rounded-3xl blur-[80px] pointer-events-none -z-10"></div>
          <div className="relative w-full grid grid-cols-12 gap-4 items-center" style={{ perspective: '1200px' }}>
            <div className="col-span-7 space-y-4 relative z-10">
              <div className="group relative rounded-3xl overflow-hidden border border-secondary/40 bg-surface-container-high/60 backdrop-blur-md shadow-2xl transition-all duration-500 hover:border-secondary/60">
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img alt="Galleta Zanahoria" className="w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida/AEtjO1XZrzMA3h2y2SKugbjRl8xBb0cnOuiJkrDmvege1M_6sxJ-8qISIjvooJYHOgqwqj8q3cWrf3yKI3s5x4VividRVEhyUptmoCUWFtJhMxfaXVoPxD-Uns-3Hv1oKXSPz1Q0SqWB7FcKsZ_LJ28msRSPYc7o6-BSNpW8NvT9d_0kXiO7Z0_T60Vdv2B4-WbcwQ1cVAVr-PvbkPj2OdHtvzOmdzyP8BEazx1vQvDVvMDFJg" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent"></div>
                </div>
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-surface-container-lowest/80 backdrop-blur-md border border-outline-variant/30">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
                      <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">stars</span> Imperdibles
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-body-sm text-on-surface-variant line-through text-[12px]">MX$110</span>
                      <span className="font-headline-sm text-headline-sm font-bold text-secondary">MX$49</span>
                    </div>
                  </div>
                  <p className="font-headline-sm text-[16px] font-semibold text-on-surface mt-1">Galleta Zanahoria</p>
                </div>
              </div>
            </div>
            <div className="col-span-5 relative -ml-10 z-30">
              <div className="relative transition-transform duration-500 hover:scale-105" style={{ transform: 'rotate(3deg) translateY(-8px)' }}>
                <div className="absolute -inset-4 rounded-3xl bg-secondary-container/30 blur-2xl -z-10"></div>
                <div className="relative rounded-3xl p-2.5 bg-gradient-to-b from-secondary/40 via-surface-container-high to-primary/30 border border-secondary/50 shadow-[0_25px_50px_-12px_rgba(219,39,119,0.45)] backdrop-blur-xl">
                  <div className="relative rounded-2xl overflow-visible">
                    <div className="absolute -top-3 -right-3 z-30 px-3 py-1 rounded-full bg-secondary-container text-white font-label-sm text-label-sm font-bold shadow-[0_0_15px_rgba(219,39,119,0.7)] flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                      <span>Estelar</span>
                    </div>
                    <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-surface-container-lowest">
                      <img alt="Jupichino Gansito Mediano" className="w-full h-full object-cover object-center scale-105 hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida/AEtjO1Uthn342aYIEOOckW5d4jHbpA3apaV_V3EURNy3XPsfXCXPHFGGCHgLllmZIlIZYeA4pfO22pbhUt244AKKf6VmRiPE0c9pyMamIUZo11rwBo9C0vG_wJKwbyXnzpq8Kwe-5zCq-MbudSNMJkgayVu_ni-ymI4vNjC4GYsS9v116veTA4kKxfG9ypKDHKszx0FNM8BZwjJaWihAz_U676wmy8G6-y1d8hmEw2hVcR85" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 space-y-6" id="nosotros">
          <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">
            El punto de encuentro para astronautas urbanos, amantes del café y creadores de contenido
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Planeta Café nació en Guadalajara con una misión clara: redefinir la cultura cafetera fusionando la precisión científica del café de especialidad con una atmósfera sideral inmersiva. No servimos simples bebidas; curamos expediciones de sabor.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const LocationSection: React.FC = () => (
  <section className="py-20 bg-surface-container-lowest border-t border-outline-variant/20 relative" id="ubicacion">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
        <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">
          Aterriza en Nuestra Base en Guadalajara
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Haz una parada en tu órbita diaria. Estamos ubicados en el corazón del corredor gastronómico más vibrante de Guadalajara.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-outline-variant/30 relative min-h-[380px] bg-surface-container-high group flex flex-col justify-end p-6">
          <img 
            className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-700" 
            alt="Mapa vista aérea estilo dark-mode con líneas neón en Guadalajara" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmqkxLShPkwwPhAN9CZKWW1vwoic3TVQZUrrPfTF5TfYbE8Cj_BWxziVq6oIwRzP2J9G4SATTi0kXIqUBBEJ3tHoLCneo7YMEiGU0dBpuU6QPiU4XH3x35WfH-bb2ZIl7XOh9MW4h_rDQHPPC3UVdAdSSefONFc-TlIiPHBgg-DrNv03NeXYfEAH7rPt2qfr5uPB3ix9OYyKIm6hKiRBKxFVvSqeMeMILGBPGpSZ70" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent"></div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
            <div className="relative flex items-center justify-center">
              <span className="animate-ping absolute inline-flex h-12 w-12 rounded-full bg-primary opacity-75"></span>
              <div className="relative w-10 h-10 rounded-full bg-primary flex items-center justify-center text-surface-container-lowest shadow-[0_0_20px_#4cd7f6]">
                <img alt="Planeta Café Pin" className="w-6 h-6 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBspyi5cgbjnXU7DC2TvtlTsVC2oPjUL-cbVxwvp8y7WVdQpPyo0m3FrNHMFo4qN9WH9LG59hgryXJDRmf4B2vI0NBAsaWC3kWPbafuNcGUeW-bJMbmNDf_RV6RRTUDuKvOAt_yrA1YUpO7rkG8QOvBPoGBLwcvb06wsF0lDVYc1_RKjEZAGaWyxhX5t86o4H04L7WJNHZUcCTniNULpY4AgoFtGkCajuJ13Rk2gEslh64olqcCmcTNnA" />
              </div>
            </div>
            <span className="mt-2 px-3 py-1 rounded-full bg-surface-container-highest/90 border border-primary/50 text-primary font-label-sm text-label-sm font-bold shadow-lg">
              PLANETA CAFÉ GDL
            </span>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-surface/90 border border-outline-variant/40 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-[28px]">explore</span>
              <div>
                <p className="font-label-md text-label-md text-on-surface font-semibold">Anillo Perif. Nte. Manuel Gómez Morín 221-LOCAL E 11 A</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">San José del Bajío, 45150 Zapopan, Jal.</p>
              </div>
            </div>
            <a className="px-5 py-2.5 rounded-full bg-primary hover:bg-primary-fixed text-on-primary font-label-md text-label-md font-bold transition-all active:scale-95 shadow-[0_0_15px_rgba(76,215,246,0.4)] flex items-center gap-2" href="https://maps.app.goo.gl/V61MvinB4mzC6Yyr8" rel="noopener noreferrer" target="_blank">
              <span>Abrir en Google Maps</span>
              <span className="material-symbols-outlined text-[16px]">open_in_new</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 rounded-3xl bg-surface-container/70 border border-outline-variant/30 p-8 backdrop-blur-md flex flex-col justify-between space-y-6">
          <div className="space-y-6">
            <h3 className="font-headline-md text-headline-md font-bold text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">schedule</span> Horarios de Vuelo
            </h3>
            <div className="space-y-2.5 pt-1">
              {scheduleItems.map((item, index) => (
                <div key={index} className={`flex justify-between items-center py-2 ${index !== scheduleItems.length - 1 ? 'border-b border-outline-variant/20' : ''}`}>
                  <span className="font-body-md text-body-md text-on-surface font-medium">{item.day}</span>
                  <span className={`font-label-md text-label-md font-bold ${item.isSunday ? 'text-secondary' : 'text-primary'}`}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <a className="w-full py-3.5 rounded-full bg-gradient-to-r from-secondary-container to-primary-container text-white font-label-lg text-label-lg font-bold shadow-[0_0_24px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(219,39,119,0.5)] active:scale-95 transition-all text-center flex items-center justify-center gap-2" href="https://wa.me/528139785447?text=Hola!%20Deseo%20hacer%20un%20pedido%20para%20pasar%20a%20recoger%20🛸" rel="noopener noreferrer" target="_blank">
            <span className="material-symbols-outlined text-[20px]">send</span>
            <span>Mensaje Directo para Pick-up</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);


// --- APP PRINCIPAL ---

const PlanetaCafeApp: React.FC = () => {
  return (
    <div className="bg-background text-on-surface antialiased overflow-x-hidden selection:bg-secondary-container selection:text-white dark">
      <AmbientBackdrop />
      <TopNavBar />
      <HeroSection />

      {/* 1. SECCIÓN DE MENÚ */}
      <section className="py-12 border-t border-outline-variant/20 bg-surface-container-lowest" id="menu">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface mt-1">Bebidas de Otra Órbita</h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                Formulaciones sensoriales creadas en nuestro laboratorio espacial con granos de Chiapas, Oaxaca y Puebla.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, idx) => (
              <MenuItemCard key={idx} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 2. SECCIÓN DE EXPERIENCIA (Laboratorio) */}
      <ExperienceSection />

      {/* 3. SECCIÓN DE UBICACIÓN Y HORARIOS (Aterriza en nuestra base) */}
      <LocationSection />

      {/* BOTÓN FLOTANTE DE WHATSAPP */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-highest/90 border border-primary/40 text-on-surface shadow-2xl backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
          <span className="font-label-md text-label-md font-semibold text-primary">¿Antojo cósmico? Escríbenos</span>
        </div>
        <a aria-label="Contactar por WhatsApp" className="relative group w-14 h-14 rounded-full bg-gradient-to-tr from-primary-container via-[#10b981] to-primary flex items-center justify-center text-surface-container-lowest shadow-[0_0_25px_rgba(6,182,212,0.6)] hover:shadow-[0_0_35px_rgba(219,39,119,0.7)] hover:scale-105 active:scale-95 transition-all duration-200" href="https://wa.me/528139785447?text=Hola%20Planeta%20Café!%20Tengo%20un%20antojo%20cósmico%20✨" rel="noopener noreferrer" target="_blank">
          <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
        </a>
      </div>

      {/* FOOTER */}
      <footer className="bg-surface-container-lowest border-t border-outline-variant/20">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="font-headline-md text-headline-md font-bold text-primary">Planeta Café</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-center">
            <a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors duration-200 hover:underline" href="#">Aviso de Privacidad</a>
            <a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors duration-200 hover:underline" href="#">Términos Cósmicos</a>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant text-center md:text-right">
            © 2025 Planeta Café. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PlanetaCafeApp;