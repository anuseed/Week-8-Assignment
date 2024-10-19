🎯 Display all posts on the page, with an option to sort them in ascending or descending order.
🎯 Create a SQL schema for a posts table and a comments table, with the comments being connected to the posts table with a foreign key.
Please submit your database schema, as is mentioned in the submission instructions.
🎯 Create a delete button on posts that allows users to delete the post from the database.
🎯 Create a form which saves comments to a dedicated comments table, with the comments being connected to the posts table with a foreign key.
🎯 Allow users to comment on individual posts in their dynamic routes. Comments should be associated with posts, and have a dynamic route (e.g. /posts/:postid).
🎯 Add a redirect when a user creates a post to redirect them to the posts page.

# Database Planning

![Draw SQL Database](../week-8-assignment/public/images/Screenshot%202024-10-18%20at%2010.12.42.png)
![Supabase Database](../week-8-assignment/public/images/Screenshot%202024-10-18%20at%2010.12.48.png)

# Wireframe Plannning

![Ok So Wireframe](../week-8-assignment/public/images/Screenshot%202024-10-18%20at%2010.12.57.png)

# Workflow planning

- Basic template with nav links and content
  done
- Routes (static, dynamic)
  done
- Displaying the data from the db
  done
- Sending data to the db
  done

# Still to do

- add metadata
  done
  would have liked to add the name of the destination to the url rather than the id not sure where this would be done
- add delete button to comments rather than post
  done
- styling
  very basic using tailwind
- stretch add categories to destination
  left this one
  -- still need to sort post by asc and desc --- finding this a bit tricky as only know how to do so in the client
  - add a link to got back to destinations or add destination when user submits comment
