interface LabResult {
    test: string;
    result: string;
  }
  
  interface MedicalRecord {
    date: string;
    prescriptions: string;
    medication: string;
    labResults: LabResult[];
    hospital: string;
    nextVisit?: string;
  }
  
  export interface UserProfilePageProps {
    records: MedicalRecord[];
  }


export const patientData: MedicalRecord[]  =[
    {
      date: '2024-09-01',
      prescriptions: 'Amoxicillin 500mg',
      medication: 'Ibuprofen 200mg',
      labResults: [
        { test: 'Blood Sugar', result: 'Normal' },
        { test: 'Cholesterol', result: 'High' }
      ],
      hospital: 'City Medical Center',
      nextVisit: '2024-10-01'
    },
    {
      date: '2024-08-15',
      prescriptions: 'Paracetamol 500mg',
      medication: 'None',
      labResults: [
        { test: 'Hemoglobin', result: 'Normal' }
      ],
      hospital: 'Greenfield Clinic',
      nextVisit: '2024-09-15'
    },
    {
      date: '2024-07-20',
      prescriptions: '',
      medication: 'Aspirin 100mg',
      labResults: [],
      hospital: 'Lakeview Hospital',
      nextVisit: ''
    },
    {
      date: '2024-06-10',
      prescriptions: 'Azithromycin 250mg',
      medication: 'Vitamin D 1000 IU',
      labResults: [
        { test: 'Vitamin D', result: 'Low' }
      ],
      hospital: 'Springfield Health',
      nextVisit: '2024-07-10'
    }
  ];