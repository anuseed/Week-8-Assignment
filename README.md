🎯 Display all posts on the page, with an option to sort them in ascending or descending order.
🎯 Create a SQL schema for a posts table and a comments table, with the comments being connected to the posts table with a foreign key.
Please submit your database schema, as is mentioned in the submission instructions.
🎯 Create a delete button on posts that allows users to delete the post from the database.
🎯 Create a form which saves comments to a dedicated comments table, with the comments being connected to the posts table with a foreign key.
🎯 Allow users to comment on individual posts in their dynamic routes. Comments should be associated with posts, and have a dynamic route (e.g. /posts/:postid).
🎯 Add a redirect when a user creates a post to redirect them to the posts page.

# Database Planning

This was my intial plan. See supabase database schema for update.
![Draw SQL Database](../week-8-assignment/public/images/Screenshot%202024-10-18%20at%2010.12.42.png)

![Supabase Database](../week-8-assignment/public/images/Screenshot%202024-10-20%20at%2021.27.10.png)

# Wireframe Plannning

![Ok So Wireframe](../week-8-assignment/public/images/Screenshot%202024-10-18%20at%2010.12.57.png)
This was my initial wireframe - I changed it to be only nature based destination and the category sort to happen on the homepage.

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
  Figured out how to do this by using dot notation
- add delete button to comments rather than post
  done - this was suprisingly tricky added comments in my code but essentially had to wrap the button in a from element
- styling
  very basic using tailwind
  This was not so easy. Neither of the 3 methods tailwind, modules or the global were very intuitive to me, so I did not enjoy this so much using these methods. Used tailwind mostly as that was the quickest.
- stretch add categories to destination
  Added categories but hard coded the id's rather than sorting by name also used the link attached to the image to sort categories with a param. Changed my database table for categories so each category was a row and I used category_name as the the column.
  -- still need to sort post by asc and desc --- finding this a bit tricky as only know how to do so in the client
  Notes in code about this but ended up doing it by using a link, as done in the workshops.

  - add a link to got back to destinations or add destination when user submits comment
    done

    Overall some aspects of the code was very hacky and I would have liked to have the time to do some aspects better, especially the category sort and styling.
