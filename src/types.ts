export type Language = 'en' | 'ar';

export type SectionId = 'home' | 'about' | 'gallery' | 'services' | 'store' | 'contact';

export interface NavItem {
  id: SectionId;
  labelEn: string;
  labelAr: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', labelEn: 'Home', labelAr: 'الرئيسية' },
  { id: 'about', labelEn: 'About Us', labelAr: 'عن الشركة' },
  { id: 'gallery', labelEn: 'Gallery', labelAr: 'المعرض' },
  { id: 'services', labelEn: 'Services', labelAr: 'الخدمات' },
  { id: 'store', labelEn: 'Store', labelAr: 'المتجر' },
  { id: 'contact', labelEn: 'Contact', labelAr: 'اتصل بنا' },
];

export interface SiteContent {
  companyNameAr: string;
  companyNameEn: string;
  subtitleEn: string;
  subtitleAr: string;
  kickerEn: string;
  kickerAr: string;
  descriptionEn: string;
  descriptionAr: string;
  emptySectionNoticeEn: string;
  emptySectionNoticeAr: string;
  backHomeEn: string;
  backHomeAr: string;
  copyNameEn: string;
  copyNameAr: string;
  copiedEn: string;
  copiedAr: string;
  footerRightsEn: string;
  footerRightsAr: string;
  footerCompanyEn: string;
  footerCompanyAr: string;
  deploymentGuideEn: string;
  deploymentGuideAr: string;
  aboutUsArParagraphs: string[];
  aboutUsEnParagraphs: string[];
  services: ServiceItem[];
  engineerMahmoudAr: string;
  engineerMahmoudEn: string;
  engineerMahmoudImage: string;
  engineerFarqadAr: string;
  engineerFarqadEn: string;
  engineerFarqadImage: string;
  locationAr: string;
  locationEn: string;
  phones: string[];
  email: string;
}

export interface ServiceItem {
  id: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
}

