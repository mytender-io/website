"use server";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  title: string;
  customerType: string;
  revenue: string;
  teamSize: string;
  referralSource: string;
};

export const sendToMonday = async (data: FormData) => {
  const MONDAY_BOARD_ID = process.env.MONDAY_BOARD_ID!;
  const MONDAY_API_TOKEN = process.env.MONDAY_API_TOKEN!;
  const MONDAY_BASE_URL = process.env.MONDAY_BASE_URL!;

  const payload = {
    query: `
      mutation {
        create_item (
          board_id: ${MONDAY_BOARD_ID},
          item_name: "${data.firstName} ${data.lastName}",
          column_values: """${JSON.stringify({
            text_mkpthq7f: data.company,
            text_mkptjghe: data.title,
            text_mkptrv04: data.firstName,
            text_mkptwkzh: data.lastName,
            email_mkptzeg8: {
              email: data.email,
              text: data.email,
            },
            text_mkptfc1v: data.customerType,
            text_mkptttvx: data.revenue,
            text_mkptde8a: data.teamSize,
            text_mkpthkp3: data.referralSource,
            text_mkptd350: data.phone,
          })}"""
        ) {
          id
        }
      }
    `,
  };

  const response = await fetch(MONDAY_BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${MONDAY_API_TOKEN}`,
    },
    body: JSON.stringify(payload),
  });

  const result = await response.json();

  if (result.errors) {
    throw new Error("Failed to submit to Monday.com");
  }

  return result;
};
