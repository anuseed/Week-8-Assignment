import { db } from "@/utils/dbConnection";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default function NewDestinationPage() {
  // here i need to handle the submit of the posts form
  async function handleSavePost(formData) {
    "use server";
    console.log("saving destination to database");

    const destination_name = formData.get("destination_name");
    const location = formData.get("location");
    const information = formData.get("information");
    const image = formData.get("image");

    await db.query(
      `INSERT INTO destinations (destination_name, location, information, image) VALUES ($1, $2, $3, $4)`,
      [destination_name, location, information, image]
    );
    console.log(" new destinaion saved");

    revalidatePath("/destinations");
    redirect("/destinations");
  }

  return (
    <>
      <p className="flex flex-col items-center">
        Please add a new destination here
      </p>
      <form action={handleSavePost} className="flex flex-col items-center p-10">
        <label html="desitination_name">
          What is the name of your destination?
        </label>
        <input
          id="destination_name"
          name="destination_name"
          type="text"
          required
        />
        <label htmlFor="location">Where is your destination?</label>
        <input id="location" name="location" type="text" required />
        <label htmlFor="information">
          Tell us a bit about your destination.
        </label>
        <textarea id="information" name="information" required />
        <label html="image">
          Add an image of your destination by adding an url
        </label>
        <input id="image" name="image" type="text" required />
        <button
          type="submit"
          className="border-black-400 border-4 bg-pink-400 p-4 m-4"
        >
          Save
        </button>
      </form>
    </>
  );
}
