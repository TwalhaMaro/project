const mongoose = require('mongoose');
const MedicalRecord = require('./models/Medicalrecord'); 

mongoose.connect('mongodb://127.0.0.1:27017/medical_records', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB successfully');

    populateDummyData();
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });

async function populateDummyData() {
  try {
    // Clear existing data
    await MedicalRecord.deleteMany({});

    // Create dummy records
    const dummyRecords = [
      {
        name: 'John Doe',
        age: 30,
        gender: 'Male',
        nationalId: '1234567890',
        email: 'dnamkaa@gmail.com',
        report: 'Patient: John Doe\n\nMedical Report:\n\nDate: June 13, 2023\n\nChief Complaint: The patient presented with persistent cough and fever.\n\nHistory of Present Illness: The symptoms started a week ago and have progressively worsened. The patient also complains of fatigue and loss of appetite.\n\nPhysical Examination: The patient appears tired, with a temperature of 101°F. Lung auscultation reveals crackles in the lower lobes. No other abnormalities noted.\n\nAssessment and Plan: Suspected pneumonia. Prescribed antibiotics (Amoxicillin) for 10 days. Advised rest and increased fluid intake. Follow-up appointment scheduled in one week for reevaluation.\n\nSigned,\nDr. Jane Smith\n'
    },
    {
        name: 'Jane Smith',
        age: 25,
        gender: 'Female',
        nationalId: '9876543210',
        email: 'janesmith@example.com',
        report: 'Patient: Jane Smith\n\nMedical Report:\n\nDate: June 14, 2023\n\nChief Complaint: The patient complained of persistent headaches and dizziness.\n\nHistory of Present Illness: The symptoms have been ongoing for the past two weeks, and the patient also reports sensitivity to light and noise.\n\nPhysical Examination: The patient appears alert and oriented. Neurological examination shows no focal deficits.\n\nAssessment and Plan: Suspected migraine. Prescribed analgesics and advised lifestyle modifications. Follow-up appointment scheduled in two weeks for evaluation.\n\nSigned,\nDr. Michael Johnson\n'
    },

    {
        name: 'David Wilson',
        age: 55,
        gender: 'Male',
        nationalId: '1357924680',
        email: 'davidwilson@example.com',
        report: 'Patient: David Wilson\n\nMedical Report:\n\nDate: June 16, 2023\n\nChief Complaint: The patient complained of chest pain and shortness of breath.\n\nHistory of Present Illness: The symptoms started this morning and are aggravated by physical activity. No previous history of cardiac issues.\n\nPhysical Examination: The patient appears distressed and diaphoretic. Blood pressure elevated, heart sounds regular with no murmurs.\n\nAssessment and Plan: Suspected acute coronary syndrome. Urgent ECG performed, which showed ST segment elevation. Patient transferred to the cardiac care unit for further evaluation and management.\n\nSigned,\nDr. Daniel Johnson\n'
    },
    {
        name: 'Emily Davis',
        age: 35,
        gender: 'Female',
        nationalId: '8642097531',
        email: 'emilydavis@example.com',
        report: 'Patient: Emily Davis\n\nMedical Report:\n\nDate: June 17, 2023\n\nChief Complaint: The patient presented with a skin rash and itching.\n\nHistory of Present Illness: The symptoms started a week ago and have progressively worsened. The patient reports no known allergies or recent exposure to irritants.\n\nPhysical Examination: The patient has erythematous and pruritic skin lesions distributed over the extremities. No signs of infection noted.\n\nAssessment and Plan: Suspected allergic contact dermatitis. Prescribed topical corticosteroids and advised avoidance of potential triggers. Follow-up appointment scheduled in two weeks for evaluation.\n\nSigned,\nDr. Sophia Taylor\n'
    },
    {
        name: 'Jacob Thompson',
        age: 48,
        gender: 'Male',
        nationalId: '5738192064',
        email: 'jacobthompson@example.com',
        report: 'Patient: Jacob Thompson\n\nMedical Report:\n\nDate: June 18, 2023\n\nChief Complaint: The patient presented with joint pain and swelling.\n\nHistory of Present Illness: The symptoms have been ongoing for the past month and have affected multiple joints. The patient reports morning stiffness lasting more than an hour.\n\nPhysical Examination: The patient has swollen and tender joints, particularly in the hands and knees. No signs of joint deformity.\n\nAssessment and Plan: Suspected rheumatoid arthritis. Referral made to a rheumatologist for further evaluation and management. Prescribed NSAIDs for symptomatic relief.\n\nSigned,\nDr. Ethan Miller\n'
    },
    {
        name: 'Olivia Clark',
        age: 29,
        gender: 'Female',
        nationalId: '9482750361',
        email: 'oliviaclark@example.com',
        report: 'Patient: Olivia Clark\n\nMedical Report:\n\nDate: June 19, 2023\n\nChief Complaint: The patient presented with persistent fatigue and unexplained weight loss.\n\nHistory of Present Illness: The symptoms have been ongoing for the past few months. The patient also reports increased thirst and frequent urination.\n\nPhysical Examination: The patient appears pale. No lymphadenopathy or organomegaly noted. Blood pressure and pulse within normal range.\n\nAssessment and Plan: Suspected diabetes mellitus. Ordered fasting blood glucose and HbA1c tests. Referred to a specialist for further evaluation.\n\nSigned,\nDr. Ava Anderson\n'
    },
    {
        name: 'William Turner',
        age: 37,
        gender: 'Male',
        nationalId: '3048592716',
        email: 'williamturner@example.com',
        report: 'Patient: William Turner\n\nMedical Report:\n\nDate: June 20, 2023\n\nChief Complaint: The patient presented with persistent back pain.\n\nHistory of Present Illness: The symptoms started after lifting a heavy object. The pain is localized in the lower back and radiates to the right leg.\n\nPhysical Examination: The patient experiences pain upon lumbar spine movement. No neurological deficits noted.\n\nAssessment and Plan: Suspected lumbar disc herniation. Prescribed analgesics and advised physical therapy. Follow-up appointment scheduled in three weeks for evaluation.\n\nSigned,\nDr. Liam Harris\n'
    },
    {
        name: 'Samantha Turner',
        age: 33,
        gender: 'Female',
        nationalId: '5134976208',
        email: 'samanthaturner@example.com',
        report: 'Patient: Samantha Turner\n\nMedical Report:\n\nDate: June 21, 2023\n\nChief Complaint: The patient complained of recurrent episodes of abdominal pain and diarrhea.\n\nHistory of Present Illness: The symptoms have been ongoing for the past six months, with alternating periods of constipation and diarrhea. The patient reports no blood in the stool.\n\nPhysical Examination: The abdomen is soft and non-tender. No palpable masses or organomegaly.\n\nAssessment and Plan: Suspected irritable bowel syndrome. Advised dietary modifications and prescribed symptomatic relief medications. Follow-up appointment scheduled in four weeks for evaluation.\n\nSigned,\nDr. Lily Anderson\n'
    },
    {
        name: 'Henry Davis',
        age: 45,
        gender: 'Male',
        nationalId: '9473625018',
        email: 'henrydavis@example.com',
        report: 'Patient: Henry Davis\n\nMedical Report:\n\nDate: June 22, 2023\n\nChief Complaint: The patient presented with shortness of breath and wheezing.\n\nHistory of Present Illness: The symptoms have been ongoing for the past week, particularly worse at night and with exposure to allergens.\n\nPhysical Examination: The patient has audible wheezing on auscultation. Oxygen saturation slightly decreased. No signs of respiratory distress.\n\nAssessment and Plan: Suspected bronchial asthma. Prescribed bronchodilators and advised avoidance of triggers. Follow-up appointment scheduled in two weeks for evaluation.\n\nSigned,\nDr. Max Taylor\n'
    },
    {
      name: 'Oliver Wilson',
      age: 55,
      gender: 'Male',
      nationalId: '6930475128',
      email: 'oliverwilson@example.com',
      report: 'Patient: Oliver Wilson\n\nMedical Report:\n\nDate: June 23, 2023\n\nChief Complaint: The patient presented with persistent heartburn and regurgitation.\n\nHistory of Present Illness: The symptoms have been ongoing for the past month, particularly after meals. The patient reports occasional coughing at night.\n\nPhysical Examination: No abnormal findings on physical examination.\n\nAssessment and Plan: Suspected gastroesophageal reflux disease. Prescribed proton pump inhibitors and advised dietary modifications. Follow-up appointment scheduled in one month for evaluation.\n\nSigned,\nDr. Chloe Thompson\n'
  },
  {
      name: 'Sophia Hernandez',
      age: 28,
      gender: 'Female',
      nationalId: '9843612570',
      email: 'sophiahernandez@example.com',
      report: 'Patient: Sophia Hernandez\n\nMedical Report:\n\nDate: June 24, 2023\n\nChief Complaint: The patient presented with a sore throat and difficulty swallowing.\n\nHistory of Present Illness: The symptoms started two days ago and have progressively worsened. The patient denies any respiratory symptoms.\n\nPhysical Examination: The patient has mild erythema and swelling of the pharynx. No tonsillar exudate.\n\nAssessment and Plan: Suspected pharyngitis. Prescribed symptomatic relief medications and advised warm saline gargles. Follow-up appointment scheduled in one week for evaluation.\n\nSigned,\nDr. Gabriel Garcia\n'
  },
  {
      name: 'Ava Anderson',
      age: 32,
      gender: 'Female',
      nationalId: '8275309461',
      email: 'avaanderson@example.com',
      report: 'Patient: Ava Anderson\n\nMedical Report:\n\nDate: June 25, 2023\n\nChief Complaint: The patient presented with fatigue and joint pain.\n\nHistory of Present Illness: The symptoms have been ongoing for the past few months and are more pronounced in the morning. The patient reports morning stiffness lasting for more than an hour.\n\nPhysical Examination: The patient has tender and swollen joints, primarily affecting the hands and wrists. No signs of joint deformity.\n\nAssessment and Plan: Suspected rheumatoid arthritis. Ordered laboratory tests and referred to a rheumatologist for further evaluation.\n\nSigned,\nDr. Benjamin Wilson\n'
  },
  {
      name: 'Mia Taylor',
      age: 40,
      gender: 'Female',
      nationalId: '6134958270',
      email: 'miataylor@example.com',
      report: 'Patient: Mia Taylor\n\nMedical Report:\n\nDate: June 26, 2023\n\nChief Complaint: The patient presented with persistent lower back pain.\n\nHistory of Present Illness: The symptoms started after lifting heavy objects. The patient reports radiation of pain to the right leg.\n\nPhysical Examination: The patient experiences pain upon lumbar spine movement. No neurological deficits noted.\n\nAssessment and Plan: Suspected lumbar disc herniation. Prescribed analgesics and advised physical therapy. Follow-up appointment scheduled in three weeks for evaluation.\n\nSigned,\nDr. Alexander Lewis\n'
  },
  {
      name: 'Ethan Wright',
      age: 36,
      gender: 'Male',
      nationalId: '2947810635',
      email: 'ethanwright@example.com',
      report: 'Patient: Ethan Wright\n\nMedical Report:\n\nDate: June 27, 2023\n\nChief Complaint: The patient complained of intermittent abdominal pain and diarrhea.\n\nHistory of Present Illness: The symptoms have been ongoing for the past two weeks, with occasional episodes of loose stools. The patient denies any blood in the stool.\n\nPhysical Examination: The abdomen is soft and non-tender. No palpable masses or organomegaly.\n\nAssessment and Plan: Suspected gastroenteritis. Prescribed symptomatic relief medications and advised oral rehydration therapy. Follow-up appointment scheduled in one week for evaluation.\n\nSigned,\nDr. Olivia Moore\n'
  },
  {
      name: 'Logan Garcia',
      age: 45,
      gender: 'Male',
      nationalId: '8103294765',
      email: 'logangarcia@example.com',
      report: 'Patient: Logan Garcia\n\nMedical Report:\n\nDate: June 28, 2023\n\nChief Complaint: The patient presented with chest pain and shortness of breath.\n\nHistory of Present Illness: The symptoms started a few hours ago and are unrelated to physical activity. The patient denies any previous cardiac issues.\n\nPhysical Examination: The patient appears anxious. Blood pressure slightly elevated, heart sounds regular with no murmurs.\n\nAssessment and Plan: Suspected non-cardiac chest pain. ECG performed, which showed no significant abnormalities. Advised reassurance and stress management techniques. Follow-up appointment scheduled in one month for evaluation.\n\nSigned,\nDr. Mia Johnson\n'
  },
  {
      name: 'Liam Martinez',
      age: 29,
      gender: 'Male',
      nationalId: '1059824736',
      email: 'liammartinez@example.com',
      report: 'Patient: Liam Martinez\n\nMedical Report:\n\nDate: June 29, 2023\n\nChief Complaint: The patient complained of recurrent headaches and visual disturbances.\n\nHistory of Present Illness: The symptoms have been ongoing for the past month and are characterized by pulsating pain on one side of the head. The patient also reports visual aura preceding the headaches.\n\nPhysical Examination: No abnormal findings on physical examination.\n\nAssessment and Plan: Suspected migraine with aura. Prescribed specific migraine medications and advised lifestyle modifications. Follow-up appointment scheduled in one month for evaluation.\n\nSigned,\nDr. Harper Rodriguez\n'
  },
  {
      name: 'Charlotte White',
      age: 37,
      gender: 'Female',
      nationalId: '7284136590',
      email: 'charlottewhite@example.com',
      report: 'Patient: Charlotte White\n\nMedical Report:\n\nDate: June 30, 2023\n\nChief Complaint: The patient presented with abdominal pain and bloating.\n\nHistory of Present Illness: The symptoms have been ongoing for the past two weeks and are aggravated after meals. The patient denies any changes in bowel habits.\n\nPhysical Examination: The patient\'s abdomen is tender on palpation in the lower quadrants. No signs of peritonitis.\n\nAssessment and Plan: Suspected irritable bowel syndrome. Advised dietary modifications and prescribed symptomatic relief medications. Follow-up appointment scheduled in one month for evaluation.\n\nSigned,\nDr. Noah Davis\n'
  },
  {
      name: 'Harper Rodriguez',
      age: 31,
      gender: 'Female',
      nationalId: '9304857261',
      email: 'harperrodriguez@example.com',
      report: 'Patient: Harper Rodriguez\n\nMedical Report:\n\nDate: July 1, 2023\n\nChief Complaint: The patient presented with fatigue and generalized weakness.\n\nHistory of Present Illness: The symptoms have been ongoing for the past two months, and the patient reports no recent illness or significant stress.\n\nPhysical Examination: The patient appears pale. No lymphadenopathy or organomegaly noted. Blood pressure and pulse within normal range.\n\nAssessment and Plan: Suspected iron deficiency anemia. Ordered laboratory tests and prescribed iron supplements. Follow-up appointment scheduled in one month for evaluation.\n\nSigned,\nDr. Oliver Wilson\n'
  },
  {
      name: 'Chloe Thompson',
      age: 43,
      gender: 'Female',
      nationalId: '6095183472',
      email: 'chloethompson@example.com',
      report: 'Patient: Chloe Thompson\n\nMedical Report:\n\nDate: July 2, 2023\n\nChief Complaint: The patient presented with joint pain and morning stiffness.\n\nHistory of Present Illness: The symptoms have been ongoing for the past six months, primarily affecting the hands and wrists. The patient reports morning stiffness lasting more than an hour.\n\nPhysical Examination: The patient has tender and swollen joints, particularly in the small joints of the hands. No signs of joint deformity.\n\nAssessment and Plan: Suspected rheumatoid arthritis. Ordered laboratory tests and referred to a rheumatologist for further evaluation.\n\nSigned,\nDr. Ethan Wright\n'
  },
  {
    name: 'Emma Clark',
    age: 27,
    gender: 'Female',
    nationalId: '3765920148',
    email: 'emmaclark@example.com',
    report: 'Patient: Emma Clark\n\nMedical Report:\n\nDate: July 3, 2023\n\nChief Complaint: The patient presented with a persistent cough and shortness of breath.\n\nHistory of Present Illness: The symptoms have been ongoing for the past two weeks, and the patient reports no significant improvement with over-the-counter medications.\n\nPhysical Examination: The patient has decreased breath sounds on the right lower lung field. No signs of respiratory distress.\n\nAssessment and Plan: Suspected pneumonia. Ordered a chest X-ray and prescribed antibiotics. Follow-up appointment scheduled in one week for evaluation.\n\nSigned,\nDr. Ava Anderson\n'
},
{
    name: 'William Baker',
    age: 42,
    gender: 'Male',
    nationalId: '1958374602',
    email: 'williambaker@example.com',
    report: 'Patient: William Baker\n\nMedical Report:\n\nDate: July 4, 2023\n\nChief Complaint: The patient complained of intermittent chest pain and palpitations.\n\nHistory of Present Illness: The symptoms have been ongoing for the past month, primarily occurring during periods of exertion. The patient denies any shortness of breath.\n\nPhysical Examination: No abnormal findings on physical examination.\n\nAssessment and Plan: Suspected stable angina. Ordered a stress test and advised lifestyle modifications. Follow-up appointment scheduled in two weeks for evaluation.\n\nSigned,\nDr. Liam Martinez\n'
},
{
    name: 'Sebastian Thompson',
    age: 33,
    gender: 'Male',
    nationalId: '8304679125',
    email: 'sebastianthompson@example.com',
    report: 'Patient: Sebastian Thompson\n\nMedical Report:\n\nDate: July 5, 2023\n\nChief Complaint: The patient presented with a skin rash and itching.\n\nHistory of Present Illness: The symptoms started a week ago and have progressively worsened. The patient denies any known allergens or exposure to new substances.\n\nPhysical Examination: The patient has erythematous, raised, and pruritic lesions on the extremities. No signs of infection.\n\nAssessment and Plan: Suspected contact dermatitis. Prescribed topical corticosteroids and advised avoidance of irritants. Follow-up appointment scheduled in two weeks for evaluation.\n\nSigned,\nDr. Harper Rodriguez\n'
},
{
    name: 'Abigail Scott',
    age: 39,
    gender: 'Female',
    nationalId: '6374952180',
    email: 'abigailscott@example.com',
    report: 'Patient: Abigail Scott\n\nMedical Report:\n\nDate: July 6, 2023\n\nChief Complaint: The patient presented with abdominal pain and bloating.\n\nHistory of Present Illness: The symptoms have been ongoing for the past month and are aggravated after meals. The patient reports changes in bowel habits, alternating between diarrhea and constipation.\n\nPhysical Examination: The abdomen is distended and tender on palpation in the lower quadrants. No signs of peritonitis.\n\nAssessment and Plan: Suspected irritable bowel syndrome. Advised dietary modifications and prescribed symptomatic relief medications. Follow-up appointment scheduled in one month for evaluation.\n\nSigned,\nDr. Oliver Wilson\n'
},
{
    name: 'Sofia Davis',
    age: 48,
    gender: 'Female',
    nationalId: '9182734056',
    email: 'sofiadavis@example.com',
    report: 'Patient: Sofia Davis\n\nMedical Report:\n\nDate: July 7, 2023\n\nChief Complaint: The patient presented with persistent fatigue and unexplained weight loss.\n\nHistory of Present Illness: The symptoms have been ongoing for the past three months, and the patient reports a loss of appetite. No significant medical history.\n\nPhysical Examination: No abnormal findings on physical examination.\n\nAssessment and Plan: Suspected underlying medical condition. Ordered comprehensive blood tests and referred to a specialist for further evaluation. Follow-up appointment scheduled in two weeks for evaluation.\n\nSigned,\nDr. Chloe Thompson\n'
},
{
    name: 'Henry Rodriguez',
    age: 56,
    gender: 'Male',
    nationalId: '5629018743',
    email: 'henryrodriguez@example.com',
    report: 'Patient: Henry Rodriguez\n\nMedical Report:\n\nDate: July 8, 2023\n\nChief Complaint: The patient presented with progressive joint pain and swelling.\n\nHistory of Present Illness: The symptoms have been ongoing for the past six months, primarily affecting the knees and wrists. The patient reports morning stiffness lasting for more than an hour.\n\nPhysical Examination: The patient has tender and swollen joints, particularly in the large joints. Limited range of motion noted.\n\nAssessment and Plan: Suspected osteoarthritis. Ordered imaging studies and prescribed analgesics. Follow-up appointment scheduled in one month for evaluation.\n\nSigned,\nDr. Noah Davis\n'
},
{
    name: 'Aria Wright',
    age: 24,
    gender: 'Female',
    nationalId: '6753092841',
    email: 'ariawright@example.com',
    report: 'Patient: Aria Wright\n\nMedical Report:\n\nDate: July 9, 2023\n\nChief Complaint: The patient presented with recurrent urinary tract infections.\n\nHistory of Present Illness: The symptoms have been recurring over the past few months, with dysuria and frequency. The patient denies any hematuria.\n\nPhysical Examination: No abnormal findings on physical examination.\n\nAssessment and Plan: Suspected urinary tract infection. Ordered urine culture and prescribed antibiotics. Advised hygiene measures and increased fluid intake. Follow-up appointment scheduled in two weeks for evaluation.\n\nSigned,\nDr. Mia Taylor\n'
},
{
    name: 'Elijah Martinez',
    age: 57,
    gender: 'Male',
    nationalId: '4725901836',
    email: 'elijahmartinez@example.com',
    report: 'Patient: Elijah Martinez\n\nMedical Report:\n\nDate: July 10, 2023\n\nChief Complaint: The patient complained of recurrent heartburn and indigestion.\n\nHistory of Present Illness: The symptoms have been ongoing for the past year, particularly after meals and when lying down. The patient reports occasional regurgitation.\n\nPhysical Examination: No abnormal findings on physical examination.\n\nAssessment and Plan: Suspected gastroesophageal reflux disease. Prescribed proton pump inhibitors and advised dietary modifications. Follow-up appointment scheduled in one month for evaluation.\n\nSigned,\nDr. Sophia Hernandez\n'
}
      
    ];

    // Insert the dummy records
    await MedicalRecord.insertMany(dummyRecords);

    console.log('Dummy data populated successfully');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error populating dummy data:', error);
    mongoose.connection.close();
  }
}
