// we need params to render data dynmaivally
// metadata
//  we need some navigation
import { db } from "@/utils/dbConnection";
import Image from "next/image";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function generateMetadata({ params, searchParams }, parent) {
  const destinations = await db.query(
    `SELECT * FROM destinations WHERE id = $1 LIMIT 1;`,
    [params.id]
  );

  const destination = destinations.rows[0];

  return {
    title: destination.destination_name,
  };
}

export default async function IndividualDesitinationsPage({ params }) {
  const destinations = await db.query(
    `SELECT * FROM destinations WHERE id = $1 LIMIT 1;`,
    [params.id]
  );
  if (destinations.rows.length === 0) {
    return "Destination not found";
  }
  const destination = destinations.rows[0];
  console.log(destination, "this is my destination");
  // here I need to get my posts from the database filtering by id (WHERE id = ${params.id})
  // here In need to handle the submit fro the comments form
  async function handleSubmit(formValues) {
    "use server";

    const formData = {
      user_name: formValues.get("user_name"),
      comment: formValues.get("comment"),
      recommendation: formValues.get("recommendation"),
    };

    console.log(formData, "this is my user comment");

    await db.query(
      `INSERT INTO comments (user_name, comment, recommendation, destination_id) VALUES ($1, $2, $3, $4)`,
      [formData.user_name, formData.comment, formData.recommendation, params.id]
    );
    revalidatePath(`/destinations/${params.id}`);
    redirect(`/destinations/${params.id}`);
  }
  // here i needed to remeber to add the comments.id as it wasn't in my comments so I couldn't delete it
  const comments = await db.query(
    `SELECT
    comments.id, comments.user_name, comments.comment, comments.recommendation
  FROM comments
  JOIN destinations ON destinations.id = comments.destination_id  WHERE destination_id = $1`,
    [params.id]
  );
  console.log(comments, "these are my comments");
  const wrangledComments = comments.rows;

  async function handleDelete(formValues) {
    "use server";
    const commentId = formValues.get("comment_id");
    const deleteComment = await db.query(
      `DELETE FROM comments WHERE id = $1 RETURNING *`,
      [commentId]
    );
    revalidatePath(`/destinations/${params.id}`);
    redirect(`/destinations/${params.id}`);
  }

  return (
    <>
      <div key={destination.id} className="flex flex-col items-center">
        <Image
          src={destination.image}
          alt={destination.destination_name}
          width={200}
          height={200}
        />
        <h2>{destination.destination_name}</h2>
        <h3>{destination.location}</h3>
        <p className="p-20">{destination.information}</p>
      </div>

      {/* here i need to display an individual posts and relevant data  */}
      <h2 className="text-center p-10">
        Tell us what you think of {destination.destination_name}.
      </h2>
      <form action={handleSubmit} className="flex flex-col items-center">
        <label htmlFor="user_name">Enter your name.</label>
        <input id="user_name" name="user_name" type="text" required />
        <label htmlFor="comment">
          Please enter your comment about {destination.destination_name}
        </label>
        <textarea id="comment" name="comment" required />
        <label htmlFor="recommendation">
          From 1 to 10, with 10 the highest. How likely are you to recommend
          {destination.destination_name}.
        </label>
        <input
          id="recommendation"
          name="recommendation"
          type="number"
          required
          min={1}
          max={10}
        />

        <button
          type="submit"
          className="border-black-400 border-4 bg-pink-400 p-4 m-4"
        >
          submit
        </button>
      </form>
      {/* here I will display a form with inputs that are connected to the database commnents table  */}
      {/* here i need to display the comments associated with the destination */}
      {/* in order to have the delete button in the form and use a function I had to make the button a form as that is how next js can use it in the database similar to the handleSubmit, the value is comment.id and type="hidden"  so the user doesn't see it*/}
      {wrangledComments.map((comment) => (
        <form action={handleDelete} key={comment.id} className="text-center">
          <div className="p-10">
            <h2>{comment.user_name}</h2>
            <p>{comment.comment}</p>
            <p>{comment.recommendation}</p>
            <input type="hidden" value={`${comment.id}`} name="comment_id" />
            <button
              type="submit"
              className="border-black-400 border-4 bg-pink-400 p-4 m-4"
            >
              Delete this Post
            </button>
          </div>
        </form>
      ))}
    </>
  );
}