export const SITE_CONTENT: SiteContent = {
  companyNameAr: 'شركة الطاحونة للمقاولات العامة المحدودة',
  companyNameEn: 'Al-Tahoona General Contracting Co. Ltd.',
  subtitleEn: 'Central Air Conditioning · HVAC Systems · General Contracting',
  subtitleAr: 'التكييف المركزي · أنظمة التبريد والتهوية · المقاولات العامة',
  kickerEn: 'Central Air Conditioning · HVAC Engineering · Authorized YORK Distributor',
  kickerAr: 'التكييف المركزي · أنظمة التبريد HVAC · وكيل معتمد ليورك YORK',
  descriptionAr:
    'شركة متخصصة لأعمال التكييف المركزي وكيل معتمد لشركة جونسون كونترولز العالمية (يورك) في العراق لأعمال الصيانة والتشغيل والنصب وإعادة التأهيل وخدمات ما بعد البيع وتجهيز قطع الغيار الأصلية. خبرة في العمل لأكثر من عشرين عاماً بكوادر هندسية أكاديمية متخصصة ومتدربة على أيدي أفضل الخبراء داخل وخارج العراق. تقوم شركتنا بإدارة أعمال التشغيل والصيانة لكثير من المشاريع الحكومية من مطارات ومستشفيات والكثير من المباني الحكومية والمشاريع الخاصة.',
  descriptionEn:
    'A specialized company in central air conditioning works and an authorized distributor for Johnson Controls International (YORK) in Iraq for maintenance, operation, installation, rehabilitation, after-sales services, and genuine spare parts supply. With over twenty years of industry experience, driven by specialized academic engineering cadres trained by top experts inside and outside Iraq, our company manages operation and maintenance works for numerous landmark governmental projects—including airports, hospitals, public buildings, as well as prestigious private sector projects.',
  emptySectionNoticeEn: 'This section is currently being prepared.',
  emptySectionNoticeAr: 'هذا القسم قيد الإعداد حالياً.',
  backHomeEn: 'Return to Main Page',
  backHomeAr: 'العودة إلى الصفحة الرئيسية',
  copyNameEn: 'Copy Company Name',
  copyNameAr: 'نسخ اسم الشركة',
  copiedEn: 'Copied!',
  copiedAr: 'تم النسخ!',
  footerCompanyEn: 'Al-Tahoona General Contracting Co. Ltd. · Central Air Conditioning & HVAC Systems',
  footerCompanyAr: 'شركة الطاحونة للمقاولات العامة المحدودة · أنظمة التكييف المركزي والتبريد',
  footerRightsEn: 'All rights reserved © 2026',
  footerRightsAr: 'جميع الحقوق محفوظة © 2026',
  deploymentGuideEn: 'GitHub Pages Deployment Guide',
  deploymentGuideAr: 'دليل النشر (GitHub Pages)',
  aboutUsArParagraphs: [
    'نحن شركة الطاحونة للمقاولات العامة المحدودة يسعدنا ان نقدم انفسنا كأحد الشركات المساهمة في انماء جانب من جوانب الاقتصاد الوطني في قطاع المقاولات وفق خطط التنمية حيث تأسست شركتنا في سنة 2003 ومصنفة درجة خامسة ميكانيك – كهرباء برأس مال قدره مليار دينار عراقي و تركز نشاط الشركة في مجال اعمال المقاولات العامة للمباني لخدمات التدفئة والتبريد المركزي للمشاريع الكبرى للقطاعين الحكومي و الاهلي ومختلف الخدمات الميكانيكية و الكهربائية.',
    'تأمل شركتنا ان تكون من الشركات الرائدة والمتميزة والمتخصصة في مجال اعمال النصب و الصيانة و التشغيل واعادة التأهيل لانظمة التكييف المركزي الكبيرة التي تحتوي مختلف انظمة التبريد مثل جلرات التبريد المائية و الهوائية بمختلف الاحجام والاجهزة الساندة لها من مضخات ودافعات هواء و ابراج تبريد سعيا" منها لتقديم افضل الخدمات للصالح العام.'
  ],
  aboutUsEnParagraphs: [
    'We, Al-Tahoona General Contracting Co. Ltd., are honored to present ourselves as a key contributor to developing vital facets of the national economy within the contracting sector in alignment with comprehensive development plans. Established in 2003 and classified as Grade 5 (Mechanical – Electrical) with a capital of one billion Iraqi Dinars, our core activities focus on general building contracting, specializing in central heating and cooling solutions for major public and private projects, alongside diverse mechanical and electrical services.',
    'Our company aspires to stand among the leading, distinguished, and specialized firms in the installation, maintenance, operation, and rehabilitation of large-scale central air conditioning systems. This encompasses versatile cooling technologies including water-cooled and air-cooled chillers of all capacities, complemented by vital auxiliary equipment—from water pumps and air handling units (AHUs) to cooling towers—striving steadfastly to deliver premier engineering services for the public good.'
  ],
  services: [
    {
      id: 'maintenance',
      titleAr: 'أعمال الصيانة والتشغيل',
      titleEn: 'Maintenance & Operations',
      descAr: 'التشغيل الأول لجميع جلرات يورك (YORK)، بالإضافة إلى تصليح وتأهيل جلرات التبريد بمختلف أنواعها وفق الأسس الهندسية وتصميم الشركة المصنعة.',
      descEn: 'Initial commissioning and startup of all YORK chillers, alongside expert repair and rehabilitation of all cooling chiller systems according to engineering standards and manufacturer designs.',
    },
    {
      id: 'spare-parts',
      titleAr: 'تجهيز قطع الغيار',
      titleEn: 'Genuine Spare Parts Supply',
      descAr: 'توفير وتجهيز قطع الغيار الأصلية لمنتجات شركة جونسن كونترولز (يورك).',
      descEn: 'Procuring and supplying certified original spare parts for all Johnson Controls (YORK) systems and equipment.',
    },
    {
      id: 'execution',
      titleAr: 'إشراف وتنفيذ منظومات التكييف',
      titleEn: 'HVAC Supervision & Execution',
      descAr: 'الإشراف والتنفيذ على أعمال نصب منظومات التكييف المركزي الكبرى (سواء المبردة بالماء أو الهواء)، مع كافة الأجهزة الساندة مثل أبراج التبريد، مضخات المياه، دافعات الهواء، والبوردات الكهربائية.',
      descEn: 'Direct supervision and turnkey execution of large-scale central air conditioning installations (water-cooled and air-cooled), including all auxiliary systems: cooling towers, water pumps, air handling units (AHUs), and electrical control panels.',
    },
    {
      id: 'facility-management',
      titleAr: 'إدارة المشاريع الخدمية',
      titleEn: 'Project & Facility Operations Management',
      descAr: 'الاستعداد للقيام بأعمال التشغيل اليومي لأنظمة التكييف المركزي في المواقع الكبرى الأهلية والحكومية التي لا تملك كوادر فنية، من خلال توفير كوادر أكاديمية مدربة للصيانة والتشغيل طوال أيام السنة.',
      descEn: 'Full readiness for round-the-clock, 365-day operation and maintenance of central HVAC systems in major public and private facilities lacking in-house technical personnel, powered by qualified, university-trained engineering cadres.',
    },
    {
      id: 'training',
      titleAr: 'دورات تدريبية',
      titleEn: 'Technical Training Programs',
      descAr: 'تنظيم دورات تدريبية نظرية وعملية للكوادر الفنية المكلفة بتشغيل منظومات التكييف المركزي.',
      descEn: 'Conducting comprehensive theoretical and practical hands-on training courses for technical teams responsible for operating central air conditioning facilities.',
    },
  ],
  engineerMahmoudAr: 'مهندس محمود',
  engineerMahmoudEn: 'Eng. Mahmoud',
  engineerMahmoudImage: `${import.meta.env.BASE_URL}assets/aistudio/image_b9cf93bb.png`,
  engineerFarqadAr: 'مهندس فرقد',
  engineerFarqadEn: 'Eng. Farqad',
  engineerFarqadImage: `${import.meta.env.BASE_URL}assets/aistudio/image_02a06ac9.png`,
  locationAr: 'العراق – بغداد – السنك – شارع مصرف الرافدين',
  locationEn: 'Iraq – Baghdad – Al-Sinak – Al-Rafidain Bank Street',
  phones: ['+964 770 022 8028', '+964 790 228 7421'],
  email: 'info@altahoona.com',
};
