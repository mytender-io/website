"use server";

import { sendToMonday } from "../api/moday";

export async function handleBookDemo(data: any) {
  try {
    const response = await sendToMonday(data);
    return { success: true, data: response };
  } catch (error) {
    console.error("Error submitting to Monday.com:", error);
    return { success: false, error: "Something went wrong" };
  }
}