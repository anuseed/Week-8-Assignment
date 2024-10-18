// we need params to render data dynmaivally
// metadata
//  we need some navigation
import { db } from "@/utils/dbConnection";
import Image from "next/image";

export default async function IndividualDesitinationsPage({ params }) {
  const destination = await db.query(
    `SELECT * FROM destinations WHERE id = ${params.id};`
  );
  const wrangledDestination = destination.rows;
  console.log(wrangledDestination, "this is my destination");
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
  }
  const comments = await db.query(`SELECT
    comments.user_name, comments.comment, comments.recommendation
  FROM comments
  JOIN destinations ON destinations.id = comments.destination_id  WHERE destination_id = ${params.id}`);
  console.log(comments, "these are my comments");
  const wrangledComments = comments.rows;

  return (
    <>
      {wrangledDestination.map((destination) => (
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
      ))}
      {/* here i need to display an individual posts and relevant data  */}
      <h2 className="text-center p-10">
        Tell us what you think of {params.id}.
      </h2>
      <form action={handleSubmit} className="flex flex-col items-center">
        <label htmlFor="user_name">Enter your name.</label>
        <input id="user_name" name="user_name" type="text" required />
        <label htmlFor="comment">
          Please enter your comment about {params.id}
        </label>
        <textarea id="comment" name="comment" required />
        <label htmlFor="recommendation">
          From 1 to 10, with 10 the highest. How likely are you to recommend{" "}
          {params.id}{" "}
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
      {wrangledComments.map((comment) => (
        <div key={comment.id} className="p-10">
          <h2>{comment.user_name}</h2>
          <p>{comment.comment}</p>
          <p>{comment.recommendation}</p>
        </div>
      ))}
    </>
  );
}
