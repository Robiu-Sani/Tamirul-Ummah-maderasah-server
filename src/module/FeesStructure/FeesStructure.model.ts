import mongoose from 'mongoose';
import { FeesStructure } from './FeesStructure.interface';

const FeesStructureSchema = new mongoose.Schema<FeesStructure>(
  {
    nasaariToSecondGrade: { type: Number, required: false },
    thirdToFifthGrade: { type: Number, required: false },
    sixthToAlimGrade: { type: Number, required: false },

    admissionFee: { type: Number, required: false },
    establishmentFee: { type: Number, required: false },

    aliaTuitionFee: { type: Number, required: false },
    aliaAccommodationFee: { type: Number, required: false },
    aliaMonthlyFoodFee: { type: Number, required: false },
    aliaOtherFees: { type: Number, required: false },

    hifzAdmissionFormFee: { type: Number, required: false },
    hifzNewAdmissionFee: { type: Number, required: false },
    hifzRenewalAdmissionFee: { type: Number, required: false },
    hifzTuitionFee: { type: Number, required: false },
    hifzMonthlyFoodFee: { type: Number, required: false },
    hifzAccommodationAndPreservationFee: { type: Number, required: false },

    hifzChild: { type: Number, required: false },
    hifzFirstToSecondGrade: { type: Number, required: false },
    hifzThirdToSixthGrade: { type: Number, required: false },

    hifzSemesterExamFee: { type: Number, required: false },
    hifzDigitalExamFee: { type: Number, required: false },
  },
  {
    timestamps: true,
  },
);

const FeesStructureModel = mongoose.model('fee-structure', FeesStructureSchema);
export default FeesStructureModel;
