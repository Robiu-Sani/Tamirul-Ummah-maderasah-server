export interface FeesStructure {
  nasaariToSecondGrade?: number; // নাসারী-দ্বিতীয় শ্রেণি পর্যন্ত
  thirdToFifthGrade?: number; // তৃতীয়-৫ম শ্রেণি পর্যন্ত
  sixthToAlimGrade?: number; // ষষ্ঠ-আলিম শ্রেণি পর্যন্ত

  admissionFee?: number; // ভর্তি ফি বাবদ
  establishmentFee?: number; // সংস্থাপন (খাট+টেবিল)

  aliaTuitionFee?: number; // আলিয়া টিউশন ফি
  aliaAccommodationFee?: number; // আলিয়া আবাসন ফি
  aliaMonthlyFoodFee?: number; // আলিয়া মাসিক খাবার
  aliaOtherFees?: number; // আলিয়া অন্যান্য ফি

  hifzAdmissionFormFee?: number; // হিফজ ভর্তি ফরম ফি
  hifzNewAdmissionFee?: number; // হিফজ নতুন ভর্তি ফি
  hifzRenewalAdmissionFee?: number; // হিফজ ভর্তি নবায়ন ফি (আবাসিক)
  hifzTuitionFee?: number; // হিফজ টিউশন ফি
  hifzMonthlyFoodFee?: number; // হিফজ মাসিক খাবার
  hifzAccommodationAndPreservationFee?: number; // হিফজ আবাসন ও সংরক্ষণ ফি

  hifzChild?: number; // হিফজ শিশু
  hifzFirstToSecondGrade?: number; // হিফজ প্রথম-দ্বিতীয়
  hifzThirdToSixthGrade?: number; // হিফজ তৃতীয়-ষষ্ঠ

  hifzSemesterExamFee?: number; // হিফজ সেমিস্টার পরীক্ষার ফি
  hifzDigitalExamFee?: number; // হিফজ ডিজিটালিয়ার পরীক্ষার ফি
}
