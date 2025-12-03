"use server";

import { revalidatePath } from "next/cache";
import { createContact, deleteContact } from "../api/contact";
import { error } from "console";
import { getSession } from "../_lib/session";
import { ContactType } from "../_types/contact";

export const createContactAction = async (
  prevState: any,
  formData: FormData
) => {
  if (!formData) {
    return { error: "form data is missing" };
  }
  const user = await getSession();

  const newContact: ContactType = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    userId: user?.id,
  };
  try {
    await createContact(newContact);
    revalidatePath("/contact");
    return { success: true };
  } catch (error) {
    console.log("Error creating Contact:", error);
    return { error: "Failed to create Contact" };
  }
};

export const updateContactAction = async (
  prevState: any,
  formData: FormData
) => {};

export const deleteContactAction = async (
  prevState: any,
  formData: FormData
) => {
  const id = formData.get("id") as string;

  try {
    await deleteContact(id);
    revalidatePath("/contact");
    return { success: true };
  } catch (error) {
    console.log("Error deleting Contact:", error);
    return { error: "Failed to delete Contact" };
  }
};
