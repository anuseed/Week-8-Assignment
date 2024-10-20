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
    const category_id = formData.get("category_id");

    await db.query(
      `INSERT INTO destinations (destination_name, location, information, image, category_id) VALUES ($1, $2, $3, $4, $5)`,
      [destination_name, location, information, image, category_id]
    );
    console.log(" new destinaion saved");

    revalidatePath("/destinations");
    redirect("/destinations");
  }

  return (
    <>
      <p className="text-center text-white text-2xl m-5">
        Please add a destination to escape in nature.
      </p>
      <form action={handleSavePost} className="flex flex-col items-center m-10">
        <label html="desitination_name" className="p-5">
          What is the name of your destination?
        </label>
        <input
          id="destination_name"
          name="destination_name"
          type="text"
          className="text-black"
          required
        />
        <label htmlFor="location" className="p-5">
          Where is your destination?
        </label>
        <input id="location" name="location" type="text" required />
        <label htmlFor="information" className="p-5">
          Tell us a bit about your destination.
        </label>
        <textarea id="information" name="information" required />
        <label html="image" className="p-5">
          Add an image of your destination by adding an url.
        </label>
        <input id="image" name="image" type="text" required />
        <select
          name="category_id"
          id="category_id"
          className="m-10 text-neutral-800
"
        >
          <option value="">Choose a category for your destination.</option>
          <option value="1">Mountain</option>
          <option value="2">Sea</option>
          <option value="3">Forest</option>
          <option value="4">Snow</option>
          <option value="5">Desert</option>
          <option value="6">Countryside</option>
        </select>
        <button
          type="submit"
          className=" rd-2 border-4 bg-blue-400 rounded-md p-4 m-4"
        >
          Save
        </button>
      </form>
    </>
  );
}
