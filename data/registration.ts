export const registrationInstructions = [
  "At least one author per accepted paper has to register.",
  "At least one author must present their accepted paper in the conference for consideration of publication on IEEE explore.",
  "Registration fee for the paper (**with authorship**) includes access to the pre conference tutorial, conference proceedings, all technical sessions and presenter certificate.",
  "Registration fee for the **pre conference tutorial** includes access to the pre conference tutorial only (7th Nov 2024).",
  "Registration fee for the **conference participation without authorship-attendee** is not entitled for paper publication, however participation certificate will be provided.",
  "Registration for **Indian Delegates is through Razorpay** and **Foreign Delegates can use the account details** mentioned for bank transfer.",
  "While registering for **Best Thesis Award**, enter paper id as 9999.",
];

export const importantNotes = [
  "Registration category should be chosen appropriately from the aforementioned table.",
  "Registration fees are not refundable or non-transferable.",
  "You must save the payment proof in pdf. This payment proof file is to be attached in a section while filling the registration form.",
  "CSITSS-2024 organizing committee will not be responsible for any financial loss caused by improper transactions during registration process in CSITSS-2024.",
  "The author's name(s) must match the ones provided during the manuscript submission, registration (There should be one/same name at all stages of the conference).",
  "The submission of invalid proofs will lead to the cancellation of participation in the conference.",
];

export const bankDetails = {
  beneficiaryName: "PRINCIPAL, RVCE",
  accountNumber: "136010112055",
  bankName: "KOTAK MAHINDRA BANK",
  branchName: "RVCE Campus, Bengaluru",
  ifscCode: "KKBK0008053",
  swiftCode: "KKBKINBB",
};

export const registrationFees = {
  indian: {
    earlyBird: {
      ieee: {
        student: 5310,
        academician: 7080,
        industry: 8260,
      },
      nonIeee: {
        student: 6490,
        academician: 8260,
        industry: 9440,
      },
    },
    regular: {
      ieee: {
        student: 6490,
        academician: 8260,
        industry: 11800,
      },
      nonIeee: {
        student: 7670,
        academician: 10030,
        industry: 15930,
      },
    },
    tutorial: 500,
  },
  foreign: {
    earlyBird: {
      ieee: {
        student: 80,
        academician: 100,
        industry: 110,
      },
      nonIeee: {
        student: 110,
        academician: 130,
        industry: 135,
      },
    },
    regular: {
      ieee: {
        student: 110,
        academician: 135,
        industry: 200,
      },
      nonIeee: {
        student: 130,
        academician: 165,
        industry: 240,
      },
    },
    tutorial: 25,
  },
};
